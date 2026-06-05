import type { FC } from "react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const About: FC = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Sobre <span className="text-primary">Mim</span>
        </h2>
        <Separator className="mx-auto mt-4 w-12" />
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <p>
            Sou um desenvolvedor full stack apaixonado por criar
            solu&ccedil;&otilde;es que unem performance e design. Com mais de 5
            anos de experi&ecirc;ncia, j&aacute; trabalhei em startups e
            empresas de grande porte.
          </p>
          <p>
            Minha stack principal inclui React, Node.js, TypeScript e PostgreSQL.
            Gosto de transformar ideias em produtos reais, do prot&oacute;tipo
            ao deploy.
          </p>
          <p>
            Quando n&atilde;o estou codando, voc&ecirc; me encontra explorando
            novas tecnologias, contribuindo com open source ou jogando
            videogame.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Principais Tecnologias</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">Docker</Badge>
            <Badge variant="outline">AWS</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
