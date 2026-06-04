import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Hero.module.css'

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const scrollArrow = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  const scrollToNext = () => {
    if (heroRef.current) {
      window.scrollTo({ top: heroRef.current.offsetHeight, behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroInner}>

        {/* Left decoration panel (desktop only) */}
        <motion.div
          className={`${styles.decoPanel} ${styles.decoPanelLeft}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <span className={styles.decoOrnament}>✦</span>
          <div className={styles.decoLine} />
          <span className={styles.decoName}>Микола</span>
          <div className={styles.decoLine} />
          <span className={styles.decoDate}>13 · 09 · 2026</span>
        </motion.div>

        {/* Portrait photo */}
        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/images/hero.jpg" alt="Микола та Діана" className={styles.photo} />
          <div className={styles.photoOverlay} />
        </motion.div>

        {/* Right decoration panel (desktop only) */}
        <motion.div
          className={`${styles.decoPanel} ${styles.decoPanelRight}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <span className={styles.decoOrnament}>✦</span>
          <div className={styles.decoLine} />
          <span className={styles.decoName}>Діана</span>
          <div className={styles.decoLine} />
          <span className={styles.decoDate}>Запрошуємо розділити з нами цей день</span>
        </motion.div>

        {/* Scroll hint (desktop only) */}
        <motion.div
          className={styles.scrollHintDesktop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToNext}
          role="button"
          aria-label="Прокрутити вниз"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && scrollToNext()}
        >
          <svg className={styles.scrollIcon} viewBox="0 0 24 24" fill="none">
            {scrollArrow}
          </svg>
        </motion.div>
      </div>

      {/* Text under photo (mobile only) */}
      <div className={styles.content}>
        <motion.h1 className={styles.names} {...fadeIn(0.4)}>
          Микола та
          <br />
          Діана
        </motion.h1>
        <motion.p className={styles.tagline} {...fadeIn(0.6)}>
          Запрошуємо розділити з нами цей день
        </motion.p>
        <motion.p className={styles.date} {...fadeIn(0.8)}>
          13.09.2026
        </motion.p>
        <motion.div
          className={styles.scrollHint}
          {...fadeIn(1.0)}
          onClick={scrollToNext}
          role="button"
          aria-label="Прокрутити вниз"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && scrollToNext()}
        >
          <svg className={styles.scrollIcon} viewBox="0 0 24 24" fill="none">
            {scrollArrow}
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
