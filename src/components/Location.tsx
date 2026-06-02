import { motion } from 'framer-motion'
import styles from '../styles/Location.module.css'

const locations = [
  {
    icon: '⛪',
    name: 'Храм Пресвятої Трійці',
    address: 'м. Львів, вул. Тершаківців, 11а',
    mapUrl: 'https://maps.google.com/?q=Храм+Пресвятої+Трійці,+Тершаківців+11а,+Львів',
  },
  {
    icon: '🍾',
    name: 'Ресторан «Сантіно»',
    address: 'с. Наварія, вул. Шкільна, 35',
    mapUrl: 'https://maps.google.com/?q=Ресторан+Сантіно,+Наварія,+Шкільна+35',
  },
]

export default function Location() {
  return (
    <section className="section-container">
      <p className="section-label">📍 локація</p>
      <h2 className={styles.title}>
        Де <span className="gradient-text">нас знайти</span>
      </h2>
      <div className={styles.grid}>
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            className={`${styles.card} glass`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className={styles.icon}>{loc.icon}</div>
            <h4>{loc.name}</h4>
            <p>{loc.address}</p>
            <a
              className={styles.mapBtn}
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              🗺️ Відкрити карту
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
