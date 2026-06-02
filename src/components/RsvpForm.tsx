import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import styles from '../styles/RsvpForm.module.css'
import type { RsvpPayload, Attendance } from '../types'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function RsvpForm() {
  const [form, setForm] = useState<RsvpPayload>({
    name: '',
    attendance: 'yes',
    guests: 1,
    comment: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) return

    setStatus('loading')
    try {
      await axios.post('/api/rsvp', form)
      setStatus('success')
    } catch (err: unknown) {
      const msg =
        axios.isAxiosError(err) && err.response?.data?.error
          ? (err.response.data.error as string)
          : 'Щось пішло не так. Спробуй ще раз.'
      setErrorMsg(msg)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="section-container">
        <div className={`${styles.formCard} glass`}>
          <div className={styles.success}>
            <span className={styles.bigEmoji}>💌</span>
            Дякуємо! Ми отримали твою відповідь.<br />
            Чекаємо з нетерпінням! 💕
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">💌 rsvp</p>
        <h2 className={styles.title}>
          Підтверди <span className="gradient-text">присутність</span>
        </h2>
        <p className={styles.deadline}>
          Будь ласка, підтвердь до <strong>01.05.2026</strong>
        </p>

        <form className={`${styles.formCard} glass`} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="rsvp-name">Ім'я та прізвище</label>
              <input
                id="rsvp-name"
                type="text"
                placeholder="Іваненко Іван"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="rsvp-guests">Кількість гостей</label>
              <input
                id="rsvp-guests"
                type="number"
                min={1}
                max={10}
                value={form.guests}
                onChange={e => setForm(f => ({ ...f, guests: Number(e.target.value) }))}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="rsvp-attendance">Чи зможете бути присутні?</label>
            <select
              id="rsvp-attendance"
              value={form.attendance}
              onChange={e => setForm(f => ({ ...f, attendance: e.target.value as Attendance }))}
            >
              <option value="yes">✅ Так, зможу!</option>
              <option value="maybe">🤔 Повідомлю пізніше</option>
              <option value="no">😔 Не зможу прийти</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="rsvp-comment">Коментар (необов'язково)</label>
            <textarea
              id="rsvp-comment"
              rows={3}
              placeholder="Побажання, алергії, запитання…"
              value={form.comment}
              onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
            />
          </div>

          {status === 'error' && (
            <div className={styles.errorMsg}>⚠️ {errorMsg}</div>
          )}

          <button className={styles.submitBtn} type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? '⏳ Надсилаємо…' : '💌 Надіслати відповідь'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}
