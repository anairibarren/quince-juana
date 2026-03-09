import { useState } from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Countdown from "../components/Countdown"
import InfoCards from "../components/InfoCards"
import RSVP from "../components/RSVP"
import Gallery from "../components/Gallery"
import BackToTop from "../components/BackToTop"

function Home() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Hero />
      <Countdown />
      <InfoCards />
      <RSVP />
      <Gallery />

      <BackToTop menuOpen={menuOpen} />
    </>
  )
}

export default Home