import React, { useState, useEffect } from 'react'
import { Gatekeeper } from './components/Gatekeeper'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ProclamationStory } from './components/ProclamationStory'
import { EventDetails } from './components/EventDetails'
import { RoyalTimeline } from './components/RoyalTimeline'
import { RoyalFooter } from './components/RoyalFooter'

export default function App() {
  const [currentGuest, setCurrentGuest] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Vérifier si un invité a déjà franchi le portail
  useEffect(() => {
    try {
      const stored = localStorage.getItem('queen_auth_guest')
      if (stored) {
        setCurrentGuest(JSON.parse(stored))
      }
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleAccessGranted = (guest) => {
    setCurrentGuest(guest)
    try {
      localStorage.setItem('queen_auth_guest', JSON.stringify(guest))
    } catch (e) {
      console.error(e)
    }
  }

  const handleLogout = () => {
    try {
      localStorage.removeItem('queen_auth_guest')
    } catch (e) {
      console.error(e)
    }
    setCurrentGuest(null)
  }

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--royal-dark-950)',
        color: 'var(--gold-400)',
        fontFamily: 'var(--font-royal)',
        fontSize: '1rem',
        letterSpacing: '0.1em',
      }}>
        CHARGEMENT DU PROTOCOLE ROYAL...
      </div>
    )
  }

  // Étape 1 : Si non authentifié, afficher la page de filtrage des visiteurs
  if (!currentGuest) {
    return <Gatekeeper onAccessGranted={handleAccessGranted} />
  }

  // Étape 2 : Une fois le filtrage franchi, afficher l'annonce festive de remise de diplôme
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar currentGuest={currentGuest} onLogout={handleLogout} />
      <main>
        <HeroSection currentGuest={currentGuest} />
        <ProclamationStory />
        <EventDetails />
        <RoyalTimeline />
      </main>
      <RoyalFooter />
    </div>
  )
}
