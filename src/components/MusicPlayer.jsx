import { useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react"
import musica from "../assets/musica.mp3"

function MusicPlayer({ menuOpen }) {
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.5

    const tryAutoplay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
        setHasStarted(true)
      } catch (err) {
        console.log("Autoplay bloqueado por el navegador")
      }
    }

    tryAutoplay()

    const startOnFirstInteraction = async () => {
      if (hasStarted) return

      try {
        await audio.play()
        audio.muted = false
        setIsPlaying(true)
        setHasStarted(true)

        window.removeEventListener("click", startOnFirstInteraction)
        window.removeEventListener("touchstart", startOnFirstInteraction)
      } catch (err) {
        console.log("No se pudo iniciar audio con interacción")
      }
    }

    window.addEventListener("click", startOnFirstInteraction)
    window.addEventListener("touchstart", startOnFirstInteraction)

    return () => {
      window.removeEventListener("click", startOnFirstInteraction)
      window.removeEventListener("touchstart", startOnFirstInteraction)
    }
  }, [hasStarted])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch (err) {
      console.log("Error al reproducir audio")
    }
  }

  if (menuOpen) return null

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} preload="auto">
        <source src={musica} type="audio/mpeg" />
      </audio>

      {/* BOTÓN */}
      <button
        onClick={toggleMusic}
        aria-label="Controlar música"
        className="
          fixed
          right-[40px]
          bottom-[50px]
          w-[60px]
          h-[60px]
          rounded-full
          bg-[#1e2f5d]
          text-white
          flex
          items-center
          justify-center
          shadow-[0_18px_40px_#00000040]
          z-[999]
          transition
          hover:scale-110
        "
      >
        <Icon
          icon={
            isPlaying
              ? "mdi:pause"
              : "mdi:play"
          }
          width="30"
        />
      </button>
    </>
  )
}

export default MusicPlayer