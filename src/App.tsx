import Hero from './components/Hero'
import Story from './components/Story'
import DateSection from './components/DateSection'
import Location from './components/Location'
import Timeline from './components/Timeline'
import Details from './components/Details'
import RsvpForm from './components/RsvpForm'
import Footer from './components/Footer'

export default function App() {
  return (
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
    </main>
  )
}
