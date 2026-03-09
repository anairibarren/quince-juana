import { Icon } from "@iconify/react"

function BackToTop({ menuOpen }) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (menuOpen) return null

  return (

    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className="
      fixed
      right-[32px]
      bottom-[32px]
      w-[44px]
      h-[44px]
      rounded-full
      bg-[#1e2f5d]
      text-white
      flex
      items-center
      justify-center
      cursor-pointer
      shadow-[0_18px_40px_#00000040]
      z-[999]
      "
    >
      <Icon icon="mdi:arrow-up" width="22" />
    </button>

  )
}

export default BackToTop