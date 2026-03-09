import { Icon } from "@iconify/react"

function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="min-h-[90vh] flex items-center justify-center bg-[#f5f5f5]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full text-center md:text-left">

        {/* TITULO */}
        <h1
          id="hero-title"
          className="
          font-extrabold
          text-[45px]
          leading-[1.08]
          text-[#1e2f5d]
          mb-6
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
          font-light
          text-[#8f8f99]
          max-w-[520px]
          mx-auto
          md:mx-0
          mb-7
          "
        >
          Te invito a celebrar una noche única. Será un momento lleno de magia, sueños y recuerdos inolvidables.
        </p>

        {/* BOTON CTA */}
        <a
          href="#countdown"
          aria-label="Explorar información del evento"
          className="
          inline-flex
          items-center
          justify-center
          gap-[10px]
          px-7
          py-3
          rounded-full
          bg-[#1e2f5d]
          text-white
          font-semibold
          text-[17px]
          w-full
          max-w-[340px]
          "
        >
          Explorar
          <Icon icon="mdi:arrow-right" width="20" />
        </a>

      </div>
    </section>
  )
}

export default Hero