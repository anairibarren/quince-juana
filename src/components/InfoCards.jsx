import { useState } from "react"
import { Icon } from "@iconify/react"

import mapamundi from "../assets/mapamundi.png"
import dresscode from "../assets/dresscode.png"
import dresscodeBlanco from "../assets/dresscode-blanco.png"
import regalo from "../assets/regalo.png"


function FlipCard({
  title,
  highlight,
  description,
  backTitle,
  backContent,
  link,
  image,
  backImage
}) {
  const [flipped, setFlipped] = useState(false)

  // tamaños dinámicos según imagen

  const imageSize =
    image === mapamundi
      ? "w-[150px] h-[150px] md:w-[170px] md:h-[170px]"
      : image === regalo
      ? "w-[90px] h-[90px] md:w-[100px] md:h-[100px]"
      : "w-[120px] h-[120px] md:w-[150px] md:h-[150px]"

  return (
    <div className="flex justify-center py-8">

      <div className="w-full perspective">

        <div className={`flip-card w-full h-[480px] ${flipped ? "flipped" : ""}`}>

          {/* FRONT */}

          <div className="flip-face bg-white rounded-[24px] px-[32px] py-[24px] flex flex-col justify-between shadow-lg">

            <h3
              className="
              text-[28px]
              md:text-[30px]
              font-bold
              leading-[1.25]
              text-[#1e2f5d]
              mt-2
              "
            >
              {title} <span className="text-[#a0b8e1]">{highlight}</span>
            </h3>

            {/* IMAGEN */}

            <div className="flex justify-center items-center">

              <img
                src={image}
                alt={highlight}
                className={`${imageSize} object-contain`}
              />

            </div>

            {/* TEXTO + BOTON */}

            <div className="flex items-center justify-between gap-4">

              <p
                className="
                max-w-[240px]
                text-[15px]
                font-light
                text-[#8f8f99]
                leading-[1.6]
                "
              >
                {description}
              </p>

              <button
                aria-label="Ver más información"
                onClick={() => setFlipped(true)}
                className="
                w-[44px]
                h-[44px]
                rounded-full
                bg-[#1e2f5d]
                text-white
                flex items-center justify-center
                shrink-0
                hover:scale-105
                transition
                "
              >
                <Icon icon="mdi:arrow-right" width="22" />
              </button>

            </div>

          </div>


          {/* BACK */}

          <div className="flip-face flip-back bg-[#1e2f5d] text-white rounded-[24px] px-[28px] py-[24px] flex flex-col justify-between">

            <div>

              <h4
                className="
                text-[22px]
                md:text-[24px]
                font-extrabold
                mb-4
                mt-2
                "
              >
                {backTitle}
              </h4>

              <div
                className="
                leading-relaxed
                text-[15px]
                "
                dangerouslySetInnerHTML={{ __html: backContent }}
              />

              {/* IMAGEN BACK */}

              {backImage && (
                <div className="flex justify-center mt-6">

                  <img
                    src={backImage}
                    alt="detalle"
                    className="
                    w-[120px]
                    h-[120px]
                    object-contain
                    "
                  />

                </div>
              )}

              {/* MAPA */}

              {link && (
                <div className="mt-2 space-y-4">

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-block
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

                  <div className="w-full h-[180px] rounded-xl overflow-hidden shadow-md">

                    <iframe
                      src="https://www.google.com/maps?q=H%27Omara%20Eventos&output=embed"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title="Mapa del evento"
                    />

                  </div>

                </div>
              )}

            </div>

            {/* BOTON VOLVER */}

            <div className="flex justify-end">

              <button
                aria-label="Volver a la tarjeta"
                onClick={() => setFlipped(false)}
                className="
                w-[44px]
                h-[44px]
                mt-2
                rounded-full
                bg-white
                text-[#1e2f5d]
                flex items-center justify-center
                hover:scale-105
                transition
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

        <h2 className="sr-only">
          Sobre el evento
        </h2>

        {/* UBICACION */}

        <FlipCard
          title="Cómo llegar al"
          highlight="evento"
          description="Encontrá aquí el salón y el mapa para llegar fácilmente."
          backTitle="Lugar de la fiesta"
          backContent="
          El cumpleaños será en
          <strong style='font-weight:700; color:#a0b8e1;'>
          H'Omara Eventos
          </strong>.
          Te espero para vivir una noche inolvidable.
          "
          link="https://maps.app.goo.gl/icPzJ4cVTqQ5YLLa7"
          image={mapamundi}
        />

        {/* DRESS CODE */}

        <FlipCard
          title="Dress"
          highlight="Code"
          description="Descubrí el estilo pensado para esta noche especial."
          backTitle="Dress Code"
          backContent="
          La vestimenta será
          <span style='font-weight:700; color:#a0b8e1;'>
          Elegante Sport
          </span>.
          Prepará tu mejor look para celebrar esta noche tan especial.
          "
          image={dresscode}
          backImage={dresscodeBlanco}
        />

        {/* REGALO */}

        <FlipCard
          title="Ideas de"
          highlight="regalo"
          description="Descubrí las opciones que pensé."
          backTitle="Ideas de regalo"
          backContent="
          Si deseás tener un detalle,
          habrá una
          <strong style='font-weight:700; color:#a0b8e1;'>
          urna en el evento
          </strong>
          o podés hacerlo por transferencia.<br/><br/>

          Alias:<br/>
          <strong style='font-weight:700; color:#a0b8e1; text:12px'>jua.iri</strong>
          "
          image={regalo}
        />

      </div>

    </section>
  )
}

export default InfoCards