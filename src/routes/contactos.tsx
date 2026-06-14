import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "./quem-somos";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — O Ninho da Mariazinha" },
      { name: "description", content: "Contactos da Associação O Ninho da Mariazinha em Coimbra. Morada, telefone, email e formulário de contacto." },
      { property: "og:title", content: "Contactos" },
      { property: "og:description", content: "Fale connosco." },
      { property: "og:url", content: "/contactos" },
    ],
    links: [{ rel: "canonical", href: "/contactos" }],
  }),
  component: Page,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  mensagem: z.string().trim().min(5, "Escreva a sua mensagem").max(1000),
});

function Page() {
  const [loading, setLoading] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) return toast.error(r.error.issues[0].message);
    setLoading(true);
    setTimeout(() => {
      toast.success("Obrigado pelo contacto! Responderemos em breve.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 600);
  }

  return (
    <>
      <PageHero eyebrow="Contactos" title="Estamos aqui para si." sub="Fale connosco — para apoiar, para colaborar ou simplesmente para nos conhecer." />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">Informações</h2>
            <ul className="mt-8 space-y-6">
              {[
                { i: MapPin, t: "Sede", d: "Estrada de Eiras, 67\n3025-069 Coimbra" },
                { i: MapPin, t: "Cozinha", d: "Rua da Restauração 16\nVila Pouca de Cernache" },
                { i: Phone, t: "Telefone", d: "239 444 672" },
                { i: Mail, t: "Email", d: "geral@ninhodamariazinha.pt" },
                { i: Clock, t: "Horário", d: "Segunda a Sexta · 9h-18h" },
              ].map((c) => (
                <li key={c.t} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"><c.i className="h-5 w-5" /></div>
                  <div>
                    <div className="font-semibold">{c.t}</div>
                    <div className="whitespace-pre-line text-muted-foreground">{c.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-sm h-fit">
              <h2 className="font-display text-2xl font-bold">Enviar mensagem</h2>
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
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea id="mensagem" name="mensagem" rows={6} required maxLength={1000} className="mt-1.5" />
                </div>
                <Button type="submit" size="lg" disabled={loading}>{loading ? "A enviar..." : "Enviar"}</Button>
              </div>
            </form>
          </Reveal>
        </div>
        <Reveal className="mt-12 overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Localização O Ninho da Mariazinha"
            src="https://www.google.com/maps?q=Estrada+de+Eiras+67,+Coimbra&output=embed"
            className="h-80 w-full"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}
