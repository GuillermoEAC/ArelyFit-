import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const LANGUAGES = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪' },
];

const CURRENCIES = [
  { code: 'USD', label: 'USD $', symbol: '$' },
  { code: 'MXN', label: 'MXN $', symbol: '$' },
  { code: 'EUR', label: 'EUR €', symbol: '€' },
  { code: 'AED', label: 'AED د.إ', symbol: 'د.إ' },
];

export default function LanguageCurrencyModal({ onClose, forceShow = false }) {
  const { t, language, setLanguage, currency, setCurrency, setShowWelcomeModal } = useApp();
  const [localLang, setLocalLang] = useState(language);
  const [localCurrency, setLocalCurrency] = useState(currency);

  const handleStart = () => {
    setLanguage(localLang);
    setCurrency(localCurrency);
    if (forceShow && onClose) {
      onClose();
    } else {
      setShowWelcomeModal(false);
    }
  };

  return (
    <div className="welcome-modal">
      <span className="modal-decoration">🌸</span>
      <div className="modal-logo" id="welcome-title">
        arely<span>.fit</span>
      </div>
      <p className="modal-subtitle">{t.modal_subtitle}</p>

      {/* Language Selection */}
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <p className="modal-section-label">{t.modal_language}</p>
        <div className="modal-grid">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option${localLang === lang.code ? ' active' : ''}`}
              onClick={() => setLocalLang(lang.code)}
              id={`lang-${lang.code}`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Currency Selection */}
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <p className="modal-section-label">{t.modal_currency}</p>
        <div className="currency-grid">
          {CURRENCIES.map((cur) => (
            <button
              key={cur.code}
              className={`currency-option${localCurrency === cur.code ? ' active' : ''}`}
              onClick={() => setLocalCurrency(cur.code)}
              id={`currency-${cur.code}`}
              style={{ flexDirection: 'column', gap: '4px', fontSize: '0.8rem' }}
            >
              <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{cur.symbol}</span>
              <span>{cur.code}</span>
            </button>
          ))}
        </div>
      </div>

      <button className="btn btn-primary btn-full btn-lg" onClick={handleStart} id="modal-start-btn">
        {t.modal_start}
      </button>
      {forceShow && onClose && (
        <button
          className="btn btn-secondary btn-full"
          onClick={onClose}
          style={{ marginTop: '12px' }}
          id="modal-close-btn"
        >
          ✕ Cerrar
        </button>
      )}
    </div>
  );
}
