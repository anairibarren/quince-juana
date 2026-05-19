import { useRef, useState } from "react"
import musica from "../assets/musica.mp3"
import { Icon } from "@iconify/react"

function Gate({ onEnter }) {
  const audioRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const handleEnter = async () => {
    const audio = audioRef.current
    if (!audio) return

    setLoading(true)

    try {
      audio.loop = true
      audio.volume = 0.5

      await audio.play()

      // 👉 inicia transición
      setFadeOut(true)

      // espera animación y entra
      setTimeout(() => {
        onEnter()
      }, 600)

    } catch (err) {
      console.log("Error audio", err)
      setLoading(false)
    }
  }

  return (
    <div
      className={`
        fixed inset-0 
        flex flex-col items-center justify-center 
        bg-[#0f172a] text-white
        text-center px-6
        transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <audio ref={audioRef}>
        <source src={musica} type="audio/mpeg" />
      </audio>

      <h1 className="text-3xl font-light mb-2">
        ✨ Invitación de Juana XV
      </h1>

      <p className="text-sm opacity-70 mb-8">
        Tocá para entrar con música
      </p>

      <button
        onClick={handleEnter}
        className="
          px-6 py-3
          rounded-full
          bg-white text-black
          font-medium
          flex items-center gap-2
          hover:scale-105 transition
        "
      >
        <Icon icon="mdi:music" width="20" />
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </div>
  )
}

export default Gate