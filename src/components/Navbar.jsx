import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Menu, X, Globe, ChevronDown, ShoppingBag
} from 'lucide-react';

const LANGUAGES = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'AR', flag: '🇦🇪' },
];

export default function Navbar({ onLangCurrencyOpen }) {
  const { t, language, currency } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="main-navbar">
      <div className="navbar-inner">
        <a className="navbar-logo" href="#hero">
          arely<span>.fit</span>
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#programs" onClick={(e) => { e.preventDefault(); scrollTo('programs'); }}>{t.nav_programs}</a></li>
          <li><a href="#nutrition" onClick={(e) => { e.preventDefault(); scrollTo('nutrition'); }}>{t.nav_nutrition}</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>{t.nav_about}</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>{t.nav_contact}</a></li>
        </ul>

        <div className="navbar-actions">
          <button
            className="lang-currency-btn"
            onClick={onLangCurrencyOpen}
            id="navbar-lang-btn"
            title="Change language and currency"
          >
            <Globe size={14} />
            <span>{LANGUAGES.find(l => l.code === language)?.flag}</span>
            <span>{currency}</span>
            <ChevronDown size={12} style={{ opacity: 0.5 }} />
          </button>
          <a href="#programs" className="btn btn-primary btn-sm" onClick={(e) => { e.preventDefault(); scrollTo('programs'); }} id="navbar-cta">
            <ShoppingBag size={14} />
            {t.nav_buy}
          </a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          id="hamburger-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} color="var(--text-primary)" /> : <Menu size={22} color="var(--text-primary)" />}
        </button>
      </div>
    </nav>
  );
}
