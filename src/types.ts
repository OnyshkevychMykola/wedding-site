export type Attendance = 'yes' | 'maybe' | 'no'

export interface RsvpPayload {
  name: string
  attendance: Attendance
  guests: number
  comment: string
}

export interface RsvpResponse {
  ok: boolean
  error?: string
}
