import React, { useState, useEffect } from 'react'
import { Crown, Sparkles, Calendar, Clock, MapPin, Download, Heart } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'
import { fireCelebrationBlast } from '../utils/confetti'

export function HeroSection({ currentGuest }) {
  // Compte à rebours dynamique
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date(EVENT_CONFIG.event.isoDate).getTime()

    const calculateTime = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  // Téléchargement du fichier de calendrier ICS
  const downloadIcsCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Queens Graduation Gala//FR',
      'BEGIN:VEVENT',
      'UID:graduation-magaly-2026@queen.fr',
      'DTSTAMP:20260926T200000Z',
      'DTSTART:20261024T160000Z', // 18h00 Paris
      'DTEND:20261025T020000Z',   // 04h00 Paris
      'SUMMARY:The Queen\'s Graduation Gala - Magaly',
      'DESCRIPTION:Célébration officielle de remise de diplôme de la Reine Magaly. Dress code : Nude & Or impérial (Aucun rose toléré).',
      `LOCATION:${EVENT_CONFIG.event.location.name}\\, ${EVENT_CONFIG.event.location.address}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'Gala-Diplome-Queen-Magaly.ics')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    fireCelebrationBlast()
  }

  return (
    <section id="hero" style={{
      position: 'relative',
      padding: '4rem 1.5rem 5rem',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Halo lumineux d'apparat — Or */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '650px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.13) 0%, rgba(199, 174, 144, 0.04) 50%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
      }} />

      {/* Halo bordeaux d'apparat — Profondeur */}
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(139, 37, 51, 0.15) 0%, rgba(81, 24, 31, 0.06) 55%, transparent 75%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '980px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Blason / Armoiries Royales */}
        <div style={{
          width: '150px',
          height: '150px',
          margin: '0 auto 1.75rem',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid var(--gold-500)',
          boxShadow: '0 0 0 6px rgba(81, 24, 31, 0.35), 0 0 35px rgba(212, 175, 55, 0.4), 0 12px 30px rgba(0,0,0,0.8)',
          background: '#1A0508',
          position: 'relative',
        }}>
          <img
            src="./queen-crest.jpg"
            alt="Armoiries de Sa Majesté Magaly"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Badge Proclamation */}
        <div className="royal-badge" style={{ marginBottom: '1.25rem' }}>
          <Sparkles size={14} />
          PAR DÉCRET OFFICIEL DE SA MAJESTÉ
        </div>

        {/* Titre Principal Majestueux */}
        <h1 style={{
          fontSize: 'clamp(2.1rem, 5.5vw, 3.8rem)',
          lineHeight: 1.15,
          marginBottom: '0.85rem',
          color: '#FAF7F2',
        }}>
          The Queen's <span className="text-gold-gradient">Graduation</span> Gala
        </h1>

        {/* Sous-titre & Célébration */}
        <p style={{
          fontFamily: 'var(--font-royal)',
          fontSize: 'clamp(1rem, 2.4vw, 1.35rem)',
          letterSpacing: '0.12em',
          color: 'var(--gold-400)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
        }}>
          Le Couronnement Académique de {EVENT_CONFIG.queen.firstName}
        </p>

        {/* Salutation Personnalisée de l'Invité */}
        {currentGuest && (
          <div style={{
            background: 'rgba(42, 8, 16, 0.70)',
            border: '1px solid rgba(139, 37, 51, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.5rem',
            maxWidth: '680px',
            margin: '0 auto 2.25rem',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 24px rgba(139, 37, 51, 0.12)',
          }}>
            <p className="font-script" style={{
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'var(--nude-100)',
              lineHeight: 1.4,
            }}>
              "{currentGuest.greeting}"
            </p>
            <div style={{
              fontSize: '0.8rem',
              color: 'var(--gold-400)',
              marginTop: '0.4rem',
              fontFamily: 'var(--font-royal)',
              letterSpacing: '0.06em',
            }}>
              Ordre de convocation délivré à : {currentGuest.name} ({currentGuest.role})
            </div>
          </div>
        )}

        {/* Barres des Infos Clés */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.25rem',
          marginBottom: '2.5rem',
          fontSize: '0.92rem',
        }}>
          <div className="royal-glass-card" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Calendar size={18} color="#D4AF37" />
            <span>{EVENT_CONFIG.event.dateFormatted}</span>
          </div>

          <div className="royal-glass-card" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Clock size={18} color="#D4AF37" />
            <span>{EVENT_CONFIG.event.time}</span>
          </div>

          <div className="royal-glass-card" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <MapPin size={18} color="#D4AF37" />
            <span>{EVENT_CONFIG.event.location.name}</span>
          </div>
        </div>

        {/* Compte à Rebours Royal */}
        <div style={{
          maxWidth: '620px',
          margin: '0 auto 2.75rem',
          padding: '1.5rem 1rem',
          background: 'rgba(21, 18, 15, 0.75)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(212, 175, 55, 0.28)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
        }}>
          <div style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-royal)',
            letterSpacing: '0.15em',
            color: 'var(--gold-400)',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Temps restant avant l'ouverture des portes royales
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.75rem',
          }}>
            {[
              { label: 'Jours', val: timeLeft.days },
              { label: 'Heures', val: timeLeft.hours },
              { label: 'Minutes', val: timeLeft.minutes },
              { label: 'Secondes', val: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(38, 32, 27, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 0.5rem',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-royal)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#FAF7F2',
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                }}>
                  {String(unit.val).padStart(2, '0')}
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--nude-400)',
                }}>
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boutons d'Action Principaux */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}>
          <a href="#details" className="btn-royal-primary">
            <Crown size={18} />
            Le Protocole &amp; Dress Code
          </a>

          <button
            onClick={downloadIcsCalendar}
            className="btn-royal-secondary"
            style={{ cursor: 'pointer' }}
          >
            <Download size={16} color="#D4AF37" />
            Ajouter au Calendrier
          </button>
        </div>

      </div>
    </section>
  )
}
