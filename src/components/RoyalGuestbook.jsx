import React, { useState, useEffect } from 'react'
import { BookOpen, Sparkles, Send, Crown, Wine, Flame, GraduationCap } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'
import { fireRoyalStars } from '../utils/confetti'
import { royalAudio } from '../utils/audio'

const { guestbook: txt } = EVENT_CONFIG

const BADGES = [
  { id: 'champagne', label: '🍾 Champagne Toast', icon: Wine },
  { id: 'queen', label: '👑 Longue Vie à la Reine', icon: Crown },
  { id: 'pride', label: '🎓 Fierté Absolue', icon: GraduationCap },
  { id: 'legend', label: '✨ Pure Légende', icon: Sparkles },
  { id: 'dance', label: '🔥 Reine du Dancefloor', icon: Flame },
]

export function RoyalGuestbook({ currentGuest }) {
  const [toasts, setToasts] = useState(EVENT_CONFIG.initialToasts)
  const [newToastText, setNewToastText] = useState('')
  const [selectedBadge, setSelectedBadge] = useState(BADGES[0].label)
  const [authorName, setAuthorName] = useState(currentGuest?.name || '')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('royal_guestbook_toasts')
      if (saved) {
        setToasts(JSON.parse(saved))
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  const handlePostToast = (e) => {
    e.preventDefault()
    if (!newToastText.trim()) return

    const newToast = {
      id: Date.now(),
      author: authorName.trim() || currentGuest?.name || 'Convive',
      role: currentGuest ? (txt.roleDefault) : txt.roleDefault,
      date: "À l'instant",
      badge: selectedBadge,
      message: newToastText.trim(),
    }

    const updated = [newToast, ...toasts]
    setToasts(updated)
    setNewToastText('')

    try {
      localStorage.setItem('royal_guestbook_toasts', JSON.stringify(updated))
    } catch (err) {
      console.error(err)
    }

    fireRoyalStars()
    royalAudio.playChampagneChime()
  }

  return (
    <section id="guestbook" style={{
      padding: '5rem 1.5rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
            <BookOpen size={14} />
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

        {/* Grille : Formulaire d'envoi & Liste des Messages */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}>
          
          {/* Formulaire d'écriture du Toast */}
          <div className="royal-glass-card" style={{ padding: '2.25rem 2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#FAF7F2', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="#D4AF37" />
              {txt.formTitle}
            </h3>

            <form onSubmit={handlePostToast}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-400)', marginBottom: '0.4rem', fontFamily: 'var(--font-royal)' }}>
                  {txt.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder={txt.namePlaceholder}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(21, 18, 15, 0.9)',
                    border: '1px solid var(--glass-border)',
                    color: '#FAF7F2',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Choix du badge */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-400)', marginBottom: '0.5rem', fontFamily: 'var(--font-royal)' }}>
                  {txt.badgeLabel}
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {BADGES.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBadge(b.label)}
                      style={{
                        padding: '0.4rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        border: selectedBadge === b.label ? '1px solid var(--gold-500)' : '1px solid rgba(212, 175, 55, 0.2)',
                        background: selectedBadge === b.label ? 'rgba(212, 175, 55, 0.25)' : 'rgba(38, 32, 27, 0.6)',
                        color: selectedBadge === b.label ? '#F5E8BE' : 'var(--nude-300)',
                        transition: 'all 0.2s',
                      }}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--gold-400)', marginBottom: '0.4rem', fontFamily: 'var(--font-royal)' }}>
                  {txt.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={newToastText}
                  onChange={(e) => setNewToastText(e.target.value)}
                  placeholder={txt.messagePlaceholder}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(21, 18, 15, 0.9)',
                    border: '1px solid var(--glass-border)',
                    color: '#FAF7F2',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="btn-royal-primary" style={{ width: '100%' }}>
                <Send size={16} />
                {txt.submitButton}
              </button>
            </form>
          </div>

          {/* Liste des Toasts existants */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxHeight: '540px', overflowY: 'auto', paddingRight: '0.5rem' }}>
            {toasts.map((toast) => (
              <div
                key={toast.id}
                className="royal-glass-card"
                style={{
                  padding: '1.5rem',
                  background: 'rgba(39, 18, 22, 0.88)',
                  border: '1px solid var(--glass-border)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: '#FAF7F2', fontSize: '0.95rem' }}>
                      {toast.author}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gold-400)' }}>
                      {toast.role} • {toast.date}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    background: 'rgba(212, 175, 55, 0.15)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: 'var(--gold-300)',
                  }}>
                    {toast.badge}
                  </div>
                </div>

                <p className="font-script" style={{
                  fontSize: '1.15rem',
                  color: 'var(--nude-100)',
                  lineHeight: 1.5,
                  fontStyle: 'italic',
                }}>
                  "{toast.message}"
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
