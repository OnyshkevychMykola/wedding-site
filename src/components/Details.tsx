import { motion } from 'framer-motion'
import styles from '../styles/Details.module.css'

const items = [
  {
    icon: '👗',
    title: 'Дрес-код',
    text: 'Немає суворих обмежень — оберіть святкове та урочисте вбрання. Разом створимо особливу атмосферу! ✨',
  },
  {
    icon: '🌸',
    title: 'Побажання',
    text: 'Замість квітів — ваші теплі обійми та гарний настрій. Ваша присутність для нас — понад усе! 💕',
  },
]

export default function Details() {
  return (
    <section className="section-container">
      <p className="section-label">✨ деталі</p>
      <h2 className={styles.title}>
        Що <span className="gradient-text">варто знати</span>
      </h2>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className={`${styles.card} glass`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
