import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import styles from '../styles/RsvpForm.module.css'
import type { RsvpPayload, Attendance } from '../types'
import BalloonCelebration from './BalloonCelebration'

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
  const [showBalloons, setShowBalloons] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) return

    setStatus('loading')
    try {
      await axios.post('/api/rsvp', form)
      setStatus('success')
      setShowBalloons(true)
    } catch (err: unknown) {
      const msg =
        axios.isAxiosError(err) && err.response?.data?.error
          ? (err.response.data.error as string)
          : 'Щось пішло не так. Спробуй ще раз.'
      setErrorMsg(msg)
      setStatus('error')
      setShowBalloons(true)
    }
  }

  const handleBalloonsDone = useCallback(() => setShowBalloons(false), [])

  if (status === 'success') {
    return (
      <>
        {showBalloons && <BalloonCelebration onDone={handleBalloonsDone} />}
        <section className="section-container" style={{ textAlign: 'center' }}>
          <p className={styles.successText}>
            Дякуємо! Ми отримали твою відповідь.<br />
            Чекаємо вас на нашому святі! 🎉
          </p>
        </section>
      </>
    )
  }

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">Чекаємо на вашу відповідь</p>
        <p className={styles.deadline}>
          Будь ласка надайте відповідь до <strong>20 серпня</strong>
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="rsvp-name">Ім'я та Прізвище</label>
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
            <label htmlFor="rsvp-attendance">Ваша відповідь</label>
            <select
              id="rsvp-attendance"
              value={form.attendance}
              onChange={e => setForm(f => ({ ...f, attendance: e.target.value as Attendance }))}
            >
              <option value="yes">Стопроц приїду :D</option>
              <option value="maybe">Ще не впевнений/а чи вийде приїхати</option>
              <option value="no">Нажаль не вийде приїхати :(</option>
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
            <p className={styles.errorMsg}>{errorMsg}</p>
          )}

          <button className={styles.submitBtn} type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Надсилаємо…' : 'Відправити відповідь 💌'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}
