import { useState } from "react"
import { Icon } from "@iconify/react"

function FlipCard({ title, highlight, description, backTitle, backContent, link }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flex justify-center py-8">

      <div className="w-full perspective">

        <div className={`flip-card w-full h-[420px] ${flipped ? "flipped" : ""}`}>

          {/* FRONT */}
          <div className="flip-face bg-white rounded-[24px] p-[5px_32px_24px] flex flex-col justify-between shadow-md">

            <h3
              className="
              text-[33px]
              font-extrabold
              leading-[1.25]
              text-[#1e2f5d]
              mt-8
              "
            >
              {title} <span className="text-[#a0b8e1]">{highlight}</span>
            </h3>

            <div className="flex items-end justify-between mt-2">

              <p
                className="
                max-w-[300px]
                text-[17px]
                leading-[1.6]
                font-light
                text-[#8f8f99]
                mb-5
                "
              >
                {description}
              </p>

              <button
                aria-label="Ver más información"
                onClick={() => setFlipped(true)}
                className="
                w-[44px] h-[44px]
                rounded-full
                bg-[#1e2f5d]
                text-white
                flex items-center justify-center
                mb-5
                "
              >
                <Icon icon="mdi:arrow-right" width="22" />
              </button>

            </div>

          </div>


          {/* BACK */}
          <div className="flip-face flip-back bg-[#1e2f5d] text-white rounded-[24px] p-[5px_32px_24px] flex flex-col justify-between">

            <div>

              <h4
                className="
                text-[24px]
                font-extrabold
                mb-4
                mt-5
                "
              >
                {backTitle}
              </h4>

              <p className="leading-relaxed">
                {backContent}
              </p>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-block
                  mt-5
                  px-4
                  py-2
                  rounded-full
                  bg-white
                  text-[#1e2f5d]
                  font-semibold
                  text-sm
                  "
                >
                  Ver ubicación
                </a>
              )}

            </div>

            {/* BOTON VOLVER */}
            <div className="flex justify-end mt-6">

              <button
                aria-label="Volver a la tarjeta"
                onClick={() => setFlipped(false)}
                className="
                w-[44px] h-[44px]
                rounded-full
                bg-white
                text-[#1e2f5d]
                flex items-center justify-center
                "
              >
                <Icon icon="mdi:arrow-left" width="22" />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}


function InfoCards() {
  return (
    <section id="info" className="py-16 flex justify-center">

      <div
        className="
        max-w-[1100px]
        w-full
        grid
        gap-6
        grid-cols-1
        md:grid-cols-3
        px-5
        "
      >

        {/* TITULO SR ONLY */}
        <h2 className="sr-only">
          Sobre el evento
        </h2>


        <FlipCard
          title="Cómo llegar al"
          highlight="evento"
          description="Encontrá aquí el salón y el mapa para llegar fácilmente."
          backTitle="Cómo llegar"
          backContent="El cumpleaños será en H'Omara Eventos."
          link="https://maps.app.goo.gl/icPzJ4cVTqQ5YLLa7"
        />

        <FlipCard
          title="Cómo ir"
          highlight="vestidos"
          description="Descubrí el estilo pensado para esta noche especial."
          backTitle="Vestimenta"
          backContent="La vestimenta será Elegante Sport. Prepará tu mejor look para celebrar esta noche tan especial."
        />

        <FlipCard
          title="¿Querés hacer un"
          highlight="regalo?"
          description="Algunas palabras sobre los regalos para este día."
          backTitle="Regalos"
          backContent="Tu presencia es lo más importante. Pero si deseás hacer un obsequio, habrá una urna en el evento."
        />

      </div>

    </section>
  )
}

export default InfoCards