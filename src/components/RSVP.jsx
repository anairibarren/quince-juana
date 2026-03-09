import { Icon } from "@iconify/react"

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
      flex justify-center
      py-[72px]
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
        md:text-left
        "
      >

        {/* TITULO */}
        <h2
          className="
          text-[36px]
          font-extrabold
          text-[#1e2f5d]
          leading-[1.15]
          "
        >
          Confirmá tu asistencia
        </h2>

        {/* LINEA */}
        <div
          className="
          w-[120px]
          h-[6px]
          rounded-full
          bg-[#a0b8e1]
          mt-[14px]
          mb-[28px]
          mx-auto
          md:mx-0
          "
        />

        {/* TEXTO */}
        <p
          className="
          max-w-[680px]
          text-[16px]
          leading-[1.8]
          font-light
          text-[#8f8f99]
          mx-auto
          md:mx-0
          "
        >
          Me encantaría poder compartir esta noche tan especial
          con vos. Confirmá tu asistencia para que podamos celebrar juntos y disfrutar de una fiesta inolvidable.
        </p>

        {/* BOTON */}
        <div className="flex justify-center md:justify-start mt-[32px]">

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
            font-semibold
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