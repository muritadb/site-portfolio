import type { FC } from "react"
import { ArrowDown, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-8 px-4 py-20 text-center"
    >
      <Avatar className="size-32">
        <AvatarImage src="https://avatars.githubusercontent.com/muritadb" alt="Murita photo" />
        <AvatarFallback>MUrita</AvatarFallback>
      </Avatar>

      <div className="space-y-3">
        <p className="text-sm font-medium tracking-widest text-primary uppercase">
          Software Engineer 
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Ol&aacute;, eu sou <span className="text-primary">Douglas Murita</span>
        </h1>
        <p className="mx-auto max-w-lg text-base text-muted-foreground sm:text-lg">
          Construo experi&ecirc;ncias digitais completas, do backend ao frontend.
          Especializado em React, Node.js e TypeScript.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a href="#projects" className={cn(buttonVariants({ size: "lg" }))}>
          <ArrowDown className="size-4" />
          Ver Projetos
        </a>
        <a
          href="#contact"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          <Download className="size-4" />
          Entrar em Contato
        </a>
      </div>
    </section>
  )
}

export default Hero
