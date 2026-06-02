import { motion } from 'framer-motion'
import { RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'
import styles from '../styles/Gallery.module.css'

const photos = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', width: 800, height: 533, alt: 'Весілля' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', width: 800, height: 534, alt: 'Наречені' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', width: 800, height: 534, alt: 'Обручки' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', width: 800, height: 534, alt: 'Квіти' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', width: 800, height: 533, alt: 'Наречена' },
  { src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&q=80', width: 800, height: 534, alt: 'Львів' },
]

export default function Gallery() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">📸 моменти</p>
        <h2 className={styles.title}>
          Наші <span className="gradient-text">спогади</span>
        </h2>
        <div className={styles.albumWrap}>
          <RowsPhotoAlbum photos={photos} spacing={6} />
        </div>
      </motion.div>
    </section>
  )
}
