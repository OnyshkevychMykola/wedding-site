import { motion } from 'framer-motion'
import styles from '../styles/Hero.module.css'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div className={styles.emoji} {...fadeUp(0)}>
        💍
      </motion.div>

      <motion.h1 className={styles.names} {...fadeUp(0.2)}>
        <span className="gradient-text">Михайло</span>
        <span className={styles.amp}>&amp;</span>
        <span className="gradient-text">Юлія</span>
      </motion.h1>

      <motion.p className={styles.tagline} {...fadeUp(0.4)}>
        Кохання, що веде нас до вічності…<br />
        Наша історія стає початком нашої родини ✨
      </motion.p>

      <motion.div className={styles.datePill} {...fadeUp(0.6)}>
        📅&nbsp; 06 · 06 · 2026 &nbsp;·&nbsp; Львів 🇺🇦
      </motion.div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollArrow} />
        <span>гортай</span>
      </div>
    </section>
  )
}
