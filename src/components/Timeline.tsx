import { motion } from 'framer-motion'
import styles from '../styles/Timeline.module.css'
import AnimatedLabel from './AnimatedLabel'

const events = [
  { time: '14:00', title: 'Вінчання в церкві', sub: 'Церква Св. Влкмч. Димитрія УГКЦ, Оброшине' },
  { time: '16:00', title: 'Збір гостей в ресторані', sub: 'Ресторан «Озерний Край», Пустомити' },
  { time: '17:00', title: 'Банкет', sub: 'У компанії найдорожчих людей' },
  { time: '23:00', title: 'Завершення вечора', sub: 'До нових зустрічей!' },
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
        <AnimatedLabel>Програма</AnimatedLabel>
      </motion.div>

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
            <div className={styles.bar} />
            <div className={styles.content}>
              <span className={styles.time}>{ev.time}</span>
              <h4 className={styles.title}>{ev.title}</h4>
              <p className={styles.sub}>{ev.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
