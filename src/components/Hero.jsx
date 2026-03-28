import { Icon } from "@iconify/react"
import videoHero from "../assets/hero-video.mp4"

function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
      relative
      overflow-hidden
      min-h-[90vh]
      flex
      items-center
      justify-center
      bg-white
      "
    >

      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      >
        <source src={videoHero} type="video/mp4" />
      </video>

      {/* OVERLAY SUAVE PARA LEGIBILIDAD */}
      <div
        className="
        absolute
        inset-0
        bg-white/70
        "
      />

      {/* CONTENIDO */}
      <div className="relative max-w-6xl mx-auto px-6 w-full">

        {/* TITULO */}
        <h1
          id="hero-title"
          className="
          font-extrabold
          text-[42px]
          leading-[1.08]
          text-[#1e2f5d]
          mb-6
          mr-12
          md:text-[64px]
          "
        >
          Un viaje muy especial comienza
        </h1>

        {/* PARRAFO */}
        <p
          className="
          text-[16px]
          leading-[1.8]
          font-medium
          text-[#6b7280]
          max-w-[520px]
          mb-8
          "
        >
          Te invito a celebrar una noche única.
          Será un momento lleno de magia,
          sueños y recuerdos inolvidables.
        </p>

        {/* BOTON */}
        <a
          href="#countdown"
          aria-label="Ir a la cuenta regresiva"
          className="
          inline-flex
          items-center
          justify-center
          gap-[10px]
          px-8
          py-3
          rounded-full
          bg-[#1e2f5d]
          text-white
          font-semibold
          text-[17px]
          w-full
          max-w-[340px]
          transition
          hover:scale-105
          "
        >
          Despeguemos

          <Icon
            icon="mdi:airplane-takeoff"
            width="20"
          />
        </a>

      </div>

    </section>
  )
}

export default Hero