import { useApp } from '../context/AppContext';
import { Camera, Music, Video, MapPin, Mail, Heart } from 'lucide-react';

export default function Footer({ onLegalClick }) {
  const { t } = useApp();

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <div className="footer-logo">arely<span>.fit</span></div>
            <p className="footer-tagline">{t.footer_tagline}</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={13} /> {t.footer_contact_email}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={13} /> México 🇲🇽
            </p>
          </div>

          {/* Programs */}
          <div>
            <p className="footer-heading">{t.nav_programs}</p>
            <ul className="footer-links">
              <li><a href="#programs">{t.prog1_name}</a></li>
              <li><a href="#programs">{t.prog2_name}</a></li>
              <li><a href="#programs">{t.prog3_name}</a></li>
              <li><a href="#nutrition">{t.prog4_name}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="footer-heading">Legal</p>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onLegalClick(); }}>{t.footer_privacy}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onLegalClick(); }}>{t.footer_terms}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onLegalClick(); }}>{t.nav_contact}</a></li>
            </ul>

            {/* Social */}
            <div className="footer-social" style={{ marginTop: 'var(--space-lg)' }}>
              <button className="social-btn" aria-label="Instagram" title="Instagram">
                <Camera size={16} />
              </button>
              <button className="social-btn" aria-label="TikTok" title="TikTok">
                <Music size={16} />
              </button>
              <button className="social-btn" aria-label="YouTube" title="YouTube">
                <Video size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>{t.footer_rights}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>
            Hecho con <Heart size={12} fill="var(--rose)" color="var(--rose)" /> por Arely
          </span>
        </div>
      </div>
    </footer>
  );
}
