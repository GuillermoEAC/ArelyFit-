import { useApp } from '../context/AppContext';
import { Music, AtSign, MapPin, Mail, Heart } from 'lucide-react';

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

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
              <li><a href="#programs">{t.prog3_name}</a></li>
              <li><a href="#programs">{t.prog4_name}</a></li>
              <li><a href="#nutrition">{t.prog5_name}</a></li>
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
              <a href="https://www.instagram.com/arely.fit/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram" title="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://www.tiktok.com/@arelyespinoza97?lang=es" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="TikTok" title="TikTok">
                <Music size={16} />
              </a>
              <a href="https://www.threads.com/@arely.fit?xmt=AQF0XfgmJgADuzLc0NtzdwwQVbx0sExKGIrN5n5SMi0ZjXU" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Threads" title="Threads">
                <AtSign size={16} />
              </a>
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
