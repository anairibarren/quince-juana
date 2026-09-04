import { useEffect, useRef, useState } from "react"

import calendar from "../assets/calendar.WEBP"
import pin from "../assets/pin.gif"
import diamond from "../assets/diamond.WEBP"

function InfoBlock({
  background,
  image,
  title,
  children,
  button = false,
  link,
  delay = 0,
  isVisible,
  light = false,
}) {

  return (

    <div
      className="
        w-full
        min-h-[350px]
        flex
        flex-col
        items-center
        justify-center
        text-center
      "
      style={{
        backgroundColor: background,
        fontFamily: "Montserrat, sans-serif",
      }}
    >

      {/* CONTENIDO CON ANIMACIÓN */}

      <div
        className={`
          flex
          flex-col
          items-center
          transition-all
          duration-700
          ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }
        `}
        style={{
          transitionDelay: `${delay}ms`,
        }}
      >

        {/* ICONO */}

        <img
          src={image}
          alt={title}
          className="
            w-[85px]
            h-[85px]
            object-contain
            mx-auto
            mb-8
          "
        />

        {/* TITULO */}

        <h3
          className={`
            text-[22px]
            font-semibold
            mb-2
            ${
              light
                ? "text-white"
                : "text-black"
            }
          `}
        >
          {title}
        </h3>

        {/* CONTENIDO */}

        <div
          className={`
            text-[16px]
            ${
              light
                ? "text-white"
                : "text-black"
            }
          `}
        >
          {children}
        </div>

        {/* BOTON */}

        {button && (

          <div className="flex flex-col items-center mt-6">

            <div
              className={`
                w-[100px]
                h-[3px]
                mb-6
                ${
                  light
                    ? "bg-white"
                    : "bg-black"
                }
              `}
            />

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4
                py-3
                bg-black
                text-white
                font-semibold
                text-md
                uppercase
              "
            >
              Cómo llegar
            </a>

          </div>

        )}

      </div>

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
        threshold: 0.2,
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
      className="
        w-full
        bg-white
        grid
        grid-cols-1
        md:grid-cols-3
      "
    >

      {/* CUANDO */}

      <InfoBlock
        background="#000000"
        image={calendar}
        title="¿CUÁNDO?"
        delay={0}
        isVisible={isVisible}
        light={true}
      >

        <p>
          10 DE OCTUBRE DE 2026
        </p>

        <p>
          | 21:00 HS |
        </p>

      </InfoBlock>


      {/* DONDE */}

      <InfoBlock
        background="#FFFFFF"
        image={pin}
        title="¿DÓNDE?"
        button={true}
        link="https://maps.app.goo.gl/icPzJ4cVTqQ5YLLa7"
        delay={150}
        isVisible={isVisible}
      >

        <p className="font-medium">
          H'OMARA EVENTOS
        </p>

      </InfoBlock>


      {/* DRESS CODE */}

        <InfoBlock
          background="#000000"
          image={diamond}
          title="DRESS CODE"
          delay={300}
          isVisible={isVisible}
          light={true}
        >

          <p className="font-semibold uppercase mb-5">
            Elegante sport
          </p>

          <div
            className="
              w-[100px]
              h-[3px]
              bg-white
              mx-auto
              my-5
              mb-4
            "
          />

          <p
            className="
              text-[14px]
              font-medium
              max-w-[280px]
              mx-auto
            "
          >
            Evitar los colores:
            <br />
            blanco, azul y plateado
          </p>

        </InfoBlock>

    </section>

  )

}

export default InfoCards