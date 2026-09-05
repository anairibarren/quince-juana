import { useEffect, useState } from "react"

import foto1 from "../assets/foto1.jpg"
import foto6 from "../assets/foto6.jpg"
import foto3 from "../assets/foto3.jpg"
import foto4 from "../assets/foto4.jpg"
import foto5 from "../assets/foto5.jpg"

function Gallery() {

  const photos = [
    foto1,
    foto6,
    foto3,
    foto4,
    foto5
  ]

  const [current, setCurrent] = useState(0)

  // AUTO SLIDE

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % photos.length)

    }, 1500)

    return () => clearInterval(interval)

  }, [photos.length])


  return (

    <section
      id="galeria"
      className="m-0 p-0"
    >

      <div
        className="
          w-full
          overflow-hidden
          m-0
          p-0
        "
      >

        <img
          src={photos[current]}
          alt={`Foto del book ${current + 1}`}
          className="
            block
            w-full
            h-auto
            object-cover
            m-0
            p-0
            transition-opacity
            duration-[1500ms]
          "
        />

      </div>

    </section>

  )

}

export default Gallery