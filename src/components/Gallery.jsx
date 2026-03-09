import { useState } from "react"
import { Icon } from "@iconify/react"

import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"
import foto4 from "../assets/foto4.jpg"
import foto5 from "../assets/foto5.jpg"
import foto6 from "../assets/foto6.jpg"

function Gallery() {

  const photos = [foto1, foto2, foto3, foto4, foto5, foto6]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % photos.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (

    <section id="galeria" className="py-24 flex justify-center">

      <div className="max-w-4xl w-full px-6">

        {/* TITULO ACCESIBLE */}
        <h2 className="sr-only">
          Fotos del book
        </h2>


        {/* CAROUSEL */}
        <div className="relative">

          {/* FOTO */}
          <div className="overflow-hidden rounded-2xl">

            <img
              src={photos[current]}
              alt={`Foto del book ${current + 1}`}
              className="
              w-full
              h-[320px]
              md:h-[420px]
              object-cover
              transition-all
              duration-500
              "
            />

          </div>


          {/* FLECHA IZQUIERDA */}
          <button
            onClick={prevSlide}
            aria-label="Foto anterior"
            className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-white/80
            text-[#1e2f5d]
            flex
            items-center
            justify-center
            shadow
            backdrop-blur
            "
          >
            <Icon icon="mdi:chevron-left" width="24" />
          </button>


          {/* FLECHA DERECHA */}
          <button
            onClick={nextSlide}
            aria-label="Foto siguiente"
            className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-white/80
            text-[#1e2f5d]
            flex
            items-center
            justify-center
            shadow
            backdrop-blur
            "
          >
            <Icon icon="mdi:chevron-right" width="24" />
          </button>

        </div>


        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-6">

          {photos.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Ir a foto ${index + 1}`}
              className={`
                w-2
                h-2
                rounded-full
                transition
                ${current === index ? "bg-[#1e2f5d]" : "bg-gray-300"}
              `}
            />

          ))}

        </div>

      </div>

    </section>

  )
}

export default Gallery