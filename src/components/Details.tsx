import { motion } from 'framer-motion'
import styles from '../styles/Details.module.css'
import AnimatedLabel from './AnimatedLabel'

const items = [
  {
    emoji: '💃',
    text: 'Дрескоду нема. Будемо раді святковому одязі!',
  },
  {
    emoji: '🤗',
    text: 'Замість букетів подаруйте нам свої теплі обійми.',
  },
  {
    emoji: '🦦',
    text: "З собою обов'язково взяти хороший настрій та красиву усмішку.",
  },
]

const rotations = [-1.5, 1, -0.8]

export default function Details() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <AnimatedLabel>Дрес-код / Побажання</AnimatedLabel>
      </motion.div>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={styles.note}
            initial={{ opacity: 0, rotate: rotations[i] * 2, y: 16 }}
            whileInView={{ opacity: 1, rotate: rotations[i], y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              rotate: 0,
              y: -6,
              scale: 1.02,
              boxShadow: '4px 10px 28px rgba(180,140,60,0.22)',
              transition: { type: 'spring', stiffness: 280, damping: 22 },
            }}
          >
            <span className={styles.noteEmoji}>{item.emoji}</span>
            <p className={styles.noteText}>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
