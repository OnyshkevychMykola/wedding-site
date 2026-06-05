import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import styles from '../styles/RsvpForm.module.css'
import type { RsvpPayload, Attendance } from '../types'
import BalloonCelebration from './BalloonCelebration'

type Status = 'idle' | 'loading' | 'success' | 'error'

const YES_LABEL = (guests: number) =>
  guests > 1 ? 'Стопроц приїдемо :D' : 'Стопроц приїду :D'

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
        <section className={styles.section}>
          <div className={styles.container} style={{ textAlign: 'center' }}>
            <p className={styles.successText}>
              Дякуємо! Ми отримали твою відповідь.<br />
              Чекаємо вас на нашому святі! 🎉
            </p>
          </div>
        </section>
      </>
    )
  }

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.headingRow}>
          <div className={styles.headingLine} />
          <h2 className={styles.heading}>Чекаємо на вашу відповідь</h2>
          <div className={styles.headingLine} />
        </div>

        <p className={styles.deadline}>
          Будь ласка надайте відповідь до <strong>20 серпня</strong>
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <input
              id="rsvp-name"
              type="text"
              placeholder="Ім'я та Прізвище"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
          </div>

          <div className={styles.chips}>
            {([
              { value: 'yes'   as Attendance, label: YES_LABEL(form.guests) },
              { value: 'maybe' as Attendance, label: 'Ще не впевнений/а чи вийде приїхати' },
              { value: 'no'    as Attendance, label: 'Нажаль не вийде приїхати :(' },
            ]).map(chip => (
              <button
                key={chip.value}
                type="button"
                className={`${styles.chip} ${form.attendance === chip.value ? styles.chipActive : ''}`}
                onClick={() => setForm(f => ({ ...f, attendance: chip.value }))}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {form.attendance !== 'no' && (
            <div className={styles.guestsStepper}>
              <button
                type="button"
                className={styles.guestsStepBtn}
                onClick={() => setForm(f => ({ ...f, guests: Math.max(1, f.guests - 1) }))}
                aria-label="Зменшити"
              >−</button>
              <span className={styles.guestsCount}>
                {form.guests === 1 ? 'Приїду сам/сама' : `Нас буде ${form.guests}`}
              </span>
              <button
                type="button"
                className={styles.guestsStepBtn}
                onClick={() => setForm(f => ({ ...f, guests: Math.min(20, f.guests + 1) }))}
                aria-label="Збільшити"
              >+</button>
            </div>
          )}

          <div className={styles.field}>
            <textarea
              id="rsvp-comment"
              rows={2}
              placeholder="Коментар (необов'язково)"
              value={form.comment}
              onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
            />
          </div>

          {status === 'error' && (
            <p className={styles.errorMsg}>{errorMsg}</p>
          )}

          <button className={styles.submitBtn} type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Надсилаємо…' : 'ВІДПРАВИТИ ВІДПОВІДЬ 💌'}
          </button>
        </form>
      </motion.div>
    </section>
  )
}
