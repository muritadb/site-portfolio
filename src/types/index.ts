export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  repoUrl?: string
}

export interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "tools"
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}
