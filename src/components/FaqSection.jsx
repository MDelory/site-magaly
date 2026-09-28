import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'

const { faqSection: txt, faq: items } = EVENT_CONFIG

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section id="faq" style={{
      padding: '5rem 1.5rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
            <HelpCircle size={14} />
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

        {/* Liste Accordéon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="royal-glass-card"
                style={{
                  overflow: 'hidden',
                  border: isOpen ? '1px solid var(--gold-500)' : '1px solid var(--glass-border)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#FAF7F2',
                    fontFamily: 'var(--font-royal)',
                    fontSize: '1rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  <span style={{ color: isOpen ? 'var(--gold-300)' : '#FAF7F2' }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#D4AF37"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.35rem',
                    color: 'var(--nude-200)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(212, 175, 55, 0.1)',
                    paddingTop: '1rem',
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
