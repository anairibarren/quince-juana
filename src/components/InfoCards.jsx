import { useEffect, useRef, useState } from "react"

import calendar from "../assets/calendar.webp"
import pin from "../assets/pin.gif"
import diamond from "../assets/diamond.webp"

function InfoBlock({
  background,
  textColor,
  image,
  title,
  children,
  showDivider = false,
  button = false,
  link
}) {
  return (
    <div
      className={`
        w-full
        rounded-[24px]
        px-8
        py-10
        flex
        flex-col
        items-center
        justify-center
        text-center
        shadow-[0_10px_30px_#00000012]
        transition
      `}
      style={{
        backgroundColor: background,
        color: textColor,
        fontFamily: "Montserrat, sans-serif"
      }}
    >
      {/* ICONO */}

      <img
        src={image}
        alt={title}
        className="
          w-[90px]
          h-[90px]
          md:w-[110px]
          md:h-[110px]
          object-contain
          mb-6
        "
      />

      {/* TITULO */}

      <h3
        className="
          text-[20px]
          md:text-[22px]
          font-semibold
          tracking-[0.2em]
          mb-4
        "
      >
        {title}
      </h3>

      {/* LINEA DIVISORA */}

      {showDivider && (
        <div
          className="
            w-[80px]
            h-[2px]
            my-4
          "
          style={{
            backgroundColor: textColor
          }}
        />
      )}

      {/* CONTENIDO */}

      <div
        className="
          text-[16px]
          md:text-[18px]
          leading-[1.7]
          space-y-2
        "
      >
        {children}
      </div>

      {/* BOTON */}

      {button && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            px-6
            py-3
            rounded-full
            text-sm
            font-semibold
            transition
            hover:scale-105
          "
          style={{
            backgroundColor:
              background === "#ffffff"
                ? "#1e2f5d"
                : "#ffffff",
            color:
              background === "#ffffff"
                ? "#ffffff"
                : "#1e2f5d"
          }}
        >
          COMO LLEGAR
        </a>
      )}
    </div>
  )
}

function InfoCards() {

  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="info"
      ref={sectionRef}
      className="py-6 flex justify-center"
    >

      <div
        className={`
          max-w-[1100px]
          w-full
          grid
          gap-6
          grid-cols-1
          md:grid-cols-3
          px-2
          ${isVisible ? "animate-slide-left" : "opacity-0"}
        `}
      >

        <h2 className="sr-only">
          Información del evento
        </h2>

        {/* BLOQUE 1 — CUANDO */}

        <InfoBlock
          background="#1e2f5d"
          textColor="#ffffff"
          image={calendar}
          title="¿CUÁNDO?"
        >
          <p>
            10 DE OCTUBRE DE 2026
          </p>

          <p>
            | 21:00hs |
          </p>
        </InfoBlock>

        {/* BLOQUE 2 — DONDE */}

        <InfoBlock
          background="#ffffff"
          textColor="#1e2f5d"
          image={pin}
          title="¿DÓNDE?"
          button={true}
          link="https://maps.app.goo.gl/icPzJ4cVTqQ5YLLa7"
        >
          <p>
            H'OMARA EVENTOS
          </p>
        </InfoBlock>

        {/* BLOQUE 3 — DRESS CODE */}

        <InfoBlock
          background="#1e2f5d"
          textColor="#ffffff"
          image={diamond}
          title="DRESS CODE"
          showDivider={true}
        >

          <div className="space-y-3">

            <p>
              ELEGANTE SPORT
            </p>

            <p
              className="
                text-[13px]
                md:text-[14px]
                text-white
                max-w-[340px]
                mx-auto
              "
            >
              Evitar los colores:
              blanco, azul y plateado
            </p>

          </div>

        </InfoBlock>

      </div>

    </section>
  )
}

export default InfoCards