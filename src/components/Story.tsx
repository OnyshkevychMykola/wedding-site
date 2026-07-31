import { motion } from 'framer-motion'
import styles from '../styles/Story.module.css'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.7 },
}

export default function Story() {
  return (
    <section className={styles.section}>
      <motion.div className={styles.container} {...fadeIn}>

        <div className={styles.headingRow}>
          <div className={styles.headingLine} />
          <h2 className={styles.heading}>Про нас</h2>
          <div className={styles.headingLine} />
        </div>

        <p className={styles.premiere}>🎬 Прем'єра року</p>

        <p className={styles.text}>
          Після кількох сезонів кохання, спільних подорожей, сотень щасливих днів і тисяч теплих
          спогадів ми готові представити головний випуск нашого життя:
        </p>

        <p className={styles.movieTitle}>«Весілля. І жили вони довго та щасливо»</p>

        <div className={styles.meta}>
          <p>❤️ <strong>У головних ролях:</strong> наречена і наречений</p>
          <p>👥 <strong>Акторський склад:</strong> найкращі друзі та найрідніша родина</p>
          <p>🎭 <strong>Жанр:</strong> романтична комедія з гарантованим щасливим фіналом</p>
          <p>✨ <strong>Спецефекти:</strong> сльози щастя, сміх і море танців</p>
        </div>

        <p className={styles.invite}>
          Будемо щасливі бачити вас серед гостей на головній прем'єрі нашої історії. 🍾
        </p>

      </motion.div>
    </section>
  )
}
