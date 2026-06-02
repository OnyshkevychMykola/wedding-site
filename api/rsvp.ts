import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ATTENDANCE_LABEL: Record<string, string> = {
  yes: '✅ Так, буду',
  maybe: '🤔 Повідомлю пізніше',
  no: '😔 Не зможу прийти',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, attendance, guests, comment } = (req.body ?? {}) as {
    name?: string
    attendance?: string
    guests?: number
    comment?: string
  }

  if (!name?.trim() || !attendance) {
    return res.status(400).json({ error: "Поля 'name' та 'attendance' обов'язкові" })
  }

  const toEmail = process.env.RSVP_TO_EMAIL
  if (!toEmail) {
    console.error('RSVP_TO_EMAIL env var is not set')
    return res.status(500).json({ error: 'Server misconfiguration' })
  }

  try {
    await resend.emails.send({
      from: 'Wedding RSVP <onboarding@resend.dev>',
      to: toEmail,
      subject: `💌 RSVP від ${name}`,
      html: `
        <h2>Нова відповідь на запрошення</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Присутність:</strong> ${ATTENDANCE_LABEL[attendance] ?? attendance}</p>
        <p><strong>Кількість гостей:</strong> ${guests ?? 1}</p>
        <p><strong>Коментар:</strong> ${comment || '—'}</p>
      `,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Не вдалося надіслати повідомлення' })
  }
}
