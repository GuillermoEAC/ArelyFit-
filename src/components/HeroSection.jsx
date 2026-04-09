import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';
import heroImg from '../assets/Arely_picture_gluteos3.PNG.jpeg';

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
      <div className="hero-inner">
        {/* Content */}
        <div className="hero-content">
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

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">???+</span>
              <span className="hero-stat-label">Clientas felices</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">4</span>
              <span className="hero-stat-label">Programas</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">4</span>
              <span className="hero-stat-label">Idiomas</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-bg" />
          <img
            src={heroImg}
            alt="Arely Fit — Programas de fitness para mujeres"
            className="hero-image"
          />
        </div>
      </div>

      {/* Rotating Slogan Banner */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255,255,255,0.8)',
          padding: '14px 24px',
          textAlign: 'center',
          transition: 'opacity 0.4s ease',
          opacity: fade ? 1 : 0,
        }}
      >
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
          color: 'var(--text-secondary)',
          margin: 0,
        }}>
          "{t[SLOGANS_KEY[sloganIdx]]}"
        </p>
      </div>
    </section>
  );
}
