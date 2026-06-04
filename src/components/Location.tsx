import { motion } from 'framer-motion'
import styles from '../styles/Location.module.css'

const locations = [
  {
    name: 'Церква Св. Влкмч. Димитрія УГКЦ',
    address: 'Оброшине, Львівська область',
    mapUrl: 'https://maps.google.com/?q=Церква+Св.+Влкмч.+Димитрія+УГКЦ,+Оброшине,+Львівська+область',
    image: '/images/obroshino_church.jpg',
    alt: 'Церква Св. Влкмч. Димитрія УГКЦ',
  },
  {
    name: 'Ресторан «Озерний Край»',
    address: 'вул. Ставкова, 60, Пустомити, Львівська область',
    mapUrl: 'https://maps.google.com/?q=Ресторан+Озерний+Край,+вул.+Ставкова+60,+Пустомити',
    image: '/images/new_restaurant.jpg',
    alt: 'Ресторан «Озерний Край»',
  },
]

export default function Location() {
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
          <h2 className={styles.heading}>Локації</h2>
          <div className={styles.headingLine} />
        </div>
      </motion.div>

      <div className={styles.list}>
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            className={styles.venue}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{
              y: -6,
              transition: { type: 'spring', stiffness: 300, damping: 24 },
            }}
          >
            <div className={styles.imageWrap}>
              <img src={loc.image} alt={loc.alt} className={styles.image} />
            </div>
            <h4 className={styles.venueName}>{loc.name}</h4>
            <p className={styles.venueAddress}>{loc.address}</p>
            <a
              className={styles.mapBtn}
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 ПОКАЗАТИ НА КАРТІ
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
