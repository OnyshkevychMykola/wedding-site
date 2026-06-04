import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Balloon {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  drift: number
}

function generateBalloons(count: number): Balloon[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 5 + Math.random() * 90,
    delay: Math.random() * 1.5,
    duration: 3 + Math.random() * 1.5,
    size: 30 + Math.random() * 24,
    drift: (Math.random() - 0.5) * 70,
  }))
}

interface Props {
  onDone: () => void
}

export default function BalloonCelebration({ onDone }: Props) {
  const [balloons] = useState(() => generateBalloons(20))
  const screenH = window.innerHeight + 120

  useEffect(() => {
    const timer = setTimeout(onDone, 6500)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {balloons.map(b => (
        <motion.div
          key={b.id}
          style={{
            position: 'absolute',
            bottom: -60,
            left: `${b.x}vw`,
            fontSize: b.size,
            lineHeight: 1,
            userSelect: 'none',
          }}
          animate={{
            y: [0, -screenH],
            x: [0, b.drift, -b.drift * 0.6, b.drift * 0.3, 0],
          }}
          transition={{
            delay: b.delay,
            duration: b.duration,
            ease: 'easeOut',
          }}
        >
          🎈
        </motion.div>
      ))}
    </div>
  )
}
