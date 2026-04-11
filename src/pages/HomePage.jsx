import { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Dumbbell, Salad, Users, ChevronRight, BarChart3, ShoppingCart,
  Award, Clock, Globe, Heart, Zap, Flame, CircleDot, Leaf, AlertTriangle, Star, Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import CheckoutModal from '../components/CheckoutModal';
import LanguageCurrencyModal from '../components/LanguageCurrencyModal';
import Footer from '../components/Footer';
import { PROGRAMS } from '../data/programs';
import AnimatedSection from '../components/AnimatedSection';

import arelyPic1 from '../assets/Arely_picture1.jpeg';
import arelyPic2 from '../assets/Arely_picture2.jpeg';
import arelyPic3 from '../assets/Arely_picture3.jpeg';

const PROGRAM_ICONS = {
  'glam-glutes': Flame,
  'full-body-glow': Zap,
  'core-confidence': CircleDot,
  'nutrition-guide': Leaf,
};

const PROGRAM_COLORS = {
  'glam-glutes': { from: '#FDE8E8', to: '#F9C5C5', accent: '#D4A5A5' },
  'full-body-glow': { from: '#EDE9FC', to: '#DDD6F3', accent: '#B8A9D9' },
  'core-confidence': { from: '#E2F5EE', to: '#C8EDE0', accent: '#8DCAB4' },
  'nutrition-guide': { from: '#FFF3E4', to: '#FBDAB5', accent: '#E8C99A' },
};

export default function HomePage() {
  const { t, showWelcomeModal, convertPrice, openCheckout } = useApp();
  const [showLangModal, setShowLangModal] = useState(false);
  const [showConstructionModal, setShowConstructionModal] = useState(false);

  const fitnessPrograms = PROGRAMS.slice(0, 3);
  const nutritionProgram = PROGRAMS[3];

  return (
    <>
      {showWelcomeModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
          <LanguageCurrencyModal />
        </div>
      )}

      {showLangModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setShowLangModal(false)}>
          <div onClick={e => e.stopPropagation()}>
            <LanguageCurrencyModal onClose={() => setShowLangModal(false)} forceShow />
          </div>
        </div>
      )}

      {showConstructionModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setShowConstructionModal(false)}>
          <div className="checkout-modal" onClick={e => e.stopPropagation()} style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <AlertTriangle size={48} color="var(--rose-dark)" />
            </div>
            <h2 className="heading-lg" style={{ marginBottom: '12px' }}>En Construcción</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              Esta página estará lista muy pronto. ¡Estamos trabajando en los últimos detalles legales!
            </p>
            <button className="btn btn-primary btn-full" onClick={() => setShowConstructionModal(false)}>
              Entendido
            </button>
          </div>
        </div>
      )}

      <CheckoutModal />
      <Navbar onLangCurrencyOpen={() => setShowLangModal(true)} />
      <HeroSection />

      {/* ───────────── FEATURE STRIP ───────────── */}
      <AnimatedSection animation="fade-up">
        <div className="feature-strip">
          {[
            { icon: <Flame size={20} color="var(--rose-dark)" />, label: 'Entrenamiento progresivo' },
            { icon: <Salad size={20} color="var(--rose-dark)" />, label: 'Nutrición personalizada' },
            { icon: <Globe size={20} color="var(--rose-dark)" />, label: '4 idiomas disponibles' },
            { icon: <Sparkles size={20} color="var(--rose-dark)" />, label: 'Resultados reales' },
          ].map((f) => (
            <div key={f.label} className="feature-strip-item">
              <span className="feature-strip-icon">{f.icon}</span>
              <span className="feature-strip-label">{f.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ───────────── PROGRAMS SECTION ───────────── */}
      <section className="programs-section" id="programs">
        <div className="container">
          <AnimatedSection className="section-header" animation="fade-up">
            <span className="section-tag">
              <Dumbbell size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
              Programas
            </span>
            <h2 className="heading-display" style={{ marginBottom: '8px' }}>
              {t.programs_title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              {t.programs_subtitle}
            </p>
          </AnimatedSection>

          {/* Showcase-style horizontal program cards */}
          <div className="showcase-grid">
            {fitnessPrograms.map((program, idx) => {
              const colors = PROGRAM_COLORS[program.id] || PROGRAM_COLORS['glam-glutes'];
              const Icon = PROGRAM_ICONS[program.id] || Flame;
              const name = t[program.nameKey] || program.nameKey;
              const desc = t[program.descKey] || program.descKey;
              const category = t[program.category] || program.category;
              const level = t[program.levelKey] || program.levelKey;
              const price = convertPrice(program.price);
              const includes = t[program.includesKey] || [];

              return (
                <AnimatedSection
                  key={program.id}
                  animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                  delay={idx * 120}
                >
                  <div
                    className="showcase-card"
                    style={{ '--card-from': colors.from, '--card-to': colors.to, '--card-accent': colors.accent }}
                  >
                    {/* Image panel */}
                    <div
                      className="showcase-card-img"
                      style={{
                        backgroundImage: program.image
                          ? `linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 60%), url("${program.image}")`
                          : `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                      }}
                    >
                      {idx === 1 && (
                        <span className="showcase-popular-badge">
                          <Star size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} color="white" fill="white" />
                          Popular
                        </span>
                      )}
                      <div className="showcase-card-img-overlay">
                        <div className="showcase-price-pill">{price}</div>
                      </div>
                    </div>

                    {/* Text panel */}
                    <div className="showcase-card-body">
                      <div className="showcase-meta">
                        <span className="showcase-category" style={{ color: colors.accent }}>
                          <Icon size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                          {category}
                        </span>
                        <span className="showcase-level">{level}</span>
                      </div>

                      <h3 className="showcase-title">{name}</h3>
                      <p className="showcase-desc">{desc}</p>

                      <ul className="showcase-includes">
                        {includes.slice(0, 3).map((item, i) => (
                          <li key={i}>
                            <span style={{ color: colors.accent, marginRight: '6px' }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="showcase-footer">
                        <div>
                          <div className="showcase-duration">
                            <Clock size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                            {program.durationWeeks ? `${program.durationWeeks} ${t.weeks}` : t.permanent}
                          </div>
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={() => openCheckout(program)}
                          id={`buy-btn-${program.id}`}
                        >
                          <ShoppingCart size={14} />
                          {t.buy_now}
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── PARALLAX QUOTE ───────────── */}
      <AnimatedSection animation="fade-up">
        <div
          className="parallax-quote-section"
          style={{
            backgroundImage: `url("${arelyPic2}")`,
          }}
        >
          <div className="parallax-quote-overlay" />
          <div className="parallax-quote-content">
            <p className="parallax-quote-text">
              "Tu cuerpo es tu obra maestra.{' '}
              <em>Cuídalo.</em>"
            </p>
            <p className="parallax-quote-attr">— Arely.fit</p>
          </div>
        </div>
      </AnimatedSection>

      {/* ───────────── NUTRITION SECTION ───────────── */}
      <section className="nutrition-section" id="nutrition">
        <div className="container">
          <div className="nutrition-inner">
            {/* Left: large image */}
            <AnimatedSection animation="fade-right" className="nutrition-img-col">
              <div
                className="nutrition-img"
                style={{ backgroundImage: `url("${arelyPic3}")` }}
              >
                <div className="nutrition-img-card glass-card">
                  <Award size={20} color="var(--cream-dark)" />
                  <p>15+ recetas fitness deliciosas incluidas</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: content */}
            <AnimatedSection animation="fade-left" delay={200} className="nutrition-content-col">
              <span className="section-tag" style={{ background: 'rgba(251,218,181,0.5)', color: 'var(--cream-dark)' }}>
                <Salad size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                {t.cat_nutrition}
              </span>
              <h2 className="heading-display" style={{ margin: '16px 0 12px' }}>
                {t[nutritionProgram.nameKey]}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                {t[nutritionProgram.descKey]}
              </p>

              {/* Macro bars */}
              <div className="macro-bars">
                {[
                  { label: 'Proteína', pct: 30, color: '#F9C5C5' },
                  { label: 'Carbohidratos', pct: 40, color: '#DDD6F3' },
                  { label: 'Grasas', pct: 30, color: '#C8EDE0' },
                ].map(m => (
                  <div key={m.label} className="macro-bar-row">
                    <div className="macro-bar-label">
                      <span>{m.label}</span>
                      <span style={{ fontFamily: 'var(--font-numbers)', color: 'var(--text-secondary)' }}>{m.pct}%</span>
                    </div>
                    <div className="macro-bar-track">
                      <div className="macro-bar-fill" style={{ width: `${m.pct}%`, background: m.color }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="nutrition-cta">
                <div>
                  <div className="card-price">{convertPrice(nutritionProgram.price)}</div>
                  <div className="card-price-note">{t.permanent}</div>
                </div>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => openCheckout(nutritionProgram)}
                  id="nutrition-buy-btn"
                >
                  <ShoppingCart size={16} />
                  {t.buy_now}
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────────── CTA BANNER ───────────── */}
      <AnimatedSection animation="fade-up">
        <div className="cta-banner">
          <div className="cta-banner-inner">
            <h2 className="cta-banner-title">
              "La fuerza no es solo física.{' '}
              <em>Es mental.</em>"
            </h2>
            <button
              className="btn btn-accent btn-lg"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              id="mid-cta-btn"
            >
              <ChevronRight size={18} />
              Empieza hoy
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* ───────────── ABOUT SECTION ───────────── */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-inner">
            {/* Left: text */}
            <AnimatedSection animation="fade-right" className="about-text-col">
              <span className="section-tag">
                <Users size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                {t.about_title}
              </span>
              <h2 className="heading-display" style={{ margin: '16px 0' }}>
                Hola, soy <span style={{ color: 'var(--rose-dark)', fontStyle: 'italic' }}>Arely</span>
              </h2>
              <blockquote className="about-quote">
                "Cada programa lo diseñé pensando en ti — en la mujer que quiere sentirse fuerte, segura y en paz con su cuerpo."
              </blockquote>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '32px' }}>
                {t.about_text}
              </p>

              {/* Stats horizontal */}
              <div className="about-stats">
                {[
                  { n: '5+', l: 'Años', icon: Clock },
                  { n: '???', l: 'Clientas', icon: Heart },
                  { n: '4', l: 'Programas', icon: Dumbbell },
                  { n: '4', l: 'Idiomas', icon: Globe },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="about-stat-item">
                      <Icon size={18} color="var(--rose-dark)" style={{ marginBottom: '6px' }} />
                      <div className="about-stat-number">{s.n}</div>
                      <div className="about-stat-label">{s.l}</div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Right: large photo */}
            <AnimatedSection animation="fade-left" delay={200} className="about-img-col">
              <div className="about-img-frame">
                <img
                  src={arelyPic2}
                  alt="Arely"
                  className="about-img"
                />
                <div className="about-img-badge">
                  <Award size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle', marginTop: '-2px' }} color="var(--rose-dark)" /> Certified Coach
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer onLegalClick={() => setShowConstructionModal(true)} />
    </>
  );
}
