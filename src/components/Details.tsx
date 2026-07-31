import { motion } from 'framer-motion'
import styles from '../styles/Details.module.css'

const items = [
  { emoji: '👗', text: 'Дрескоду нема. Будемо раді святковому одязі!' },
  { emoji: '🤗', text: 'Замість букетів подаруйте нам свої теплі обійми та солодощі.' },
  { emoji: '🦦', text: "З собою обов'язково взяти хороший настрій та красиву усмішку." },
  { emoji: '🙏', text: 'Будемо вдячні за підтвердження присутності нижче ↓↓↓' },
]

const rotations = [-2.5, 1.8, -2, 2.5]

export default function Details() {
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
          <h2 className={styles.heading}>Дрескод / побажання</h2>
          <div className={styles.headingLine} />
        </div>
      </motion.div>

      <div className={styles.list}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={`${styles.note} ${i % 2 !== 0 ? styles.noteRight : ''}`}
            initial={{ opacity: 0, rotate: rotations[i] * 2, y: 20 }}
            whileInView={{ opacity: 1, rotate: rotations[i], y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              rotate: 0,
              y: -5,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 280, damping: 22 },
            }}
          >
            <div className={styles.notePin} />
            <span className={styles.noteEmoji}>{item.emoji}</span>
            <p className={styles.noteText}>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
