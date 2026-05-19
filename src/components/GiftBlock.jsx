import { useState, useEffect } from "react"

import gift from "../assets/gift.GIF"

function GiftModal({ isOpen, onClose }) {

  const alias = "jua.iri"
  const banco = "Mercado Pago"

  const [copied, setCopied] = useState(false)

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

  // cerrar con ESC

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
        bg-black/60
        backdrop-blur-sm
        px-4
      "
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px]"
      >

        {/* CUADRADO PRINCIPAL */}

        <div
          className="
            bg-[#1e2f5d]
            rounded-[4px]
            px-8
            py-10
            text-center
            shadow-xl
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

            {/* GIFT */}

            <img
              src={gift}
              alt="Regalo"
              className="
                w-[70px]
                h-[70px]
                object-contain
                mx-auto
                mb-6
              "
            />

            {/* TITULO */}

            <h3
              className="
                text-[22px]
                font-semibold
                text-white
                tracking-[0.2em]
                mb-6
              "
              style={{
                fontFamily: "Montserrat, sans-serif"
              }}
            >
              REGALO
            </h3>

            {/* DATOS */}

            <div className="space-y-6">

              <div>

                <p className="text-sm text-white/80">
                  ALIAS:
                </p>

                <p className="text-lg text-white">
                  {alias}
                </p>

              </div>

              <div>

                <p className="text-sm text-white/80">
                  CUENTA:
                </p>

                <p className="text-lg text-white">
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
              text-[#1e2f5d]
              font-semibold
              text-md
              rounded-full
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
              text-md
              rounded-full
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
      className="
        py-6
        flex
        justify-center
      "
    >

      <div
        className="
          max-w-[700px]
          w-full
          mx-auto
          px-6
          text-center
          py-12
          shadow-[0_10px_30px_#00000012]
        "
        style={{
          backgroundColor: "#1e2f5d",
          color: "#ffffff",
          fontFamily: "Montserrat, sans-serif"
        }}
      >

        {/* ICONO */}

        <img
          src={gift}
          alt="Regalo"
          className="
            w-[90px]
            h-[90px]
            md:w-[110px]
            md:h-[110px]
            object-contain
            mx-auto
            mb-6
          "
        />

        {/* TITULO */}

        <h2
          className="
            text-[22px]
            md:text-[24px]
            font-semibold
            tracking-[0.2em]
            mb-6
          "
        >
          REGALO
        </h2>

        {/* TEXTO */}

        <p
          className="
            text-[15px]
            md:text-[16px]
            leading-[1.8]
            max-w-[520px]
            mx-auto
          "
        >
          NADA ES MÁS IMPORTANTE QUE TU PRESENCIA,
          PERO SI DESEAS HACERME UN REGALO
          SERÁ RECIBIDO CON MUCHO AMOR,
          TAMBIÉN PUEDES HACERLO
          EN LA SIGUIENTE CUENTA.
        </p>

        {/* BOTON */}

        <button
          onClick={() => setIsOpen(true)}
          className="
            mt-8
            px-8
            py-3
            rounded-full
            bg-white
            text-[#1e2f5d]
            font-semibold
            text-sm
            transition
            hover:scale-105
          "
        >
          VER CUENTA
        </button>

      </div>

      <GiftModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </section>
  )
}

export default GiftBlock