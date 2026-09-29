import React, { useState, useEffect } from 'react'
import { Gatekeeper } from './components/Gatekeeper'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ProclamationStory } from './components/ProclamationStory'
import { EventDetails } from './components/EventDetails'
import { RoyalFooter } from './components/RoyalFooter'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      // Nettoyage éventuel de l'ancien format d'authentification invité
      if (localStorage.getItem('queen_auth_guest')) {
        localStorage.removeItem('queen_auth_guest')
      }
      const stored = localStorage.getItem('queen_royal_access')
      if (stored === 'granted') {
        setIsAuthenticated(true)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleAccessGranted = () => {
    setIsAuthenticated(true)
    try {
      localStorage.setItem('queen_royal_access', 'granted')
    } catch (e) {
      console.error(e)
    }
  }

  const handleLogout = () => {
    try {
      localStorage.removeItem('queen_royal_access')
    } catch (e) {
      console.error(e)
    }
    setIsAuthenticated(false)
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

  if (!isAuthenticated) {
    return <Gatekeeper onAccessGranted={handleAccessGranted} />
  }

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar onLogout={handleLogout} />
      <main>
        <HeroSection />
        <ProclamationStory />
        <EventDetails />
      </main>
      <RoyalFooter />
    </div>
  )
}
