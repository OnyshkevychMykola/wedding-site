import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/EnvelopeIntro.module.css'

type Phase = 'idle' | 'opening' | 'done'

export default function EnvelopeIntro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>('idle')

  const handleClick = () => {
    if (phase !== 'idle') return
    setPhase('opening')
    setTimeout(onDone, 3300)
  }

  if (phase === 'done') return null

  return (
    <motion.div
      className={styles.overlay}
      onClick={handleClick}
      animate={phase === 'opening' ? { opacity: 0 } : { opacity: 1 }}
      transition={phase === 'opening' ? { duration: 0.7, delay: 2.6 } : { duration: 0.6 }}
    >
      <div className={styles.scene}>
        {/* Letter card slides up from inside envelope */}
        <motion.div
          className={styles.letter}
          initial={{ y: '30%', opacity: 0 }}
          animate={phase === 'opening' ? { y: '-55%', opacity: 1 } : { y: '30%', opacity: 0 }}
          transition={{ duration: 1.0, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.letterMonogram}>М &amp; Д</span>
          <span className={styles.letterDate}>13 · 09 · 2026</span>
          <span className={styles.letterInvite}>Запрошуємо вас</span>
        </motion.div>

        {/* Envelope */}
        <div className={styles.envelope}>
          {/* Back layer (visible through open flap) */}
          <div className={styles.envelopeBack} />

          {/* Side folds */}
          <div className={styles.flapLeft} />
          <div className={styles.flapRight} />

          {/* Bottom fold */}
          <div className={styles.flapBottom} />

          {/* Top flap — rotates open on click */}
          <motion.div
            className={styles.flapTop}
            animate={phase === 'opening' ? { rotateX: -175 } : { rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Wax seal — fades before flap lifts */}
          <motion.div
            className={styles.seal}
            animate={phase === 'opening' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            ♡
          </motion.div>
        </div>

        {/* Hint below envelope */}
        <motion.p
          className={styles.hint}
          initial={{ opacity: 0, y: 6 }}
          animate={
            phase === 'opening'
              ? { opacity: 0, y: 6 }
              : { opacity: 1, y: 0 }
          }
          transition={phase === 'idle' ? { duration: 0.7, delay: 0.9 } : { duration: 0.15 }}
        >
          Натисніть, щоб відкрити
        </motion.p>
      </div>
    </motion.div>
  )
}
