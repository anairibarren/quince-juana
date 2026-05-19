import { useEffect, useRef, useState } from "react"

function Countdown() {

  const eventDate = new Date("2026-10-10T00:00:00")

  const calculateTimeLeft = () => {

    const difference = eventDate - new Date()

    if (difference <= 0) {

      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
      }

    }

    return {

      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),

      horas: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutos: Math.floor(
        (difference / 1000 / 60) % 60
      ),

      segundos: Math.floor(
        (difference / 1000) % 60
      ),

    }

  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)

  // TIMER

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft(calculateTimeLeft())

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  // SCROLL REVEAL

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

    <section
      id="countdown"
      ref={sectionRef}
      className="pb-24"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* TITULO */}

        <div
          className={`
            flex
            flex-col
            items-center
            mb-14
            text-center
            ${isVisible ? "animate-slide-left" : "opacity-0"}
          `}
        >

          {/* MIS XV */}

          <span
            className="
              text-[40px]
              md:text-[24px]
              tracking-[0.35em]
              text-[#1e2f5d]
            "
            style={{
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            MIS XV
          </span>

          {/* NOMBRE */}

          <h2
            className="
              text-[100px]
              md:text-[72px]
              leading-none
              text-[#1e2f5d]
              mt-2
            "
            style={{
              fontFamily: "Allura"
            }}
          >
            Juana
          </h2>

        </div>

        {/* CONTADOR */}

        <div
          className="
            flex
            justify-center
            gap-2
            md:gap-8
            text-center
            text-white
            flex-wrap
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

    <div
      className="
        min-w-[80px]
        md:min-w-[110px]
        px-4
        py-4
        rounded-[16px]
        bg-[#1e2f5d]
        flex
        flex-col
        items-center
      "
    >

      <span
        className="
          text-4xl
          md:text-4xl
          font-bold
          text-white
        "
        style={{
          fontFamily: "Montserrat, sans-serif"
        }}
      >
        {number}
      </span>

      <span
        className="
          text-xs
          md:text-sm
          tracking-widest
          mt-2
          text-white
        "
        style={{
          fontFamily: "Montserrat, sans-serif"
        }}
      >
        {label}
      </span>

    </div>

  )
}

export default Countdown