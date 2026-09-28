import React, { useState, useEffect } from 'react'
import { Crown, CheckCircle2, Send, Sparkles, UserCheck, Utensils, Printer, Edit3, Heart } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'
import { fireCelebrationBlast } from '../utils/confetti'
import { royalAudio } from '../utils/audio'

const { rsvp: txt } = EVENT_CONFIG

export function RsvpModule({ currentGuest }) {
  const storageKey = `rsvp_${currentGuest?.email || 'default'}`
  
  const [hasResponded, setHasResponded] = useState(false)
  const [attending, setAttending] = useState('yes')
  const [hasPlusOne, setHasPlusOne] = useState(false)
  const [plusOneName, setPlusOneName] = useState('')
  const [dietary, setDietary] = useState('standard')
  const [guestMessage, setGuestMessage] = useState('')
  const [ticketRef, setTicketRef] = useState('')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        const data = JSON.parse(saved)
        setAttending(data.attending)
        setHasPlusOne(data.hasPlusOne)
        setPlusOneName(data.plusOneName || '')
        setDietary(data.dietary || 'standard')
        setGuestMessage(data.guestMessage || '')
        setTicketRef(data.ticketRef || 'ROYAL-GRAD-001')
        setHasResponded(true)
      }
    } catch (e) {
      console.error(e)
    }
  }, [storageKey])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTicketRef = `ROYAL-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
    const rsvpData = {
      attending,
      hasPlusOne,
      plusOneName: hasPlusOne ? plusOneName : '',
      dietary,
      guestMessage,
      ticketRef: newTicketRef,
      updatedAt: new Date().toISOString(),
    }

    try {
      localStorage.setItem(storageKey, JSON.stringify(rsvpData))
    } catch (err) {
      console.error(err)
    }

    setTicketRef(newTicketRef)
    setHasResponded(true)

    if (attending === 'yes') {
      fireCelebrationBlast()
      royalAudio.playRoyalFanfare()
    } else {
      royalAudio.playChampagneChime()
    }
  }

  const handlePrintTicket = () => {
    window.print()
  }

  return (
    <section id="rsvp" style={{
      padding: '5rem 1.5rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
            <UserCheck size={14} />
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

        {/* Billet / Pass validé */}
        {hasResponded ? (
          <div className="royal-glass-card animate-fade-scale" style={{
            padding: '3rem 2.25rem',
            textAlign: 'center',
            position: 'relative',
            border: '2px solid var(--gold-500)',
            boxShadow: '0 0 45px rgba(212, 175, 55, 0.25)',
          }}>
            <div style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--bordeaux-800) 0%, var(--bordeaux-950) 100%)',
              border: '2px solid var(--gold-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
            }}>
              {attending === 'yes' ? (
                <Crown size={36} color="#D4AF37" className="animate-float" />
              ) : (
                <Heart size={34} color="#CDB397" />
              )}
            </div>

            <div className="royal-badge" style={{ marginBottom: '1rem' }}>
              {txt.ticketBadgePrefix} {ticketRef}
            </div>

            <h3 style={{ fontSize: '1.75rem', color: '#FAF7F2', marginBottom: '0.65rem' }}>
              {attending === 'yes' ? txt.confirmedYesTitle : txt.confirmedNoTitle}
            </h3>

            <p style={{ color: 'var(--nude-200)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 1.75rem', lineHeight: 1.5 }}>
              {attending === 'yes'
                ? `Merci infiniment, ${currentGuest?.name || 'cher invité'}. ${txt.confirmedYesText}`
                : txt.confirmedNoText}
            </p>

            {/* Récapitulatif */}
            {attending === 'yes' && (
              <div style={{
                background: 'rgba(39, 14, 19, 0.88)',
                border: '1px dashed var(--gold-500)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                maxWidth: '520px',
                margin: '0 auto 2rem',
                textAlign: 'left',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--nude-400)', fontSize: '0.85rem' }}>{txt.guestLabel}</span>
                  <strong style={{ color: '#FAF7F2', fontSize: '0.9rem' }}>{currentGuest?.name}</strong>
                </div>
                {hasPlusOne && plusOneName && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ color: 'var(--nude-400)', fontSize: '0.85rem' }}>{txt.plusOneSummaryLabel}</span>
                    <strong style={{ color: 'var(--gold-300)', fontSize: '0.9rem' }}>{plusOneName}</strong>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--nude-400)', fontSize: '0.85rem' }}>{txt.dietLabel}</span>
                  <span style={{ color: 'var(--nude-200)', fontSize: '0.85rem', textTransform: 'capitalize' }}>{dietary}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--nude-400)', fontSize: '0.85rem' }}>{txt.dressCodeLabel}</span>
                  <span style={{ color: 'var(--gold-400)', fontSize: '0.85rem', fontWeight: 600 }}>{txt.dressCodeValue}</span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              {attending === 'yes' && (
                <button onClick={handlePrintTicket} className="btn-royal-primary">
                  <Printer size={16} />
                  {txt.printButton}
                </button>
              )}
              <button
                onClick={() => setHasResponded(false)}
                className="btn-royal-secondary"
              >
                <Edit3 size={15} />
                {txt.editButton}
              </button>
            </div>
          </div>
        ) : (
          /* Formulaire de réponse */
          <form onSubmit={handleSubmit} className="royal-glass-card" style={{ padding: '2.75rem 2.25rem' }}>
            
            {/* Statut Présence */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                fontFamily: 'var(--font-royal)',
                fontSize: '0.9rem',
                color: 'var(--gold-400)',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}>
                {txt.attendingLabel}
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '1.15rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: attending === 'yes' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(39, 14, 19, 0.65)',
                    border: attending === 'yes' ? '1.5px solid var(--gold-500)' : '1px solid var(--glass-border)',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                  }}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={attending === 'yes'}
                    onChange={(e) => setAttending(e.target.value)}
                    style={{ accentColor: '#D4AF37', width: '18px', height: '18px' }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, color: '#FAF7F2', fontSize: '0.95rem' }}>
                      {txt.yesLabel}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--nude-400)' }}>
                      {txt.yesCaption}
                    </div>
                  </div>
                </label>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '1.15rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: attending === 'no' ? 'rgba(56, 18, 18, 0.35)' : 'rgba(39, 14, 19, 0.65)',
                    border: attending === 'no' ? '1.5px solid #a36555' : '1px solid var(--glass-border)',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                  }}
                >
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={attending === 'no'}
                    onChange={(e) => setAttending(e.target.value)}
                    style={{ accentColor: '#D4AF37', width: '18px', height: '18px' }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, color: '#FAF7F2', fontSize: '0.95rem' }}>
                      {txt.noLabel}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--nude-400)' }}>
                      {txt.noCaption}
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {attending === 'yes' && (
              <>
                {/* Option +1 */}
                {currentGuest?.plusOne && (
                  <div style={{
                    background: 'rgba(39, 14, 19, 0.75)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    marginBottom: '1.75rem',
                  }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', marginBottom: hasPlusOne ? '1rem' : 0 }}>
                      <input
                        type="checkbox"
                        checked={hasPlusOne}
                        onChange={(e) => setHasPlusOne(e.target.checked)}
                        style={{ accentColor: '#D4AF37', width: '18px', height: '18px' }}
                      />
                      <span style={{ fontSize: '0.92rem', color: 'var(--nude-100)', fontWeight: 500 }}>
                        {txt.plusOneLabel}
                      </span>
                    </label>

                    {hasPlusOne && (
                      <input
                        type="text"
                        required={hasPlusOne}
                        value={plusOneName}
                        onChange={(e) => setPlusOneName(e.target.value)}
                        placeholder={txt.plusOnePlaceholder}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(27, 10, 13, 0.9)',
                          border: '1px solid var(--glass-border)',
                          color: '#FAF7F2',
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                      />
                    )}
                  </div>
                )}

                {/* Préférences Banquet */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-royal)',
                    fontSize: '0.85rem',
                    color: 'var(--gold-400)',
                    marginBottom: '0.65rem',
                  }}>
                    <Utensils size={15} />
                    {txt.banquetLabel}
                  </label>
                  <select
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(39, 14, 19, 0.9)',
                      border: '1px solid var(--glass-border)',
                      color: '#FAF7F2',
                      fontSize: '0.9rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {txt.dietOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* Message personnel */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                fontFamily: 'var(--font-royal)',
                fontSize: '0.85rem',
                color: 'var(--gold-400)',
                marginBottom: '0.65rem',
              }}>
                {txt.messageLabel}
              </label>
              <textarea
                rows={3}
                value={guestMessage}
                onChange={(e) => setGuestMessage(e.target.value)}
                placeholder={txt.messagePlaceholder}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(39, 14, 19, 0.9)',
                  border: '1px solid var(--glass-border)',
                  color: '#FAF7F2',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Bouton de soumission */}
            <button type="submit" className="btn-royal-primary" style={{ width: '100%', padding: '1rem' }}>
              <Crown size={18} />
              {txt.submitButton}
            </button>
          </form>
        )}

      </div>
    </section>
  )
}
