import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ChevronDown } from 'lucide-react';
import heroImg from '../assets/Arely_picture_gluteos3.PNG.jpeg';
import AnimatedSection from './AnimatedSection';

const SLOGANS_KEY = ['slogan_1', 'slogan_2', 'slogan_3', 'slogan_4', 'slogan_5'];

export default function HeroSection() {
  const { t } = useApp();
  const [sloganIdx, setSloganIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSloganIdx(i => (i + 1) % SLOGANS_KEY.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      {/* Full-bleed background image */}
      <div
        className="hero-bg-img"
        style={{
          backgroundImage: `url("${heroImg}")`,
        }}
      />
      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Floating glass card — content lives here */}
      <div className="hero-inner">
        <AnimatedSection className="hero-glass-card" animation="fade-up">
          <div className="hero-badge">
            <Sparkles size={14} />
            arely.fit — Programas Premium
          </div>

          <h1 className="hero-title">
            {t.hero_tagline}<br />
            <span className="highlight">{t.hero_tagline2}</span>
          </h1>

          <p className="hero-attribution">{t.hero_attribution}</p>
          <p className="hero-description">{t.hero_sub}</p>

          <div className="hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => scrollTo('programs')}
              id="hero-cta-programs"
            >
              {t.hero_cta} →
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => scrollTo('nutrition')}
              id="hero-cta-nutrition"
            >
              {t.hero_cta2}
            </button>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">???+</span>
              <span className="hero-stat-label">Clientas felices</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">4</span>
              <span className="hero-stat-label">Programas</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">4</span>
              <span className="hero-stat-label">Idiomas</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Rotating Slogan */}
        <div
          className="hero-slogan"
          style={{ opacity: fade ? 1 : 0 }}
        >
          <p className="hero-slogan-text">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', marginTop: '-2px' }} />
            "{t[SLOGANS_KEY[sloganIdx]]}"
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero-scroll-btn"
        onClick={() => scrollTo('programs')}
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>
    </section>
  );
}
