import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { es } from '../i18n/es';
import { en } from '../i18n/en';
import { fr } from '../i18n/fr';
import { ar } from '../i18n/ar';

const translations = { es, en, fr, ar };

const CURRENCY_RATES = {
  USD: { rate: 1, symbol: '$', label: 'USD' },
  MXN: { rate: 17.5, symbol: '$', label: 'MXN' },
  EUR: { rate: 0.92, symbol: '€', label: 'EUR' },
  AED: { rate: 3.67, symbol: 'د.إ', label: 'AED' },
};

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [currency, setCurrency] = useState('USD');
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [checkoutProgram, setCheckoutProgram] = useState(null);
  const [isRTL, setIsRTL] = useState(false);

  const t = useMemo(() => translations[language] || translations.es, [language]);

  useEffect(() => {
    const rtl = language === 'ar';
    setIsRTL(rtl);
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const convertPrice = useCallback((usdPrice) => {
    const { rate, symbol, label } = CURRENCY_RATES[currency];
    const converted = (usdPrice * rate).toFixed(2);
    return currency === 'AED'
      ? `${converted} ${symbol}`
      : `${symbol}${converted} ${label}`;
  }, [currency]);

  const openCheckout = useCallback((program) => setCheckoutProgram(program), []);
  const closeCheckout = useCallback(() => setCheckoutProgram(null), []);

  const value = useMemo(() => ({
    language, setLanguage,
    currency, setCurrency,
    showWelcomeModal, setShowWelcomeModal,
    t, isRTL,
    convertPrice,
    CURRENCY_RATES,
    checkoutProgram, openCheckout, closeCheckout,
  }), [language, currency, showWelcomeModal, t, isRTL, convertPrice, checkoutProgram, openCheckout, closeCheckout]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);

