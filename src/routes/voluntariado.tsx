import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "./quem-somos";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import img from "@/assets/voluntariado-ajuda.jpg";

export const Route = createFileRoute("/voluntariado")({
  head: () => ({
    meta: [
      { title: "Ser Voluntário — O Ninho da Mariazinha" },
      { name: "description", content: "Junte-se à equipa de voluntários do Ninho da Mariazinha em Coimbra. Distribuição de refeições, eventos, comunicação e mais." },
      { property: "og:title", content: "Ser Voluntário" },
      { property: "og:description", content: "Doe o seu tempo. Faça parte desta família." },
      { property: "og:url", content: "/voluntariado" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/voluntariado" }],
  }),
  component: Page,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefone: z.string().trim().max(40).optional().or(z.literal("")),
  disponibilidade: z.string().trim().max(200).optional().or(z.literal("")),
  mensagem: z.string().trim().max(1000).optional().or(z.literal("")),
});

function Page() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Obrigado! Entraremos em contacto em breve.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 600);
  }

  return (
    <>
      <PageHero
        eyebrow="Voluntariado"
        title="O seu tempo é a maior dádiva."
        sub="Não precisa de experiência. Precisa apenas de vontade de estar com os outros."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <img src={img} alt="Voluntários a ajudar na distribuição de refeições e preparação de cabazes alimentares" loading="lazy" width={1280} height={960} className="rounded-3xl shadow-lg" />
            <h2 className="mt-10 font-display text-3xl font-bold">Áreas de colaboração</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Distribuição semanal de refeições no CRESC",
                "Apoio logístico e preparação de cabazes",
                "Comunicação e redes sociais",
                "Organização de eventos e campanhas",
                "Angariação de recursos e parcerias",
              ].map((x) => (
                <li key={x} className="flex gap-3 rounded-xl bg-secondary/50 px-4 py-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-foreground">{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold">Inscrever-me como voluntário</h2>
              <p className="mt-1 text-sm text-muted-foreground">Preencha o formulário e entraremos em contacto.</p>
              <div className="mt-6 grid gap-4">
                <div>
                  <Label htmlFor="nome">Nome *</Label>
                  <Input id="nome" name="nome" required maxLength={100} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" name="telefone" type="tel" maxLength={40} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="disponibilidade">Disponibilidade</Label>
                  <Input id="disponibilidade" name="disponibilidade" placeholder="Ex: sábados de manhã" maxLength={200} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="mensagem">Áreas de interesse / mensagem</Label>
                  <Textarea id="mensagem" name="mensagem" rows={4} maxLength={1000} className="mt-1.5" />
                </div>
                <Button type="submit" size="lg" disabled={loading} className="mt-2">
                  {loading ? "A enviar..." : "Quero ser voluntário"}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
