import { useEffect, useRef, useState } from 'react'
import styles from '../styles/MusicPlayer.module.css'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.4
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (!playing) {
      audio.play().then(() => {
        setPlaying(true)
        setMuted(false)
      })
    } else {
      const next = !muted
      audio.muted = next
      setMuted(next)
    }
  }

  const isMuted = muted || !playing

  return (
    <>
      <audio ref={audioRef} src="/ode_to_joy.mp3" loop />
      <button
        className={styles.musicBtn}
        onClick={toggle}
        aria-label={isMuted ? 'Увімкнути музику' : 'Вимкнути музику'}
        title={isMuted ? 'Увімкнути музику' : 'Вимкнути музику'}
      >
        {isMuted ? <MutedIcon /> : <SoundIcon />}
      </button>
    </>
  )
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}
