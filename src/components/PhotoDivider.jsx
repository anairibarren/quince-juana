import photo from "../assets/fotodivider.JPG"

function Photo() {
  return (
    <section className="w-full">
      <img
        src={photo}
        alt="Juana XV"
        className="
          w-full
          h-auto
          object-cover
          block
        "
      />
    </section>
  )
}

export default Photo