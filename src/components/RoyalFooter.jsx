import React from 'react'
import { Crown, Sparkles, ArrowUp } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'

const { footer: txt } = EVENT_CONFIG

export function RoyalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      borderTop: '1px solid transparent',
      borderImage: 'linear-gradient(90deg, transparent 0%, rgba(81,24,31,0.6) 25%, rgba(212,175,55,0.4) 50%, rgba(81,24,31,0.6) 75%, transparent 100%) 1',
      background: 'rgba(26, 8, 13, 0.97)',
      padding: '4rem 1.5rem 3rem',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Monogramme & Couronne */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--bordeaux-800) 0%, var(--bordeaux-950) 100%)',
          border: '2px solid var(--gold-500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.25), 0 0 40px rgba(139, 37, 51, 0.2)',
        }}>
          <Crown size={28} color="#D4AF37" />
        </div>

        <div style={{
          fontFamily: 'var(--font-royal)',
          fontWeight: 800,
          fontSize: '1.25rem',
          letterSpacing: '0.12em',
          color: '#FAF7F2',
          marginBottom: '0.4rem',
        }}>
          THE QUEEN'S GRADUATION GALA
        </div>

        <p className="font-script" style={{
          fontSize: '1.15rem',
          fontStyle: 'italic',
          color: 'var(--gold-300)',
          marginBottom: '1.5rem',
        }}>
          &ldquo;Que cette nuit royale résonne à jamais dans la mémoire de la Cour.&rdquo;
        </p>

        {/* Rappel Charte */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(42, 8, 16, 0.60)',
          border: '1px solid rgba(139, 37, 51, 0.35)',
          borderRadius: 'var(--radius-full)',
          padding: '0.4rem 1.15rem',
          fontSize: '0.78rem',
          color: 'var(--nude-300)',
          marginBottom: '2rem',
        }}>
          {txt.protocol}
        </div>

        {/* Bouton Retour en Haut */}
        <div>
          <button
            onClick={scrollToTop}
            className="btn-royal-secondary"
            style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}
          >
            <ArrowUp size={15} color="#D4AF37" />
            {txt.scrollTop}
          </button>
        </div>

        <div style={{
          marginTop: '2.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(139, 37, 51, 0.18)',
          fontSize: '0.75rem',
          color: 'var(--nude-400)',
        }}>
          {txt.copyright}
        </div>

      </div>
    </footer>
  )
}
