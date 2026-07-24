import type { FC } from "react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Globe,
  Server,
  Database,
  GitBranch,
  Container,
  Cloud,
  Terminal,
  Workflow
} from "lucide-react"

const skills = [
  { name: "React / Next.js", category: "frontend" as const, icon: Globe },
  { name: "TypeScript", category: "frontend" as const, icon: Code2 },
  { name: "Tailwind CSS", category: "frontend" as const, icon: Code2 },
  { name: "Node.js", category: "backend" as const, icon: Server },
  { name: "Express", category: "backend" as const, icon: Server },
  { name: "PostgreSQL", category: "backend" as const, icon: Database },
  { name: "MongoDB", category: "backend" as const, icon: Database },
  { name: "Docker", category: "tools" as const, icon: Container },
  { name: "AWS", category: "tools" as const, icon: Cloud },
  { name: "Git", category: "tools" as const, icon: GitBranch },
  { name: "Linux", category: "tools" as const, icon: Terminal },
  { name: "N8N", category: "tools" as const, icon: Workflow },
  { name: "GraphQL", category: "backend" as const, icon: Server },
]

const SkillBadge: FC<{ skill: (typeof skills)[number] }> = ({ skill }) => (
  <div className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50">
    <skill.icon className="size-5 text-primary" />
    <span className="text-sm font-medium">{skill.name}</span>
  </div>
)

const Skills: FC = () => {
  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "tools", label: "Ferramentas" },
  ] as const

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Minhas <span className="text-primary">Skills</span>
        </h2>
        <Separator className="mx-auto mt-4 w-12" />
      </div>

      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat.key} className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{cat.label}</Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills
                .filter((s) => s.category === cat.key)
                .map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
