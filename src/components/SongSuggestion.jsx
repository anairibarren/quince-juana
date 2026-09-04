import { useState } from "react"

import suggestion from "../assets/suggestion.webp"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyZ7l9cAgmVD9lXTcdWngIX6LgZ4iV7doiZEQBY9CbWgDRHmiYezX6POhOBJAXxwjKo/exec"


function SongSuggestion() {

  const [song, setSong] = useState("")
  const [artist, setArtist] = useState("")

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)


  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)
    setSuccess(false)

    try {

      const formData = new FormData()

      formData.append("song", song)
      formData.append("artist", artist)


      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })


      // LIMPIAR FORMULARIO

      setSong("")
      setArtist("")


      // MOSTRAR MENSAJE DE ÉXITO

      setSuccess(true)


      setTimeout(() => {
        setSuccess(false)
      }, 4000)


    } catch (error) {

      console.error(error)

      alert(
        "Ocurrió un error al enviar la sugerencia."
      )

    } finally {

      setLoading(false)

    }

  }


  return (

    <section
      id="song-suggestion"
      className="
        py-8
        px-6
        bg-white
      "
    >

      <div
        className="
          max-w-2xl
          mx-auto
          text-center
        "
        style={{
          fontFamily: "Montserrat, sans-serif"
        }}
      >

        {/* ICONO */}

        <img
          src={suggestion}
          alt="Música"
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
            md:text-[34px]
            font-semibold
            uppercase
            text-black
          "
        >
          ¿Qué canción no puede faltar?
        </h2>


        {/* LINEA */}

        <div
          className="
            w-40
            h-[3px]
            bg-black
            mx-auto
            my-5
          "
        />


        {/* TEXTO */}

        <p
          className="
            text-[16px]
            md:text-[17px]
            leading-8
            text-black
            mb-10
          "
        >
          Ayudame a crear la playlist perfecta
          para esa noche.
          <br />
          ¡Contame qué canción no puede faltar!
        </p>


        {/* FORMULARIO */}

        <form
          onSubmit={handleSubmit}
          className="
            flex
            flex-col
            gap-5
          "
        >

          {/* CANCION */}

          <input
            type="text"
            placeholder="Canción"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            required
            className="
              w-full
              border
              border-black
              px-4
              py-3
              text-black
              placeholder:text-gray-500
              outline-none
              focus:ring-0
            "
          />


          {/* ARTISTA */}

          <input
            type="text"
            placeholder="Artista"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
            className="
              w-full
              border
              border-black
              px-4
              py-3
              text-black
              placeholder:text-gray-500
              outline-none
              focus:ring-0
            "
          />


          {/* BOTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              bg-black
              text-white
              px-4
              py-3
              uppercase
              font-semibold
            "
          >
            {loading
              ? "Enviando..."
              : "Enviar sugerencia"
            }
          </button>


          {/* MENSAJE DE EXITO */}

          <div
            className={`
              mt-2
              overflow-hidden
              transition-all
              duration-500
              ${
                success
                  ? "max-h-24 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }
            `}
          >

            <div
              className="
                border
                border-black
                bg-black
                text-white
                py-3
                px-4
                text-center
                uppercase
                text-sm
                tracking-[0.05em]
              "
            >
              ¡Gracias! Ahora queda disfrutar.
            </div>

          </div>

        </form>

      </div>

    </section>

  )

}

export default SongSuggestion