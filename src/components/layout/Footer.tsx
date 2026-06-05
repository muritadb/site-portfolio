import { Code2, Mail, Briefcase } from "lucide-react"
import type { SocialLink } from "@/types"
import type { FC } from "react"

const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "Code2" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Briefcase" },
  { name: "Email", url: "mailto:douglasb008@gmail.com", icon: "Mail" },
]

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Briefcase,
  Mail,
}

const Footer: FC = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Feito com carinho por Murita ❤️
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
