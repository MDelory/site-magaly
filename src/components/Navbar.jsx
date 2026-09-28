import React, { useState } from 'react'
import { Crown, Sparkles, LogOut, Volume2, VolumeX, PartyPopper } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'
import { royalAudio } from '../utils/audio'
import { fireCelebrationBlast } from '../utils/confetti'

export function Navbar({ currentGuest, onLogout }) {
  const [isMuted, setIsMuted] = useState(royalAudio.isMuted)

  const handleAudioToggle = () => {
    const muted = royalAudio.toggleMute()
    setIsMuted(muted)
    if (!muted) {
      royalAudio.playChampagneChime()
    }
  }

  const handleCelebrate = () => {
    fireCelebrationBlast()
    royalAudio.playChampagneChime()
  }

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(14, 4, 7, 0.90)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid rgba(81, 24, 31, 0.45)',
      boxShadow: '0 1px 0 rgba(212, 175, 55, 0.12)',
      padding: '0.85rem 1.5rem',
      transition: 'var(--transition-smooth)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        {/* Logo & Monogramme Royal */}
        <a href="#hero" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
          color: 'var(--nude-100)',
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2e261e 0%, #15120f 100%)',
            border: '1.5px solid var(--gold-500)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(212, 175, 55, 0.25)',
          }}>
            <Crown size={20} color="#D4AF37" />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-royal)',
              fontWeight: 800,
              fontSize: '0.98rem',
              letterSpacing: '0.08em',
              color: '#FAF7F2',
            }}>
              QUEEN MAGALY
            </div>
            <div style={{
              fontSize: '0.7rem',
              color: 'var(--gold-400)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              Graduation Gala 2026
            </div>
          </div>
        </a>

        {/* Liens de navigation ancrés */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          fontSize: '0.86rem',
          fontFamily: 'var(--font-royal)',
          letterSpacing: '0.05em',
        }}>
          <a href="#proclamation" style={{ color: 'var(--nude-200)', textDecoration: 'none' }} className="nav-link">
            L'Annonce
          </a>
          <a href="#details" style={{ color: 'var(--nude-200)', textDecoration: 'none' }} className="nav-link">
            Protocole
          </a>
          <a href="#schedule" style={{ color: 'var(--gold-400)', textDecoration: 'none', fontWeight: 600 }} className="nav-link">
            Programme
          </a>
        </div>

        {/* Actions & Profil de l'Invité */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Bouton Confettis Festive */}
          <button
            onClick={handleCelebrate}
            title="Lancer des confettis royaux"
            style={{
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: 'var(--gold-300)',
              borderRadius: 'var(--radius-full)',
              padding: '0.45rem 0.85rem',
              fontSize: '0.78rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'var(--transition-smooth)',
            }}
          >
            <PartyPopper size={15} color="#D4AF37" />
            <span style={{ fontFamily: 'var(--font-royal)', fontWeight: 600 }}>Célébrer !</span>
          </button>

          {/* Bouton Audio */}
          <button
            onClick={handleAudioToggle}
            title={isMuted ? "Activer les sons royaux" : "Couper le son"}
            style={{
              background: 'rgba(38, 32, 27, 0.65)',
              border: '1px solid var(--glass-border)',
              color: 'var(--nude-300)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
            }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} color="#D4AF37" />}
          </button>

          {/* Statut Invité */}
          {currentGuest && (
            <div style={{
              background: 'rgba(38, 32, 27, 0.85)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.78rem',
            }}>
              <span style={{ color: 'var(--gold-400)', fontWeight: 600 }}>
                {currentGuest.name}
              </span>
              <span style={{ color: 'var(--nude-400)', fontSize: '0.72rem' }}>
                ({currentGuest.role})
              </span>
            </div>
          )}

          {/* Bouton Déconnexion */}
          <button
            onClick={onLogout}
            title="Quitter la Cour et changer d'invité"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--nude-400)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0.4rem',
              borderRadius: 'var(--radius-sm)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E5C973')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--nude-400)')}
          >
            <LogOut size={17} />
          </button>
        </div>
      </div>
    </nav>
  )
}
