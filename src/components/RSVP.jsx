import { Icon } from "@iconify/react"
import sobre from "../assets/rsvp.gif"

function RSVP() {

  const phone = "5492323512051"

  const message = encodeURIComponent(
    "Hola Juanita! Confirmo la asistencia a tu fiesta!. Cantidad de personas:"
  )

  const whatsappLink = `https://wa.me/${phone}?text=${message}`

  return (

    <section
      id="asistencia"
      className="
      bg-white
      flex justify-center
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
            "
          />

        </div>

        {/* TITULO */}

        <h2
          className="
          text-[36px]
          font-extrabold
          text-[#1e2f5d]
          leading-[1.15]
          uppercase
          "
        >
          Confirmá tu asistencia
        </h2>

        {/* LINEA */}

        <div
          className="
          w-[200px]
          h-[6px]
          rounded-full
          bg-[#a0b8e1]
          mt-[14px]
          mb-[28px]
          mx-auto
          "
        />

        {/* FECHA */}

        <p
          className="
          text-[16px]
          leading-[1.8]
          font-light
          text-[#8f8f99]
          mb-[32px]
          "
        >
          ANTES DEL 30 DE SEPTIEMBRE 2026
        </p>

        {/* BOTON */}

        <div className="flex justify-center">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            gap-[10px]
            px-[28px]
            py-[12px]
            rounded-full
            bg-[#1e2f5d]
            text-white
            text-[17px]
            font-regular
            cursor-pointer
            no-underline
            "
          >
            Confirmar asistencia
            <Icon icon="mdi:arrow-right" width="20" />
          </a>

        </div>

      </div>

    </section>

  )

}

export default RSVP