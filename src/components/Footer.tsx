import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="divider" style={{ marginBottom: 48 }} />
      <div className={styles.emoji}>💕</div>
      <p className={styles.text}>
        З любов'ю, <strong>Михайло та Юлія</strong>
      </p>
      <p className={styles.text} style={{ marginTop: 4 }}>
        06 · 06 · 2026 · Львів
      </p>
    </footer>
  )
}
