import { useApp } from '../context/AppContext';
import { Clock, Dumbbell, CheckCircle2, ShoppingCart, Flame, Zap, CircleDot, Leaf } from 'lucide-react';

const ICON_MAP = {
  'glam-glutes': Flame,
  'full-body-glow': Zap,
  'core-confidence': CircleDot,
  'nutrition-guide': Leaf,
};

export default function ProgramCard({ program, featured = false }) {
  const { t, convertPrice, openCheckout } = useApp();

  const name = t[program.nameKey] || program.nameKey;
  const description = t[program.descKey] || program.descKey;
  const includesList = t[program.includesKey] || [];
  const category = t[program.category] || program.category;
  const level = t[program.levelKey] || program.levelKey;
  const price = convertPrice(program.price);

  const ProgramIcon = ICON_MAP[program.id] || Flame;

  return (
    <article
      className="program-card"
      id={`program-card-${program.id}`}
    >
      {featured && <div className="featured-badge">Popular</div>}

      {/* Card Header */}
      <div className="card-header" style={{
        background: program.image
          ? `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%), url("${program.image}")`
          : program.gradient,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '24px',
        color: program.image ? 'white' : 'var(--text-primary)',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative'
      }}>
        {!program.image && (
          <span className="card-emoji">
            <ProgramIcon size={38} color={program.accentColor} strokeWidth={1.5} />
          </span>
        )}
        <p className="card-category" style={{
          color: program.image ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)'
        }}>{category}</p>
        <h3 className="card-title" style={{ color: 'inherit' }}>{name}</h3>
        <div className="card-meta">
          <span className="card-meta-item" style={{
            color: program.image ? 'white' : 'inherit',
            background: program.image ? 'rgba(0,0,0,0.3)' : 'var(--surface)',
            backdropFilter: 'blur(4px)'
          }}>
            <Clock size={13} />
            {program.durationWeeks
              ? `${program.durationWeeks} ${t.weeks}`
              : t.permanent}
          </span>
          <span className="card-meta-item" style={{
            color: program.image ? 'white' : 'inherit',
            background: program.image ? 'rgba(0,0,0,0.3)' : 'var(--surface)',
            backdropFilter: 'blur(4px)'
          }}>
            <Dumbbell size={13} />
            {level}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body" style={{ background: 'rgba(255,255,255,0.88)' }}>
        <p className="card-description">{description}</p>

        <ul className="card-includes">
          {includesList.map((item, idx) => (
            <li key={idx}>
              <CheckCircle2 size={14} color="var(--mint-dark)" style={{ flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer */}
      <div className="card-footer" style={{ background: 'rgba(255,255,255,0.92)' }}>
        <div>
          <div className="card-price">{price}</div>
          <div className="card-price-note">
            {program.durationWeeks ? `${program.durationWeeks} ${t.weeks}` : t.permanent}
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => openCheckout(program)}
          id={`buy-btn-${program.id}`}
        >
          <ShoppingCart size={15} />
          {t.buy_now}
        </button>
      </div>
    </article>
  );
}
