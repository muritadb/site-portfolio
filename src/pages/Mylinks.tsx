import type { FC } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import MylinksSection from "@/components/sections/Mylinks"

const Mylinks: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <MylinksSection />
      </main>
      <Footer />
    </div>
  )
}

export default Mylinks
