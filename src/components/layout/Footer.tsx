import type { FC } from "react"

const Footer: FC = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Feito com carinho por Murita ❤️
        </p>
      </div>
    </footer>
  )
}

export default Footer
