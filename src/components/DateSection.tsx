import { motion } from 'framer-motion'
import styles from '../styles/DateSection.module.css'

const WEDDING_DAY = 13
const MONTH = 'Вересень 2026'
const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']

const CELLS: Array<{ day: number; prev?: boolean }> = [
  { day: 31, prev: true },
  { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 },
  { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 }, { day: 13 },
  { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 },
  { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 },
  { day: 28 }, { day: 29 }, { day: 30 },
]

export default function DateSection() {
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
          <h2 className={styles.heading}>Дата</h2>
          <div className={styles.headingLine} />
        </div>

        <div className={styles.calendarWrapper}>
          <div className={styles.calendar}>
            <div className={styles.pin} />
            <p className={styles.month}>{MONTH}</p>
            <div className={styles.grid}>
              {DAYS.map(d => (
                <span key={d} className={styles.dayName}>{d}</span>
              ))}
              {CELLS.map((cell, i) => (
                <span
                  key={i}
                  className={[
                    styles.day,
                    cell.prev ? styles.prev : '',
                    cell.day === WEDDING_DAY && !cell.prev ? styles.highlighted : '',
                  ].join(' ')}
                >
                  {cell.day}
                </span>
              ))}
            </div>
            <p className={styles.weddingDate}>
              13 Вересня <span>(Неділя)</span> 14:00
            </p>
          </div>
        </div>

        <p className={styles.lucky}>
          Не лякайтеся числа 13, для нас воно стало щасливим)
        </p>
      </motion.div>
    </section>
  )
}
