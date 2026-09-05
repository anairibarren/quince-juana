import foto from "../assets/footer-photo.jpg"
import avion from "../assets/avion.webp"

function Footer() {

  return (

    <footer className="w-full text-center">

      {/* IMAGEN FULL WIDTH */}

      <img
        src={foto}
        alt="Juana"
        className="mb-4"
      />

      {/* CONTENIDO */}

      <div
        className="
          mb-14
          bg-white
          flex
          flex-col
          items-center
          justify-center
        "
      >

        {/* AVION */}

        <img
          src={avion}
          alt="Avión"
          className="
            w-[90px]
            md:w-[110px]
            object-contain
            mb-2
          "
        />

        {/* TEXTO */}

        <h2
          className="text-[40px] uppercase text-black"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Te espero
        </h2>

        <p
          className="mt-3 uppercase tracking-[0.35em] text-black text-[14px] md:text-[14px]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          10 · OCTUBRE · 2026
        </p>

      </div>

    </footer>

  )

}

export default Footer