import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  const scrollToNext = () => {
    if (heroRef.current) {
      window.scrollTo({ top: heroRef.current.offsetHeight, behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.photoWrap}>
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/desktop-img.jpg" />
          <img
            src="/images/mobile-img.jpg"
            alt="Микола та Діана"
            className={styles.photo}
          />
        </picture>
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={styles.names}>
          <span>Микола та</span>
          <span className={styles.namesDiana}>Діана</span>
        </h1>
        <div className={styles.separator} />
        <p className={styles.tagline}>
          Запрошуємо розділити з нами<br />цей день 13.09.2026
        </p>
      </motion.div>

      <motion.button
        className={styles.scrollBtn}
        onClick={scrollToNext}
        aria-label="Прокрутити вниз"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <svg className={styles.scrollIcon} viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </section>
  )
}
