import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "./quem-somos";
import { Reveal } from "@/components/Reveal";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias e Histórias — O Ninho da Mariazinha" },
      { name: "description", content: "Acompanhe as atividades, campanhas, eventos e histórias inspiradoras da Associação O Ninho da Mariazinha." },
      { property: "og:title", content: "Notícias" },
      { property: "og:description", content: "Atividades, campanhas e histórias inspiradoras." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: Page,
});

const posts = [
  { d: "Março 2026", t: "20 anos a servir Coimbra", x: "Celebramos duas décadas de trabalho ao lado da comunidade, com testemunhos, números e memórias." },
  { d: "Janeiro 2025", t: "Sopa da Mariazinha mantém-se semanal no CRESC", x: "Voluntários e parceiros locais garantem a continuidade desta resposta de proximidade." },
  { d: "Novembro 2024", t: "Campanha de recolha de bens essenciais", x: "Agradecemos a todos os que contribuíram com alimentos, roupa e produtos de higiene." },
  { d: "Outubro 2024", t: "Noite de Fados solidária em Ovar", x: "Um serão musical com fim solidário a favor das famílias apoiadas pelo Ninho." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Notícias e Histórias"
        title="O que vai acontecendo no Ninho."
        sub="Atividades recentes, campanhas, eventos e histórias que merecem ser contadas."
      />
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <div className="space-y-6">
          {posts.map((p, idx) => (
            <Reveal key={p.t} delay={idx * 90}>
              <article className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  <Calendar className="h-4 w-4" /> {p.d}
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{p.t}</h2>
                <p className="mt-3 text-muted-foreground">{p.x}</p>
                <Link to="/contactos" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Saber mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
