import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Gate from "./pages/Gate"
import Home from "./pages/Home"

// Wrapper para poder usar navigate dentro del Gate
function GateWrapper() {
  const navigate = useNavigate()

  const handleEnter = () => {
    navigate("/home")
  }

  return <Gate onEnter={handleEnter} />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 Pantalla inicial */}
        <Route path="/" element={<GateWrapper />} />

        {/* 🎉 Invitación */}
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App