import React, { useState } from 'react'
import { Calendar, Clock, MapPin, Compass, ShieldAlert, Sparkles, Navigation } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'

const { event } = EVENT_CONFIG
const { ui } = event

export function EventDetails() {
  const [selectedColor, setSelectedColor] = useState(event.dressCode.paletteSwatches[0])

  // Construit l'URL embed Google Maps depuis l'adresse de config
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    event.location.name + ' ' + event.location.address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  const mapDirectUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.location.name + ' ' + event.location.address
  )}`

  return (
    <section id="details" style={{ padding: '5rem 1.5rem', position: 'relative' }}>
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>

        {/* En-tête de section */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
            <Compass size={14} />
            {ui.protocol.badge}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.7rem)', color: '#FAF7F2', marginBottom: '0.65rem' }}>
            {ui.protocol.title}
          </h2>
          <p style={{ color: 'var(--nude-300)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
            {ui.protocol.subtitle}
          </p>
          <div style={{
            width: '80px',
            height: '2px',
            background: 'var(--gold-gradient)',
            margin: '0.8rem auto 0',
          }} />
        </div>

        {/* 3 Cartes Protocole */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3rem',
        }}>

          {/* Carte 1 : Date & Horaires */}
          <div className="royal-glass-card" style={{ padding: '2.25rem 1.85rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              width: '52px', height: '52px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem',
            }}>
              <Calendar size={26} color="#D4AF37" />
            </div>

            <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.8rem', color: 'var(--gold-400)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              {ui.dateCard.badge}
            </div>

            <h3 style={{ fontSize: '1.35rem', color: '#FAF7F2', marginBottom: '1rem' }}>
              {event.dateFormatted}
            </h3>

            <div style={{ color: 'var(--nude-200)', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                <Clock size={16} color="#D4AF37" />
                <span><strong>{event.doorsOpen}</strong> : {ui.dateCard.doorsLabel}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
                <Clock size={16} color="#D4AF37" />
                <span><strong>{ui.dateCard.startTime}</strong> : {ui.dateCard.startLabel}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Sparkles size={16} color="#D4AF37" />
                <span><strong>{ui.dateCard.endTime}</strong> : {ui.dateCard.endLabel}</span>
              </div>
            </div>

            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(212, 175, 55, 0.12)',
              fontSize: '0.8rem',
              color: 'var(--nude-400)',
            }}>
              {ui.dateCard.footnote}
            </div>
          </div>

          {/* Carte 2 : Lieu */}
          <div className="royal-glass-card" style={{ padding: '2.25rem 1.85rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              width: '52px', height: '52px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem',
            }}>
              <MapPin size={26} color="#D4AF37" />
            </div>

            <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.8rem', color: 'var(--gold-400)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              {ui.locationCard.badge}
            </div>

            <h3 style={{ fontSize: '1.35rem', color: '#FAF7F2', marginBottom: '0.5rem' }}>
              {event.location.name}
            </h3>

            <div style={{ color: 'var(--gold-300)', fontSize: '0.92rem', marginBottom: '1rem', fontWeight: 500 }}>
              {event.location.address}
            </div>

            <p style={{ color: 'var(--nude-300)', fontSize: '0.88rem', lineHeight: 1.5, flexGrow: 1, marginBottom: '1.25rem' }}>
              {event.location.accessNote}
            </p>

            <a
              href={mapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal-secondary"
              style={{ width: '100%', fontSize: '0.82rem', padding: '0.75rem' }}
            >
              <MapPin size={15} color="#D4AF37" />
              {ui.locationCard.mapButton}
            </a>
          </div>

          {/* Carte 3 : Dress Code */}
          <div className="royal-glass-card" style={{ padding: '2.25rem 1.85rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              width: '52px', height: '52px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem',
            }}>
              <Sparkles size={26} color="#D4AF37" />
            </div>

            <div style={{ fontFamily: 'var(--font-royal)', fontSize: '0.8rem', color: 'var(--gold-400)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              {ui.dressCard.badge}
            </div>

            <h3 style={{ fontSize: '1.35rem', color: '#FAF7F2', marginBottom: '0.5rem' }}>
              {event.dressCode.title}
            </h3>

            <p style={{ color: 'var(--nude-200)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              {event.dressCode.description}
            </p>

            {/* Avertissement Zéro Rose */}
            <div style={{
              background: 'rgba(40, 24, 18, 0.85)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 0.95rem',
              marginBottom: '1.25rem',
              display: 'flex', alignItems: 'center', gap: '0.65rem',
            }}>
              <ShieldAlert size={20} color="#D4AF37" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.8rem', color: '#F5E8BE', lineHeight: 1.3 }}>
                <strong>{ui.dressCard.warningLabel}</strong><br />
                {event.dressCode.warningShort}
              </div>
            </div>

            {/* Palette Interactive */}
            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--nude-400)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {event.dressCode.paletteLabel}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {event.dressCode.paletteSwatches.map((swatch, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(swatch)}
                    title={swatch.name}
                    style={{
                      width: '32px', height: '32px',
                      borderRadius: '50%',
                      background: swatch.hex,
                      border: selectedColor.name === swatch.name ? '2px solid #FFFFFF' : '1px solid rgba(0,0,0,0.5)',
                      boxShadow: selectedColor.name === swatch.name ? '0 0 10px rgba(212, 175, 55, 0.7)' : 'none',
                      cursor: 'pointer',
                      transform: selectedColor.name === swatch.name ? 'scale(1.15)' : 'scale(1)',
                      transition: 'all 0.2s',
                    }}
                  />
                ))}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gold-400)', marginTop: '0.4rem', fontWeight: 500 }}>
                {ui.dressCard.paletteSelection} {selectedColor.name} ({selectedColor.hex})
              </div>
            </div>
          </div>

        </div>

        {/* Section Carte Interactive Google Maps */}
        <div style={{ marginTop: '1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
              <Navigation size={14} />
              {ui.map.badge}
            </div>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#FAF7F2', marginBottom: '0.5rem' }}>
              {ui.map.title}
            </h3>
            <p style={{ color: 'var(--nude-300)', fontSize: '0.92rem' }}>
              {ui.map.subtitle}
            </p>
          </div>

          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.65), 0 0 20px rgba(212, 175, 55, 0.1)',
          }}>
            {/* Iframe Google Maps embed */}
            <div style={{ position: 'relative', width: '100%', height: '380px', background: '#15120f' }}>
              <iframe
                title="Localisation du Gala Royal"
                src={mapEmbedUrl}
                width="100%"
                height="380"
                style={{
                  border: 'none',
                  display: 'block',
                  filter: 'hue-rotate(0deg) saturate(0.85) brightness(0.9)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Barre d'info sous la carte */}
            <div style={{
              background: 'rgba(21, 18, 15, 0.95)',
              borderTop: '1px solid rgba(212, 175, 55, 0.22)',
              padding: '1.1rem 1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={18} color="#D4AF37" />
                <div>
                  <div style={{ fontFamily: 'var(--font-royal)', fontWeight: 600, color: '#FAF7F2', fontSize: '0.9rem' }}>
                    {event.location.name}
                  </div>
                  <div style={{ color: 'var(--nude-400)', fontSize: '0.78rem' }}>
                    {event.location.address} · {ui.map.note}
                  </div>
                </div>
              </div>

              <a
                href={mapDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal-primary"
                style={{ fontSize: '0.82rem', padding: '0.65rem 1.25rem' }}
              >
                <Navigation size={14} />
                Itinéraire GPS
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
