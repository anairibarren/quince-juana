import { useState, useEffect } from "react"

import gift from "../assets/gift.GIF"

function GiftModal({ isOpen, onClose }) {

  const alias = "Jua.Iribarren"

  const banco = "Mercado Pago"

  const [copied, setCopied] = useState(false)


  // COPIAR ALIAS

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(alias)

      setCopied(true)

      setTimeout(() => {

        setCopied(false)

      }, 2000)

    } catch (err) {

      console.error("Error al copiar")

    }

  }


  // CERRAR CON ESC

  useEffect(() => {

    const handleKey = (e) => {

      if (e.key === "Escape") {

        onClose()

      }

    }

    if (isOpen) {

      document.addEventListener("keydown", handleKey)

    }

    return () => {

      document.removeEventListener("keydown", handleKey)

    }

  }, [isOpen, onClose])


  // OCULTAR MUSIC PLAYER CUANDO LA MODAL ESTÁ ABIERTA

  useEffect(() => {

    if (isOpen) {

      document.body.classList.add("gift-modal-open")

    } else {

      document.body.classList.remove("gift-modal-open")

    }

    return () => {

      document.body.classList.remove("gift-modal-open")

    }

  }, [isOpen])


  if (!isOpen) return null


  return (

    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
        px-6
      "
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-[420px]
        "
      >

        {/* CUADRADO PRINCIPAL */}

        <div
          className="
            bg-black
            px-8
            py-10
            text-center
            shadow-2xl
          "
        >

          {/* CUADRO INTERNO */}

          <div
            className="
              border
              border-white
              px-6
              py-10
            "
          >

            {/* ICONO */}

            <img
              src={gift}
              alt="Regalo"
              className="
                w-[70px]
                h-[70px]
                object-contain
                mx-auto
                mb-7
              "
            />


            {/* TITULO */}

            <h3
              className="
                text-[22px]
                font-semibold
                text-white
                uppercase
                tracking-[0.18em]
                mb-8
              "
              style={{
                fontFamily: "Montserrat, sans-serif"
              }}
            >
              REGALO
            </h3>


            {/* DATOS */}

            <div
              className="
                space-y-7
                text-white
              "
              style={{
                fontFamily: "Montserrat, sans-serif"
              }}
            >

              {/* ALIAS */}

              <div>

                <p
                  className="
                    text-[12px]
                    uppercase
                    tracking-[0.15em]
                    text-white/70
                    mb-2
                  "
                >
                  ALIAS
                </p>

                <p
                  className="
                    text-[18px]
                    font-semibold
                  "
                >
                  {alias}
                </p>

              </div>


              {/* CUENTA */}

              <div>

                <p
                  className="
                    text-[12px]
                    uppercase
                    tracking-[0.15em]
                    text-white/70
                    mb-2
                  "
                >
                  CUENTA
                </p>

                <p
                  className="
                    text-[18px]
                    font-semibold
                  "
                >
                  {banco}
                </p>

              </div>

            </div>

          </div>


          {/* BOTON COPIAR */}

          <button
            onClick={handleCopy}
            className="
              mt-8
              w-full
              py-3
              bg-white
              text-black
              font-semibold
              text-sm
              uppercase
            "
          >
            {copied ? "Alias copiado" : "Copiar alias"}
          </button>


          {/* BOTON CERRAR */}

          <button
            onClick={onClose}
            className="
              mt-4
              w-full
              py-3
              border
              border-white
              text-white
              font-semibold
              text-sm
              uppercase
            "
          >
            Cerrar
          </button>

        </div>

      </div>

    </div>

  )

}


function GiftBlock() {

  const [isOpen, setIsOpen] = useState(false)

  return (

    <section
      id="gift"
      className="py-0 mb-8"
    >

      {/* ================================================= */}
      {/* FRASE — NO TOCAR */}
      {/* ================================================= */}

      <div
        className="
          bg-white
          py-16
          px-6
        "
      >

        <div
          className="
            max-w-4xl
            mx-auto
            flex
            flex-col
            items-center
            text-center
          "
        >

          {/* LINEA SUPERIOR */}

          <div
            className="
              w-[90px]
              h-[2px]
              bg-black
              rounded-full
              mb-8
            "
          />

          {/* TEXTO */}

          <p
            className="
              text-black
              text-[20px]
              md:text-[28px]
              leading-[1.8]
              tracking-[0.08em]
              uppercase
              max-w-3xl
            "
            style={{
              fontFamily: "Montserrat, sans-serif"
            }}
          >
            Hagamos que sea una noche{" "}
            <span className="font-extrabold">
              ¡inolvidable!
            </span>
          </p>

          {/* LINEA INFERIOR */}

          <div
            className="
              w-[90px]
              h-[2px]
              bg-black
              rounded-full
              mt-8
            "
          />

        </div>

      </div>


      {/* ================================================= */}
      {/* BLOQUE REGALO */}
      {/* ================================================= */}

      <div
        className="
          bg-black
          pt-14
          pb-20
          px-6
        "
      >

        <div
          className="
            max-w-2xl
            mx-auto
            text-center
            text-white
          "
          style={{
            fontFamily: "Montserrat, sans-serif"
          }}
        >

          {/* ICONO */}

          <img
            src={gift}
            alt="Regalo"
            className="
              w-[85px]
              h-[85px]
              object-contain
              mx-auto
              mb-8
            "
          />


          {/* TITULO */}

          <h2
            className="
              text-[28px]
              font-semibold
              uppercase
              tracking-[0.10em]
              mb-5
            "
          >
            REGALO
          </h2>


          {/* TEXTO */}

          <p
            className="
              text-[16px]
              max-w-[520px]
              mx-auto
            "
          >
            Nada es más importante que tu presencia, pero si deseas hacerme un presente puedes depositarlo en la siguiente cuenta.
          </p>


          {/* BOTON */}

          <button
            onClick={() => setIsOpen(true)}
            className="
              mt-10
              px-4
              py-3
              bg-white
              text-black
              uppercase
              font-semibold
            "
          >
            VER CUENTA
          </button>

        </div>

      </div>


      {/* MODAL */}

      <GiftModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </section>

  )

}

export default GiftBlock
