import confetti from 'canvas-confetti'

/**
 * Palette Nude & Or Royal STRICTEMENT SANS ROSE
 * Or impérial, champagne éclatant, sable chaud, nude poudré chaud, ivoire, bronze
 */
const ROYAL_NUDE_PALETTE = [
  '#D4AF37', // Or impérial classique
  '#E5C365', // Or clair étincelant
  '#F4E8C1', // Champagne lumineux
  '#DFCBB5', // Nude chaud
  '#C8B29B', // Sable doré
  '#EFE6DC', // Ivoire soyeux
  '#A38350', // Bronze royal chaud
  '#7A5C3D', // Moka profond
]

/**
 * Explosion Royale de Confettis (Double canon latéral + retombée majestueuse)
 */
export function fireRoyalConfetti() {
  const duration = 2.8 * 1000
  const animationEnd = Date.now() + duration
  const defaults = {
    startVelocity: 35,
    spread: 360,
    ticks: 80,
    zIndex: 9999,
    colors: ROYAL_NUDE_PALETTE,
  }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 45 * (timeLeft / duration)

    // Canon gauche
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ROYAL_NUDE_PALETTE,
    })

    // Canon droit
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ROYAL_NUDE_PALETTE,
    })
  }, 220)
}

/**
 * Tir de Célébration Centrale (Pour RSVP ou Envoi d'un Toast)
 */
export function fireCelebrationBlast() {
  confetti({
    particleCount: 90,
    spread: 80,
    origin: { y: 0.65 },
    colors: ROYAL_NUDE_PALETTE,
    zIndex: 9999,
    scalar: 1.2,
  })
}

/**
 * Étoiles et Joyaux Royaux en pluie
 */
export function fireRoyalStars() {
  confetti({
    shapes: ['star', 'circle'],
    particleCount: 50,
    spread: 120,
    origin: { y: 0.5 },
    colors: ['#D4AF37', '#F4E8C1', '#DFCBB5', '#FFFFFF'],
    zIndex: 9999,
    scalar: 1.3,
  })
}
