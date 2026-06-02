import AuroraBackground from './components/AuroraBackground'
import Hero from './components/Hero'
import Story from './components/Story'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Details from './components/Details'
import RsvpForm from './components/RsvpForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <AuroraBackground />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div className="divider" />
        <Story />
        <div className="divider" />
        <Timeline />
        <div className="divider" />
        <Gallery />
        <div className="divider" />
        <Location />
        <div className="divider" />
        <Details />
        <div className="divider" />
        <RsvpForm />
      </main>
      <Footer />
    </>
  )
}
