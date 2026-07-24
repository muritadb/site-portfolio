import type { FC } from "react"
import { ArrowLeft, Code2, Mail, Briefcase, MessageCircle, Camera, Globe } from "lucide-react"
import { Link } from "react-router-dom"
import type { MyLink } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const links: MyLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/muritadb",
    icon: "Code2",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/douglas-barbosaa/",
    icon: "Briefcase",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/muritadev",
    icon: "Camera",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/5599991662979",
    icon: "MessageCircle",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:douglasb008@gmail.com",
    icon: "Mail",
  },
]

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Briefcase,
  Mail,
  MessageCircle,
  Camera,
  Globe,
}

const Mylinks: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/50 px-4 py-16">
      <Link
        to="/"
        className="absolute top-4 left-4 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Voltar para o portfólio
      </Link>

      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <Avatar className="size-28 ring-2 ring-border ring-offset-2 ring-offset-background">
          <AvatarImage src="https://avatars.githubusercontent.com/muritadb" alt="Murita photo" />
          <AvatarFallback>MUrita</AvatarFallback>
        </Avatar>

        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Douglas Murita</h1>
          <p className="text-sm text-muted-foreground">
            Software Engineer &bull; React, Node.js, TypeScript
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          {links.map((link) => {
            const Icon = iconMap[link.icon]
            const isExternal = link.url.startsWith("http") || link.url.startsWith("mailto")

            return (
              <a
                key={link.id}
                href={link.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-xl border bg-card px-5 py-4 text-sm font-medium shadow-sm transition-all hover:border-primary hover:bg-primary/5 hover:shadow-md"
              >
                <Icon className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Murita
        </p>
      </div>
    </div>
  )
}

export default Mylinks
