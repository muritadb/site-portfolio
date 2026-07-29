import type { FC } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Mylinks from "@/pages/Mylinks"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylinks" element={<Mylinks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
