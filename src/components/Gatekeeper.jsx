import React, { useState } from 'react'
import { Crown, Sparkles, Mail, Lock, Unlock, AlertCircle, CheckCircle2 } from 'lucide-react'
import { verifyGuestEmail, EVENT_CONFIG } from '../config/eventConfig'
import { fireRoyalConfetti } from '../utils/confetti'
import { royalAudio } from '../utils/audio'

export function Gatekeeper({ onAccessGranted }) {
  const [emailInput, setEmailInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isShaking, setIsShaking] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [acceptedGuest, setAcceptedGuest] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    const guest = verifyGuestEmail(emailInput)

    if (guest) {
      // Accès accordé !
      setAcceptedGuest(guest)
      setIsSuccess(true)
      fireRoyalConfetti()
      royalAudio.playRoyalFanfare()

      // Enregistrement dans localStorage et transition vers la cour royale
      setTimeout(() => {
        onAccessGranted(guest)
      }, 1600)
    } else {
      // Accès bloqué
      setIsShaking(true)
      setErrorMessage(
        "Accès non autorisé : Votre adresse ne figure pas sur le registre royal de Sa Majesté. Veuillez vérifier l'orthographe ou contacter le Grand Chambellan."
      )
      setTimeout(() => setIsShaking(false), 600)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.25rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Halo d'ambiance doré & nude en arrière-plan */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(199, 174, 144, 0.05) 50%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div
        className={`royal-glass-card ${isShaking ? 'animate-shake' : 'animate-fade-scale'}`}
        style={{
          width: '100%',
          maxWidth: '540px',
          padding: '2.75rem 2.25rem',
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          border: isSuccess ? '1px solid #D4AF37' : '1px solid var(--glass-border)',
          boxShadow: isSuccess 
            ? '0 0 50px rgba(212, 175, 55, 0.35), 0 20px 50px rgba(0,0,0,0.8)' 
            : 'var(--glass-shadow)',
        }}
      >
        {/* Sceau / Emblème Royal */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.25rem' }}>
          <div style={{
            width: '84px',
            height: '84px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2e261e 0%, #15120f 100%)',
            border: '2px solid var(--gold-500)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            boxShadow: '0 0 24px rgba(212, 175, 55, 0.35)',
            position: 'relative',
          }}>
            {isSuccess ? (
              <Unlock size={38} color="#D4AF37" className="animate-float" />
            ) : (
              <Crown size={40} color="#D4AF37" className="animate-float" />
            )}
          </div>
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            right: '-6px',
            background: '#D4AF37',
            borderRadius: '50%',
            padding: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}>
            <Sparkles size={14} color="#15120f" />
          </div>
        </div>

        {/* Titre & Proclamation */}
        <div className="royal-badge" style={{ marginBottom: '0.85rem' }}>
          <Crown size={12} />
          {EVENT_CONFIG.queen.badge}
        </div>

        <h1 style={{
          fontSize: '1.85rem',
          lineHeight: 1.25,
          marginBottom: '0.65rem',
          color: '#FAF7F2',
        }}>
          Le Portail Royal
        </h1>

        <p className="font-script" style={{
          fontSize: '1.2rem',
          fontStyle: 'italic',
          color: 'var(--nude-300)',
          marginBottom: '2rem',
          lineHeight: 1.5,
        }}>
          "Par décret de la Reine Magaly, l'accès à la célébration officielle de sa remise de diplôme est strictement réservé aux invités d'honneur."
        </p>

        {/* Notification de succès royale */}
        {isSuccess && acceptedGuest && (
          <div style={{
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid #D4AF37',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.75rem',
            textAlign: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: '#F5E8BE' }}>
              <CheckCircle2 size={20} color="#D4AF37" />
              <strong style={{ fontFamily: 'var(--font-royal)', letterSpacing: '0.05em' }}>
                ACCÈS ACCORDÉ À LA COUR
              </strong>
            </div>
            <p style={{ color: 'var(--nude-100)', fontSize: '0.95rem', fontWeight: 500 }}>
              Bienvenue, {acceptedGuest.name} !
            </p>
            <p style={{ color: 'var(--nude-300)', fontSize: '0.82rem', marginTop: '0.2rem' }}>
              {acceptedGuest.role} • Ouverture des portes royales...
            </p>
          </div>
        )}

        {/* Formulaire de filtrage par email */}
        {!isSuccess && (
          <form onSubmit={handleSubmit} style={{ marginBottom: '1.75rem' }}>
            <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--nude-400)',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
              }}>
                <Mail size={18} />
              </div>

              <input
                id="guest-email-input"
                type="email"
                required
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value)
                  if (errorMessage) setErrorMessage('')
                }}
                placeholder="Votre adresse email d'invitation..."
                style={{
                  width: '100%',
                  padding: '0.95rem 1rem 0.95rem 2.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(21, 18, 15, 0.85)',
                  border: errorMessage ? '1px solid #b54a35' : '1px solid var(--glass-border)',
                  color: '#FAF7F2',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'var(--transition-smooth)',
                  fontFamily: 'var(--font-ui)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--gold-500)'
                  e.target.style.boxShadow = '0 0 16px rgba(212, 175, 55, 0.25)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errorMessage ? '#b54a35' : 'var(--glass-border)'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>

            {/* Message d'erreur élégant en cas de refus */}
            {errorMessage && (
              <div style={{
                background: 'rgba(56, 26, 20, 0.65)',
                border: '1px solid #8f3826',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1rem',
                marginBottom: '1.25rem',
                color: '#f4c7be',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                textAlign: 'left',
                lineHeight: 1.4,
              }}>
                <AlertCircle size={18} color="#e07560" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              id="submit-royal-access"
              type="submit"
              className="btn-royal-primary"
              style={{ width: '100%', padding: '0.95rem' }}
            >
              <Lock size={16} />
              Pénétrer dans le Palais
            </button>
          </form>
        )}

        {/* Note de Protocole (Rappel Dress Code & Ambiance Nude - Sans Rose) */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(212, 175, 55, 0.12)',
          fontSize: '0.8rem',
          color: 'var(--nude-400)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          <div>
            🏛️ <strong>Gala de Célébration</strong> • Palette Nude, Ivoire &amp; Or Impérial
          </div>
          <div style={{ color: 'var(--gold-400)', fontStyle: 'italic' }}>
            Règle de courtoisie royale : Tenues roses strictement proscrites.
          </div>
        </div>

      </div>
    </div>
  )
}
