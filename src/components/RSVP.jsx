import { Icon } from "@iconify/react"
import sobre from "../assets/rsvp.webp"

function RSVP() {

  const phone = "5492323512051"

  const message = encodeURIComponent(
  "Hola Juanita! Confirmo la asistencia a tu fiesta!.\n\nCantidad de personas:\n\nRestricción alimentaria:"
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (

    <section
      id="asistencia"
      className="
        bg-[#444b65]
        flex
        justify-center
        py-[50px]
        transition-all
        duration-700
      "
    >

      <div
        className="
          max-w-[900px]
          w-full
          px-6
          text-center
        "
      >

        {/* ANIMACION SOBRE */}

        <div className="flex justify-center mb-[30px]">

          <img
            src={sobre}
            alt="Confirmar asistencia"
            className="
              w-[120px]
              animate-bounce
              mt-8
            "
          />

        </div>

        {/* TITULO */}

        <h2
          className="
            text-[25px]
            font-semibold
            text-white
            leading-[1.15]
            uppercase
          "
          style={{
            fontFamily: "Montserrat, sans-serif"
          }}
        >
          Confirmá tu asistencia
        </h2>

        {/* LINEA */}

        <div
          className="
            w-[200px]
            h-[3px]
            bg-white
            mt-[14px]
            mb-[28px]
            mx-auto            
          "
        />

        {/* TEXTO */}

        <div
          className="
            text-[16px]
            leading-[1.5]
            text-white
            mb-[38px]
            px-4
          "
          style={{
            fontFamily: "Montserrat, sans-serif"
          }}
        >

          <p className="uppercase tracking-[0.08em]">
            Antes del 30 de septiembre 2026
          </p>

          <p className="text-sm mt-2">
            En caso de tener alguna restricción alimentaria, por favor informarlo al confirmar asistencia.
          </p>

        </div>

        {/* BOTON */}

        <div className="flex justify-center mb-10">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-[10px]
              text-[16px]
               bg-white
              text-[#444b65]
              uppercase
              font-bold
              px-9
              py-4
              cursor-pointer
            "
            style={{
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            Confirmar asistencia

            <Icon
              icon="mdi:arrow-right"
              width="20"
            />

          </a>

        </div>

      </div>

    </section>

  )

}

export default RSVP