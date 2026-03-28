import { useEffect, useRef, useState } from "react"

function Countdown() {

  const eventDate = new Date("2026-10-10T00:00:00")

  const calculateTimeLeft = () => {
    const difference = eventDate - new Date()

    if (difference <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 }
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  /* SCROLL REVEAL */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.3
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section >

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          {/* TITULO */}

          <h2
            id="countdown-title"
            className={`
              font-extrabold
              text-[42px]
              md:text-[52px]
              leading-[1.08]
              text-[#1e2f5d]
              mb-6
              ${isVisible ? "animate-slide-left" : "opacity-0"}
            `}
          >
            Te invito a celebrar conmigo
          </h2>

          {/* TEXTO */}

          <p
            className={`
              text-[16px]
              leading-[1.8]
              font-light
              text-[#8f8f99]
              max-w-[520px]
              mx-auto
              mb-16
              ${isVisible ? "animate-slide-right" : "opacity-0"}
            `}
          >
            Falta muy poco para iniciar un viaje lleno de emociones
            donde comienza la noche más soñada.
          </p>

        </div>

        {/* CONTADOR */}

        <div
          className="
          flex
          justify-center
          gap-8
          md:gap-14
          text-center
          text-[#1e2f5d]
          "
          aria-live="polite"
        >

          <TimeBox number={timeLeft.dias} label="DÍAS" />
          <TimeBox number={timeLeft.horas} label="HORAS" />
          <TimeBox number={timeLeft.minutos} label="MINUTOS" />
          <TimeBox number={timeLeft.segundos} label="SEGUNDOS" />

        </div>

      </div>

    </section>
  )
}

function TimeBox({ number, label }) {
  return (
    <div className="flex flex-col items-center">

      <span
        className="
        text-4xl
        md:text-6xl
        font-extrabold
        "
      >
        {number}
      </span>

      <span
        className="
        text-xs
        md:text-sm
        tracking-widest
        font-semibold
        mt-2
        "
      >
        {label}
      </span>

    </div>
  )
}

export default Countdown