import type { FC } from "react"
import { Send } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact: FC = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Entre em <span className="text-primary">Contato</span>
        </h2>
        <Separator className="mx-auto mt-4 w-12" />
      </div>

      <div className="mx-auto max-w-md space-y-6">
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Input type="text" placeholder="Seu nome" required />
          </div>
          <div className="space-y-2">
            <Input type="email" placeholder="Seu email" required />
          </div>
          <div className="space-y-2">
            <Textarea placeholder="Sua mensagem" rows={5} required />
          </div>
          <Button type="submit" className="w-full">
            <Send className="size-4" />
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
