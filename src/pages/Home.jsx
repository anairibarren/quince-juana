import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Countdown from "../components/Countdown"
import InfoCards from "../components/InfoCards"
import Gallery from "../components/Gallery"
import GiftBlock from "../components/GiftBlock"
import RSVP from "../components/RSVP"
import Footer from "../components/Footer"
import MusicPlayer from "../components/MusicPlayer"

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // dispara fade-in al montar el componente
    setVisible(true)
  }, [])

  return (
    <div
      className={`
        transition-opacity duration-700 ease-in-out
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Hero />

      <Countdown />

      <InfoCards />

      <Gallery />

      <GiftBlock />

      <RSVP />

      <Footer />

      <MusicPlayer
        menuOpen={menuOpen}
      />
    </div>
  )
}

export default Home