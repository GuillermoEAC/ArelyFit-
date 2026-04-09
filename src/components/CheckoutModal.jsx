import { useApp } from '../context/AppContext';
import { Shield, CreditCard, ArrowLeft, X, Star } from 'lucide-react';

export default function CheckoutModal() {
  const { t, checkoutProgram, closeCheckout, convertPrice } = useApp();

  if (!checkoutProgram) return null;

  const name = t[checkoutProgram.nameKey] || checkoutProgram.nameKey;
  const price = convertPrice(checkoutProgram.price);

  const handleCheckout = () => {
    window.open(checkoutProgram.checkoutLink || 'https://pay.hotmart.com/U105119323X?checkoutMode=10', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
      onClick={(e) => { if (e.target === e.currentTarget) closeCheckout(); }}
    >
      <div className="checkout-modal" style={{ position: 'relative' }}>
        {/* Close button */}
        <button
          onClick={closeCheckout}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="checkout-header">
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: checkoutProgram.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 12px',
          }}>
            <Star size={24} color={checkoutProgram.accentColor} />
          </div>
          <h2 id="checkout-title" className="heading-lg">{t.checkout_title}</h2>
        </div>

        {/* Product Summary */}
        <div className="checkout-product-card">
          <div className="checkout-product-name">{name}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            {checkoutProgram.durationWeeks
              ? `${checkoutProgram.durationWeeks} ${t.weeks}`
              : t.permanent}
          </div>
          <div className="checkout-total">
            <span>Total</span>
            <span className="checkout-price">{price}</span>
          </div>
        </div>

        {/* Info */}
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginBottom: '20px',
          textAlign: 'center',
          lineHeight: '1.5',
        }}>
          {t.checkout_desc}
        </p>

        {/* Checkout Button */}
        <button
          className="btn btn-primary btn-full btn-lg"
          onClick={handleCheckout}
          id={`checkout-pay-${checkoutProgram.id}`}
          style={{ marginBottom: '12px' }}
        >
          <CreditCard size={18} />
          {t.checkout_proceed || 'Realizar pago seguro'}
        </button>

        {/* Security Badge */}
        <div className="checkout-security">
          <Shield size={14} />
          <span>{t.checkout_secure}</span>
        </div>

        {/* Back Button */}
        <button
          className="btn btn-secondary btn-full"
          onClick={closeCheckout}
          id="checkout-back-btn"
          style={{ marginTop: '12px' }}
        >
          <ArrowLeft size={15} />
          {t.checkout_back}
        </button>
      </div>
    </div>
  );
}
