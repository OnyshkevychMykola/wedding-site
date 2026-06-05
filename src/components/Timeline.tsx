import { motion } from 'framer-motion'
import styles from '../styles/Timeline.module.css'

const events = [
  { time: '14:00', title: 'Вінчання в церкві', icon: '💍' },
  { time: '16:00', title: 'Збір гостей в ресторані', icon: '🥂' },
  { time: '17:00', title: 'Банкет', icon: '🍽️' },
  { time: '23:00', title: 'Завершення вечора', icon: '✨' },
]

export default function Timeline() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.headingRow}>
          <div className={styles.headingLine} />
          <h2 className={styles.heading}>Програма</h2>
          <div className={styles.headingLine} />
        </div>
      </motion.div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.pin} />
          <div className={styles.list}>
            {events.map((ev, i) => (
              <motion.div
                key={ev.time}
                className={styles.item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <div className={styles.square}>{ev.icon}</div>
                <div className={styles.content}>
                  <span className={styles.time}>{ev.time}</span>
                  <span className={styles.title}>{ev.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
