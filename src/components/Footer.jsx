import foto from "../assets/footer-photo.jpg"

function Footer() {
  return (

    <footer className="w-full text-center">

      {/* IMAGEN FULL WIDTH */}

      <img
        src={foto}
        alt="Juana"
        className="
        w-full
        h-auto
        object-cover
        "
      />

      {/* TEXTO */}

      <div className="py-[40px] bg-white">

        <p
          className="
          text-[25px]
              md:text-[24px]
              text-[#1e2f5d]
          "
          style={{
            fontFamily: "Montserrat"
          }}
        >
          Te espero
        </p>

        <h3
          className="
          text-[100px]
              md:text-[72px]
              leading-none
              text-[#1e2f5d]
              mb-2
          "
          style={{
            fontFamily: "Allura"
          }}
        >
          Juana
        </h3>

      </div>

    </footer>

  )
}

export default Footer