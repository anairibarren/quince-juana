import { Icon } from "@iconify/react"
//import fotoinicio2 from "../assets/fotoinicio2.jpeg"
import fotoinicio2 from "../assets/fotoinicio1.jpeg"


function Hero() {

  // SCROLL COUNTDOWN

  const scrollToCountdown = () => {

    const section = document.getElementById("countdown")

    if (!section) return

    const yOffset = -120

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset

    window.scrollTo({
      top: y,
      behavior: "smooth"
    })
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden mb-8"
    >

      {/* FOTO */}

      <img
        src={fotoinicio2}
        alt="Juana XV"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/35
        "
      />

      {/* CONTENIDO POR ENCIMA DE LA FOTO */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          w-full
          h-full
          px-8
          mt-20
        "
      >

        <div
          className="
            w-full
            max-w-4xl
            text-left
          "
        >

          {/* TITULO */}

          <h1
            id="hero-title"
            className="
              font-extrabold
              text-[40px]
              leading-[1.08]
              text-white
              mb-6            
              md:text-[64px]
            "
          >
            Un viaje muy especial comienza
          </h1>

          {/* PARRAFO */}

          <p
            className="
              text-[14px]
              leading-[1.8]
              font-medium
              text-white
              max-w-[520px]
              mb-8
            "
          >
            Te invito a celebrar una noche única.
            Será un momento lleno de magia,
            sueños y recuerdos inolvidables.
          </p>

          {/* BOTON */}

          <button
            onClick={scrollToCountdown}
            aria-label="Ir a la cuenta regresiva"
            className="
              inline-flex
              items-center
              justify-center
              gap-[8px]
              px-8
              py-3
              rounded-full
              bg-black
              text-white
              font-semibold
              text-[16px]
              w-full
              max-w-[300px]
            "
          >
            Despeguemos

            <Icon
              icon="mdi:airplane-takeoff"
              width="20"
            />
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero