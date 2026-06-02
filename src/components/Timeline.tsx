import { motion } from 'framer-motion'
import styles from '../styles/Timeline.module.css'

const events = [
  {
    time: '12:00',
    icon: '⛪',
    title: 'Таїнство вінчання у храмі',
    sub: 'Храм Пресвятої Трійці, вул. Тершаківців, 11а',
    color: 'linear-gradient(135deg,#e040fb,#7c4dff)',
  },
  {
    time: '14:00',
    icon: '🥂',
    title: 'Збір гостей у ресторані',
    sub: 'Ресторан «Сантіно», с. Наварія, вул. Шкільна, 35',
    color: 'linear-gradient(135deg,#40c4ff,#00e5ff)',
  },
  {
    time: '15:00',
    icon: '💒',
    title: 'Весільна церемонія',
    sub: 'Офіційна частина та обмін клятвами',
    color: 'linear-gradient(135deg,#69f0ae,#00e676)',
  },
  {
    time: '16:00',
    icon: '🎉',
    title: 'Банкет',
    sub: 'У компанії найдорожчих людей',
    color: 'linear-gradient(135deg,#ffcc02,#ff6d00)',
  },
  {
    time: '23:00',
    icon: '🌙',
    title: 'Завершення вечора',
    sub: 'До нових зустрічей!',
    color: 'linear-gradient(135deg,#e040fb,#ff4081)',
  },
]

export default function Timeline() {
  return (
    <section className="section-container">
      <p className="section-label">⏱️ програма дня</p>
      <h2 className={styles.title}>
        Як пройде <span className="gradient-text">цей день</span>
      </h2>
      <div className={styles.list}>
        {events.map((ev, i) => (
          <motion.div
            key={ev.time}
            className={styles.item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className={`${styles.time} gradient-text`}>{ev.time}</span>
            <div className={styles.dotCol}>
              <div className={styles.dot} style={{ background: ev.color }} />
              {i < events.length - 1 && <div className={styles.line} />}
            </div>
            <div className={styles.info}>
              <h4>{ev.icon} {ev.title}</h4>
              <p>{ev.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
