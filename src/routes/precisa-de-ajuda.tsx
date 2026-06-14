import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "./quem-somos";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Heart, Users, UtensilsCrossed } from "lucide-react";

export const Route = createFileRoute("/precisa-de-ajuda")({
  head: () => ({
    meta: [
      { title: "Precisa de Ajuda? — O Ninho da Mariazinha" },
      { name: "description", content: "Se está numa situação de dificuldade, o Ninho da Mariazinha pode ajudar. Apoio alimentar, social e escuta em Coimbra." },
      { property: "og:title", content: "Precisa de Ajuda?" },
      { property: "og:description", content: "Estamos aqui para si." },
      { property: "og:url", content: "/precisa-de-ajuda" },
    ],
    links: [{ rel: "canonical", href: "/precisa-de-ajuda" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-5xl px-4 py-20 lg:px-8 lg:py-28">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-80">Precisa de Ajuda?</span>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl">Estamos aqui para si.</h1>
          <p className="mt-6 max-w-3xl text-xl opacity-90">Se está a passar por um momento difícil — sem casa, sem alimentação, isolado ou em dificuldade — fale connosco. Sem julgamento, com respeito.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 hover:text-white"><a href="tel:+351239444672"><Phone className="mr-1 h-4 w-4" /> Ligar agora · 239 444 672</a></Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/30 bg-transparent text-accent-foreground hover:bg-foreground/10"><Link to="/contactos"><MapPin className="mr-1 h-4 w-4" /> Visitar-nos</Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold">Quem pode procurar ajuda?</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Pessoas em situação de sem-abrigo", "Famílias carenciadas", "Idosos isolados ou em dificuldade", "Pessoas em risco de exclusão social"].map((x, idx) => (
                <Reveal key={x} delay={idx * 80} as="li">
                  <div className="flex gap-3 rounded-xl bg-secondary/50 px-4 py-3"><Heart className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span>{x}</span></div>
                </Reveal>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl font-bold">Como podemos ajudar</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { i: UtensilsCrossed, t: "Refeição quente", d: "Sopa da Mariazinha semanal no CRESC." },
                { i: Heart, t: "Cabaz alimentar", d: "Apoio mensal a famílias em dificuldade." },
                { i: Users, t: "Escuta e encaminhamento", d: "Acompanhamento social com respeito." },
              ].map((c, idx) => (
                <Reveal key={c.t} delay={idx * 100}>
                  <div className="rounded-2xl border border-border bg-card p-5 h-full">
                    <c.i className="h-6 w-6 text-primary" />
                    <div className="mt-3 font-semibold">{c.t}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150}>
            <aside className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-lg h-fit">
              <h3 className="font-display text-2xl font-bold">Contacto direto</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0" /><div><div className="font-semibold">Telefone</div><div className="opacity-90">239 444 672</div></div></li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0" /><div><div className="font-semibold">Morada</div><div className="opacity-90">Estrada de Eiras, 67<br />3025-069 Coimbra</div></div></li>
                <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0" /><div><div className="font-semibold">Horário</div><div className="opacity-90">Segunda a Sexta · 9h-18h</div></div></li>
              </ul>
              <Button asChild className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/contactos">Pedir Apoio</Link></Button>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <Reveal>
            <p className="font-display text-2xl text-foreground sm:text-3xl">
              “Ninguém deve sentir vergonha por pedir ajuda. Aqui é acolhido com a mesma dignidade com que tratamos a nossa própria família.”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
