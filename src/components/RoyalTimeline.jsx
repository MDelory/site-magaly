import React from 'react'
import { Sparkles, Wine, Crown, Utensils, Music, Moon, Clock } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'

const { timeline: txt } = EVENT_CONFIG

const ICON_MAP = {
  Sparkles,
  Wine,
  Crown,
  Utensils,
  Music,
  Moon,
}

export function RoyalTimeline() {
  return (
    <section id="schedule" style={{
      padding: '5rem 1.5rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '3.75rem' }}>
          <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
            <Clock size={14} />
            {txt.badge}
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
            color: '#FAF7F2',
            marginBottom: '0.65rem',
          }}>
            {txt.sectionTitle}
          </h2>
          <p style={{ color: 'var(--nude-300)', maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem' }}>
            {txt.subtitle}
          </p>
          <div style={{
            width: '80px',
            height: '2px',
            background: 'var(--gold-gradient)',
            margin: '0.8rem auto 0',
          }} />
        </div>

        {/* Ligne chronologique verticale */}
        <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
          
          {/* Ligne dorsale dorée */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.6) 0%, rgba(212, 175, 55, 0.2) 100%)',
          }} />

          {/* Étapes du programme */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {EVENT_CONFIG.schedule.map((item, index) => {
              const IconComponent = ICON_MAP[item.icon] || Sparkles

              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    position: 'relative',
                  }}
                >
                  {/* Pastille / Icône de l'étape */}
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2e261e 0%, #15120f 100%)',
                    border: '2px solid var(--gold-500)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 2,
                    boxShadow: '0 0 16px rgba(212, 175, 55, 0.35)',
                    position: 'relative',
                  }}>
                    <IconComponent size={20} color="#D4AF37" />
                  </div>

                  {/* Carte descriptive de l'étape */}
                  <div
                    className="royal-glass-card"
                    style={{
                      flexGrow: 1,
                      padding: '1.5rem 1.75rem',
                      background: 'rgba(39, 18, 22, 0.85)',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.45rem',
                    }}>
                      <h3 style={{
                        fontSize: '1.2rem',
                        color: '#FAF7F2',
                      }}>
                        {item.title}
                      </h3>
                      <div className="royal-badge" style={{ fontSize: '0.72rem', padding: '0.2rem 0.65rem' }}>
                        {item.time}
                      </div>
                    </div>

                    <p style={{
                      color: 'var(--nude-300)',
                      fontSize: '0.92rem',
                      lineHeight: 1.5,
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
