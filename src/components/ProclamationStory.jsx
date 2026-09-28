import React from 'react'
import { Crown, Award, Scroll, Feather, Check } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'

export function ProclamationStory() {
  return (
    <section id="proclamation" style={{
      padding: '5rem 1.5rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* En-tête de section */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
            <Scroll size={14} />
            ÉDIT SOUMIS À LA NATION
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
            color: '#FAF7F2',
            marginBottom: '0.65rem',
          }}>
            La Proclamation Impériale
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
          
          {/* Carte Visuelle : Photo d'art du Diplôme & Couronne d'or */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.8), 0 0 35px rgba(212, 175, 55, 0.15)',
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
                background: 'rgba(21, 18, 15, 0.85)',
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
                    Promotion d'Excellence &amp; Grand Mérite
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
              boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
            }}>
              <Crown size={26} color="#15120f" />
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
              MANUSCRIT DU PALAIS ACADÉMIQUE
            </div>

            <h3 style={{
              fontSize: '1.45rem',
              color: '#FAF7F2',
              lineHeight: 1.3,
              marginBottom: '1.25rem',
            }}>
              "Des Années d'Efforts, un Instant de Gloire Éternelle"
            </h3>

            <p style={{
              color: 'var(--nude-200)',
              lineHeight: 1.7,
              fontSize: '0.98rem',
              marginBottom: '1.25rem',
            }}>
              Qu'il soit su de tous les sujets et bienaimés : au terme d'un chemin rigoureux, jalonné de nuits d'étude, d'audace intellectuelle et d'une détermination sans faille, <strong style={{ color: 'var(--gold-300)' }}>Magaly</strong> s'est élevée aux plus hauts honneurs.
            </p>

            <p style={{
              color: 'var(--nude-200)',
              lineHeight: 1.7,
              fontSize: '0.98rem',
              marginBottom: '1.75rem',
            }}>
              Ce diplôme ne consacre pas seulement un grade universitaire ; il marque son <strong style={{ color: '#FAF7F2' }}>avènement en tant que Reine</strong> de son destin. Pour célébrer cette apogée, les portes du Pavillon s'ouvrent à ceux qui ont partagé ses doutes et soutenu ses triomphes.
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
                "{EVENT_CONFIG.queen.quote}"
              </p>
              <div style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-royal)',
                color: 'var(--nude-400)',
                marginTop: '0.4rem',
                letterSpacing: '0.06em',
              }}>
                — Sa Majesté Magaly
              </div>
            </div>

            {/* Points d'honneur */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--nude-300)' }}>
                <Check size={16} color="#D4AF37" />
                <span>Mention Triomphale</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--nude-300)' }}>
                <Check size={16} color="#D4AF37" />
                <span>Nuit Festive Royale</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--nude-300)' }}>
                <Check size={16} color="#D4AF37" />
                <span>Champagne &amp; Banquet</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--nude-300)' }}>
                <Check size={16} color="#D4AF37" />
                <span>Tenues Nude &amp; Gold</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
