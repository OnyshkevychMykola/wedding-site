import { useRef, useState } from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import DateSection from './components/DateSection'
import Location from './components/Location'
import Timeline from './components/Timeline'
import Details from './components/Details'
import RsvpForm from './components/RsvpForm'
import Footer from './components/Footer'
import MusicPlayer, { MusicPlayerRef } from './components/MusicPlayer'
import EnvelopeIntro from './components/EnvelopeIntro'

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const musicRef = useRef<MusicPlayerRef>(null)

  const handleEnvelopeDone = () => {
    setEnvelopeOpened(true)
    musicRef.current?.play()
  }

  return (
    <>
      {!envelopeOpened && (
        <EnvelopeIntro onDone={handleEnvelopeDone} />
      )}
      <main>
        <Hero />
        <Story />
        <div className="divider" />
        <DateSection />
        <div className="divider" />
        <Location />
        <div className="divider" />
        <Timeline />
        <div className="divider" />
        <Details />
        <RsvpForm />
        <Footer />
        <MusicPlayer ref={musicRef} />
      </main>
    </>
  )
}
