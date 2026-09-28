import React, { useState, useEffect } from 'react'
import { Music, Disc, Sparkles, Plus, CheckCircle2 } from 'lucide-react'
import { EVENT_CONFIG } from '../config/eventConfig'
import { royalAudio } from '../utils/audio'

export function RoyalPlaylist() {
  const [playlist, setPlaylist] = useState(EVENT_CONFIG.royalAnthems)
  const [songTitle, setSongTitle] = useState('')
  const [artistName, setArtistName] = useState('')
  const [addedSuccess, setAddedSuccess] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('royal_custom_playlist')
      if (saved) {
        setPlaylist(JSON.parse(saved))
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  const handleAddSong = (e) => {
    e.preventDefault()
    if (!songTitle.trim()) return

    const newTrack = {
      title: songTitle.trim(),
      artist: artistName.trim() || 'Suggestion Dignitaire',
      mood: 'Demande Spéciale de la Cour',
    }

    const updated = [...playlist, newTrack]
    setPlaylist(updated)
    setSongTitle('')
    setArtistName('')
    setAddedSuccess(true)
    royalAudio.playChampagneChime()

    try {
      localStorage.setItem('royal_custom_playlist', JSON.stringify(updated))
    } catch (err) {
      console.error(err)
    }

    setTimeout(() => setAddedSuccess(false), 3000)
  }

  return (
    <section id="playlist" style={{
      padding: '5rem 1.5rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="royal-badge" style={{ marginBottom: '0.75rem' }}>
            <Music size={14} />
            L'AMBIANCE SONORE DU BAL
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.7rem)',
            color: '#FAF7F2',
            marginBottom: '0.65rem',
          }}>
            La Playlist Impériale
          </h2>
          <p style={{ color: 'var(--nude-300)', maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem' }}>
            Les plus grands hymnes du groupe Queen et tubes d'anthologie pour faire vibrer le dancefloor royal.
          </p>
          <div style={{
            width: '80px',
            height: '2px',
            background: 'var(--gold-gradient)',
            margin: '0.8rem auto 0',
          }} />
        </div>

        {/* Grille : Morceaux Phares & Suggestion au DJ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
        }}>
          
          {/* Liste des hymnes */}
          <div className="royal-glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#FAF7F2', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Disc size={20} color="#D4AF37" className="animate-float" />
              Sélection Officielle de Sa Majesté
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {playlist.map((track, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    background: 'rgba(21, 18, 15, 0.75)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                    transition: 'var(--transition-smooth)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-royal)',
                      color: 'var(--gold-400)',
                    }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ color: '#FAF7F2', fontWeight: 600, fontSize: '0.92rem' }}>
                        {track.title}
                      </div>
                      <div style={{ color: 'var(--nude-400)', fontSize: '0.78rem' }}>
                        {track.artist}
                      </div>
                    </div>
                  </div>

                  <span style={{
                    fontSize: '0.72rem',
                    color: 'var(--gold-300)',
                    background: 'rgba(212, 175, 55, 0.1)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 'var(--radius-full)',
                  }}>
                    {track.mood}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire Suggestion au DJ */}
          <div className="royal-glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#FAF7F2', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Sparkles size={20} color="#D4AF37" />
              Suggérer un Morceau au DJ
            </h3>
            <p style={{ color: 'var(--nude-300)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Quelle musique vous fera tout donner sur la piste royale avec la Reine Magaly ?
            </p>

            <form onSubmit={handleAddSong}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-400)', marginBottom: '0.35rem', fontFamily: 'var(--font-royal)' }}>
                  TITRE DE LA CHANSON :
                </label>
                <input
                  type="text"
                  required
                  value={songTitle}
                  onChange={(e) => setSongTitle(e.target.value)}
                  placeholder="Ex: Somebody To Love, Gimme! Gimme! Gimme!..."
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

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-400)', marginBottom: '0.35rem', fontFamily: 'var(--font-royal)' }}>
                  ARTISTE OU GROUPE :
                </label>
                <input
                  type="text"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                  placeholder="Ex: Queen, Earth Wind & Fire..."
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

              {addedSuccess && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--gold-300)',
                  fontSize: '0.85rem',
                  marginBottom: '1rem',
                }}>
                  <CheckCircle2 size={16} />
                  <span>Morceau transmis à la table de mixage du Palais !</span>
                </div>
              )}

              <button type="submit" className="btn-royal-primary" style={{ width: '100%' }}>
                <Plus size={16} />
                Ajouter à la Setlist
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
