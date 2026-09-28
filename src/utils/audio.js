/**
 * Synthétiseur Audio Web Audio API pour les Fanfares & Chimes Royaux
 * Aucune dépendance externe de fichier MP3, fonctionne partout nativement
 */

class RoyalAudioManager {
  constructor() {
    this.ctx = null
    this.isMuted = false
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.ctx = new AudioContext()
      }
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted
    return this.isMuted
  }

  /**
   * Joue une fanfare d'accord royal triomphant (Do - Mi - Sol - Do Majeur en arpège étincelant)
   */
  playRoyalFanfare() {
    if (this.isMuted) return
    this.init()
    if (!this.ctx) return

    if (this.ctx.state === 'suspended') {
      this.ctx.resume()
    }

    const now = this.ctx.currentTime
    // Notes de la fanfare : C4, E4, G4, C5, E5
    const notes = [
      { freq: 261.63, time: 0, duration: 0.22 },
      { freq: 329.63, time: 0.12, duration: 0.22 },
      { freq: 392.00, time: 0.24, duration: 0.28 },
      { freq: 523.25, time: 0.38, duration: 0.65 },
      { freq: 659.25, time: 0.50, duration: 0.85 },
    ]

    notes.forEach((n) => {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      // Sonorité cuivrée / cloche dorée (triangle + harmoniques douces)
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(n.freq, now + n.time)

      gain.gain.setValueAtTime(0.001, now + n.time)
      gain.gain.exponentialRampToValueAtTime(0.18, now + n.time + 0.04)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.duration)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start(now + n.time)
      osc.stop(now + n.time + n.duration)
    })
  }

  /**
   * Tintement de verre de champagne cristallin
   */
  playChampagneChime() {
    if (this.isMuted) return
    this.init()
    if (!this.ctx) return

    if (this.ctx.state === 'suspended') {
      this.ctx.resume()
    }

    const now = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()

    osc.type = 'sine'
    osc.frequency.setValueAtTime(1760, now) // A6
    osc.frequency.exponentialRampToValueAtTime(1750, now + 1.2)

    gain.gain.setValueAtTime(0.12, now)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2)

    osc.connect(gain)
    gain.connect(this.ctx.destination)

    osc.start(now)
    osc.stop(now + 1.2)
  }
}

export const royalAudio = new RoyalAudioManager()
