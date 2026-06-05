import type { FC } from "react"
import { ExternalLink, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import type { Project } from "@/types"

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "Plataforma full stack com carrinho, pagamentos via Stripe e painel admin. Constru&iacute;da com Next.js, Prisma e PostgreSQL.",
    image: "",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Manager API",
    description:
      "API RESTful para gerenciamento de tarefas com autentica&ccedil;&atilde;o JWT, testes automatizados e documenta&ccedil;&atilde;o Swagger.",
    image: "",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    repoUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Dashboard de previs&atilde;o do tempo com geolocaliza&ccedil;&atilde;o, gr&aacute;ficos interativos e dados em tempo real.",
    image: "",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Real-time Chat App",
    description:
      "Aplica&ccedil;&atilde;o de chat em tempo real com salas, mensagens privadas e indicadores de digita&ccedil;&atilde;o.",
    image: "",
    technologies: ["React", "Socket.io", "Node.js", "Redis"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
]

const Projects: FC = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meus <span className="text-primary">Projetos</span>
        </h2>
        <Separator className="mx-auto mt-4 w-12" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <ExternalLink className="size-3.5" />
                  Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                >
                  <Code2 className="size-3.5" />
                  C&oacute;digo
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
