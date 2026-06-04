import { motion } from 'framer-motion'
import styles from '../styles/Story.module.css'
import AnimatedLabel from './AnimatedLabel'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.7 },
}

export default function Story() {
  return (
    <section className="section-container">
      <motion.div {...fadeIn}>
        <AnimatedLabel>Про нас</AnimatedLabel>
        <div className={styles.cinemaCard}>
          <p className={styles.premiere}>🎬 Прем'єра року</p>
          <p className={styles.text}>
            Після успішного першого сезону під назвою «Побачення», кількох
            сезонів «Спільне життя» та численних спецвипусків ми раді
            представити довгоочікуване продовження:
          </p>
          <p className={styles.title}>«Весілля. Назавжди разом».</p>
          <div className={styles.meta}>
            <p><strong>У ролях:</strong> наречена, наречений та найкращі гості.</p>
            <p><strong>Жанр:</strong> романтична комедія з елементами весілля</p>
            <p><strong>Спецефекти:</strong> сльози радості, сміх і танці до ранку</p>
          </div>
          <p className={styles.invite}>
            Запрошуємо на показ найважливішого епізоду нашого життя —
            нашого весілля. 🍾
          </p>
        </div>
      </motion.div>
    </section>
  )
}
