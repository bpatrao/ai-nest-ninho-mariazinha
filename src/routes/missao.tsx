import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./quem-somos";
import { Reveal } from "@/components/Reveal";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/missao")({
  head: () => ({
    meta: [
      { title: "Missão, Visão e Valores — O Ninho da Mariazinha" },
      { name: "description", content: "A missão, visão e valores que guiam o trabalho da Associação O Ninho da Mariazinha em Coimbra." },
      { property: "og:title", content: "A Nossa Missão" },
      { property: "og:description", content: "Promover apoio social e dignidade humana." },
      { property: "og:url", content: "/missao" },
    ],
    links: [{ rel: "canonical", href: "/missao" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Missão"
        title="Porque fazemos o que fazemos."
        sub="Acreditamos que a dignidade humana não se mede em circunstâncias — mede-se em proximidade, escuta e ação."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { i: Target, t: "Missão", d: "Promover o apoio social e a dignidade de pessoas em situação de vulnerabilidade na região de Coimbra, com proximidade humana e resposta concreta a necessidades básicas." },
            { i: Eye, t: "Visão", d: "Uma comunidade mais inclusiva e solidária, onde ninguém vive isolado, com fome ou sem acolhimento." },
            { i: Heart, t: "Compromisso", d: "Construir todos os dias, em rede com voluntários e parceiros, respostas humanas, transparentes e sustentáveis." },
          ].map((b, idx) => (
            <Reveal key={b.t} delay={idx * 120}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><b.i className="h-7 w-7" /></div>
                <h2 className="mt-6 font-display text-2xl font-bold">{b.t}</h2>
                <p className="mt-3 text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <Reveal>
            <p className="font-display text-3xl font-semibold leading-snug sm:text-4xl">
              “Há 20 anos a construir esperança, dignidade e apoio para quem mais precisa.”
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-8">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">O nosso trabalho no dia-a-dia</h2>
        <div className="mt-10 space-y-6">
          {[
            { t: "Apoio Alimentar", d: "Cabaz alimentar mensal a famílias carenciadas e refeição semanal Sopa da Mariazinha no CRESC." },
            { t: "Apoio Social", d: "Acompanhamento, escuta e encaminhamento de pessoas em situação de fragilidade." },
            { t: "Ações Comunitárias", d: "Campanhas, eventos solidários e parcerias com supermercados, restaurantes e autarquias." },
            { t: "Projetos Especiais", d: "Iniciativas de inclusão e dignidade, com espaço para crescer com a comunidade." },
          ].map((w, idx) => (
            <Reveal key={w.t} delay={idx * 90}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl font-semibold text-primary">{w.t}</h3>
                <p className="mt-2 text-muted-foreground">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
