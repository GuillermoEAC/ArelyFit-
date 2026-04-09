import { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Dumbbell, Salad, Users, Star, Quote,
  ChevronRight, BarChart3, ShoppingCart,
  Award, Clock, Globe, Heart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProgramCard from '../components/ProgramCard';
import CheckoutModal from '../components/CheckoutModal';
import LanguageCurrencyModal from '../components/LanguageCurrencyModal';
import Footer from '../components/Footer';
import { PROGRAMS, TESTIMONIALS } from '../data/programs';

import arelyPic1 from '../assets/Arely_picture1.jpeg';
import arelyPic2 from '../assets/Arely_picture2.jpeg';
import arelyPic3 from '../assets/Arely_picture3.jpeg';

export default function HomePage() {
  const { t, showWelcomeModal, convertPrice, openCheckout } = useApp();
  const [showLangModal, setShowLangModal] = useState(false);
  const [showConstructionModal, setShowConstructionModal] = useState(false);

  // Split programs: first 3 are fitness, last is nutrition
  const fitnessPrograms = PROGRAMS.slice(0, 3);
  const nutritionProgram = PROGRAMS[3];

  return (
    <>
      {/* Welcome Modal (first visit) */}
      {showWelcomeModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
          <LanguageCurrencyModal />
        </div>
      )}

      {/* Language/Currency change modal (from navbar) */}
      {showLangModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setShowLangModal(false)}>
          <div onClick={e => e.stopPropagation()}>
            <LanguageCurrencyModal onClose={() => setShowLangModal(false)} forceShow />
          </div>
        </div>
      )}

      {/* Under Construction Modal */}
      {showConstructionModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={() => setShowConstructionModal(false)}>
          <div className="checkout-modal" onClick={e => e.stopPropagation()} style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚧</div>
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

      {/* Checkout Modal */}
      <CheckoutModal />

      {/* Navbar */}
      <Navbar onLangCurrencyOpen={() => setShowLangModal(true)} />

      {/* Hero */}
      <HeroSection />

      {/* Motivational Banner */}
      <div className="motivation-banner" role="banner">
        <p className="motivation-text">
          "No entrenes para verte bien. Entrena para sentirte imparable."
        </p>
        <p className="motivation-attr">— Arely.fit</p>
      </div>

      {/* Programs Section */}
      <section className="programs-section" id="programs">
        <div className="container">
          <div className="section-header">
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
          </div>

          <div className="programs-grid">
            {fitnessPrograms.map((program, idx) => (
              <ProgramCard
                key={program.id}
                program={program}
                featured={idx === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECOND Motivational Banner */}
      <div style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${arelyPic2}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        padding: '64px 24px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
          color: 'white',
          margin: '0 auto',
          maxWidth: '600px',
        }}>
          "Tu cuerpo es tu obra maestra.{' '}
          <span style={{ color: 'var(--rose-light)' }}>Cuídalo.</span>"
        </p>
      </div>

      {/* Nutrition Section */}
      <section style={{
        padding: 'var(--space-3xl) 0',
        background: 'linear-gradient(180deg, #FFF3E4 0%, #FBDAB5 100%)',
      }} id="nutrition">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
            alignItems: 'center',
          }}>
            {/* Text Side */}
            <div>
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
              <ul className="card-includes" style={{ marginBottom: '24px' }}>
                {(t[nutritionProgram.includesKey] || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
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
            </div>

            {/* Macros Visual */}
            <div className="glass-card" style={{ padding: 'var(--space-xl)' }}>
              <h3 className="heading-lg" style={{ marginBottom: '20px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <BarChart3 size={22} color="var(--cream-dark)" />
                Distribución de Macros
              </h3>
              {[
                { label: 'Proteína', pct: 30, color: '#F9C5C5' },
                { label: 'Carbohidratos', pct: 40, color: '#DDD6F3' },
                { label: 'Grasas', pct: 30, color: '#C8EDE0' },
              ].map(m => (
                <div key={m.label} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem', fontWeight: 500 }}>
                    <span>{m.label}</span>
                    <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-numbers)' }}>{m.pct}%</span>
                  </div>
                  <div style={{ height: '10px', background: 'rgba(0,0,0,0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${m.pct}%`,
                      background: m.color,
                      borderRadius: '999px',
                      transition: 'width 1s ease',
                    }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(249,197,197,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={16} color="var(--cream-dark)" />
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Incluye más de 15 recetas fitness deliciosas
                </p>
              </div>
            </div>
          </div>

          {/* Nutrition Buy Card */}
          <div style={{ marginTop: '40px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
            <ProgramCard program={nutritionProgram} />
          </div>
        </div>
      </section>

      {/* Testimonials removed for now as requested */}

      {/* Third Motivational Banner */}
      <div style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${arelyPic3}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '64px 24px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
          color: 'white',
          marginBottom: '24px',
        }}>
          "La fuerza no es solo física. Es mental."
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
          id="mid-cta-btn"
        >
          <ChevronRight size={18} />
          Empieza hoy
        </button>
      </div>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-inner">
            <div>
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
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {t.about_text}
              </p>
            </div>

            <div className="glass-card" style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
              <img
                src={arelyPic2}
                alt="Arely"
                style={{
                  width: '120px', height: '120px', borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  margin: '0 auto 20px',
                  display: 'block',
                  border: '4px solid white',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { n: '5+', l: 'Años de experiencia', icon: Clock },
                  { n: '???', l: 'Clientas', icon: Heart },
                  { n: '4', l: 'Programas', icon: Dumbbell },
                  { n: '4', l: 'Idiomas', icon: Globe },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} style={{
                      background: 'linear-gradient(135deg, rgba(249,197,197,0.3), rgba(221,214,243,0.3))',
                      borderRadius: '12px',
                      padding: '16px',
                    }}>
                      <Icon size={16} color="var(--rose-dark)" style={{ marginBottom: '4px' }} />
                      <div style={{ fontFamily: 'var(--font-numbers)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--rose-dark)' }}>{s.n}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.l}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onLegalClick={() => setShowConstructionModal(true)} />
    </>
  );
}
