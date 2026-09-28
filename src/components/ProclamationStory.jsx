import React from 'react'
import { Crown, Award, Scroll, Feather, Check } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'
import mag1 from '../assets/mag1.JPG'
import mag2 from '../assets/mag2.jpg'

const { proclamation: txt, organizer: org, queen } = EVENT_CONFIG

export function ProclamationStory() {
  return (
    <>
      <section id="proclamation" style={{
        padding: '5rem 1.5rem',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* En-tête de section */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
              <Scroll size={14} />
              {txt.badge}
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
              color: '#FAF7F2',
              marginBottom: '0.65rem',
            }}>
              {txt.sectionTitle}
            </h2>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'var(--gold-gradient)',
              margin: '0.8rem auto 0',
            }} />
          </div>

          {/* Grille 2 colonnes : Parchemin & Visuel du Diplôme Couronné */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}>
            
            {/* Carte Visuelle : Photo d'art du Diplôme */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '2px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 20px 45px rgba(26, 5, 8, 0.8), 0 0 35px rgba(212, 175, 55, 0.15)',
                position: 'relative',
              }}>
                <img
                  src="./queen-diploma.jpg"
                  alt="Parchemin royal de diplôme et couronne dorée"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transform: 'scale(1)',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  background: 'rgba(27, 10, 13, 0.88)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <Award size={24} color="#D4AF37" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.82rem', color: '#FAF7F2' }}>
                      {EVENT_CONFIG.queen.degree}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--nude-400)' }}>
                      {txt.diplomaCaption}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sceau doré d'angle */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F5E8BE 0%, #D4AF37 50%, #8F6F16 100%)',
                border: '2px solid #FAF7F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(26, 5, 8, 0.6)',
              }}>
                <Crown size={26} color="#271619" />
              </div>
            </div>

            {/* Texte de la Proclamation */}
            <div className="royal-glass-card" style={{ padding: '2.5rem 2.25rem' }}>
              <div style={{
                fontFamily: 'var(--font-royal)',
                fontSize: '0.85rem',
                color: 'var(--gold-400)',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <Feather size={16} />
                {txt.manuscriptLabel}
              </div>

              <h3 style={{
                fontSize: '1.45rem',
                color: '#FAF7F2',
                lineHeight: 1.3,
                marginBottom: '1.25rem',
              }}>
                {txt.cardTitle}
              </h3>

              <p style={{
                color: 'var(--nude-200)',
                lineHeight: 1.7,
                fontSize: '0.98rem',
                marginBottom: '1.25rem',
              }}>
                {txt.paragraph1.split('Magaly').map((part, i, arr) =>
                  i < arr.length - 1
                    ? <span key={i}>{part}<strong style={{ color: 'var(--gold-300)' }}>{queen.firstName}</strong></span>
                    : <span key={i}>{part}</span>
                )}
              </p>

              <p style={{
                color: 'var(--nude-200)',
                lineHeight: 1.7,
                fontSize: '0.98rem',
                marginBottom: '1.75rem',
              }}>
                {txt.paragraph2}
              </p>

              {/* Citation Royale */}
              <div style={{
                borderLeft: '3px solid var(--gold-500)',
                paddingLeft: '1.25rem',
                marginBottom: '1.75rem',
                fontStyle: 'italic',
              }}>
                <p className="font-script" style={{
                  fontSize: '1.28rem',
                  color: 'var(--gold-300)',
                  lineHeight: 1.45,
                }}>
                  &ldquo;{EVENT_CONFIG.queen.quote}&rdquo;
                </p>
                <div style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-royal)',
                  color: 'var(--nude-400)',
                  marginTop: '0.4rem',
                  letterSpacing: '0.06em',
                }}>
                  {txt.queenAttribution}
                </div>
              </div>

              {/* Points d'honneur */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                {txt.honorPoints.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--nude-300)' }}>
                    <Check size={16} color="#D4AF37" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===== Section Organisatrice ===== */}
      <section id="organisatrice" style={{
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Halo de fond */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(139, 37, 51, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* En-tête */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="royal-badge-bordeaux" style={{ marginBottom: '0.75rem' }}>
              <Crown size={14} />
              {org.badge}
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
              color: '#FAF7F2',
              marginBottom: '0.65rem',
            }}>
              {org.sectionTitle}
            </h2>
            <p style={{ color: 'var(--nude-300)', maxWidth: '550px', margin: '0 auto', fontSize: '0.95rem' }}>
              {org.subtitle}
            </p>
            <div style={{
              width: '80px',
              height: '2px',
              background: 'var(--bordeaux-gradient)',
              margin: '0.8rem auto 0',
            }} />
          </div>

          {/* Grille photos + texte */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}>

            {/* Photo 1 */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '2px solid rgba(139, 37, 51, 0.45)',
                boxShadow: '0 20px 45px rgba(26, 5, 8, 0.7), 0 0 30px rgba(139, 37, 51, 0.18)',
              }}>
                <img
                  src={mag1}
                  alt={org.photo1Alt}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block',
                    transform: 'scale(1)',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  background: 'rgba(27, 10, 13, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(139, 37, 51, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.6rem 1rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.82rem', color: 'var(--gold-300)' }}>
                    {org.photo1Caption}
                  </div>
                </div>
              </div>
            </div>

            {/* Texte central */}
            <div className="royal-glass-card" style={{ padding: '2.5rem 2.25rem', textAlign: 'center' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--bordeaux-gradient)',
                border: '2px solid rgba(212, 175, 55, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 0 20px rgba(139, 37, 51, 0.35)',
              }}>
                <Crown size={26} color="#D4AF37" />
              </div>

              <p style={{
                color: 'var(--nude-200)',
                lineHeight: 1.75,
                fontSize: '0.98rem',
                fontStyle: 'italic',
              }}>
                {org.description}
              </p>

              <div style={{ marginTop: '1.75rem' }} className="royal-divider" />

              <div style={{
                marginTop: '1.25rem',
                display: 'flex',
                justifyContent: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}>
                <span className="royal-badge-bordeaux">{org.tag1}</span>
                <span className="royal-badge">{org.tag2}</span>
              </div>
            </div>

            {/* Photo 2 */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '2px solid rgba(212, 175, 55, 0.35)',
                boxShadow: '0 20px 45px rgba(26, 5, 8, 0.7), 0 0 30px rgba(212, 175, 55, 0.12)',
              }}>
                <img
                  src={mag2}
                  alt={org.photo2Alt}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block',
                    transform: 'scale(1)',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  background: 'rgba(27, 10, 13, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.6rem 1rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.82rem', color: 'var(--gold-300)' }}>
                    {org.photo2Caption}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
