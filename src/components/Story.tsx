import { motion } from 'framer-motion'
import styles from '../styles/Story.module.css'

export default function Story() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">🌸 наша історія</p>
        <p className={styles.text}>
          Колись це була історія лише двох людей, які зустрілися випадково.
          А сьогодні — це історія, що стане початком нашої родини.
          <br /><br />
          Ми з радістю запрошуємо Вас розділити з нами цей особливий день! 🥂
        </p>
      </motion.div>
    </section>
  )
}
