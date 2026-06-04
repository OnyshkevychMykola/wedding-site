import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="divider" style={{ marginBottom: 48 }} />
      <p className={styles.thanks}>Чекаємо вас на нашому святі</p>
      <p className={styles.subtitle}>з любов'ю</p>
      <p className={styles.names}>Микола та Діана</p>
    </footer>
  )
}
