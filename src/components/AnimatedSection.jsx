import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children, className = '', animation = 'fade-up', delay = 0, style = {} }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    const currentRef = domRef.current;
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal ${isVisible ? 'reveal-active' : ''} reveal-${animation} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
