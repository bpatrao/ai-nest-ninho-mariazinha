import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import sopas from "@/assets/sopas.jpg";
import equipa from "@/assets/equipa.jpg";
import familiaAjuda from "@/assets/familia-ajuda.jpg";


export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — O Ninho da Mariazinha" },
      { name: "description", content: "Conheça a história, valores e equipa da Associação O Ninho da Mariazinha, IPSS de Coimbra com 20 anos." },
      { property: "og:title", content: "Quem Somos — O Ninho da Mariazinha" },
      { property: "og:description", content: "20 anos a construir uma rede solidária em Coimbra." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: Page,
});

const timeline = [
  { y: "2005", t: "Os primeiros passos", d: "Nasce em Coimbra uma resposta solidária para acolher pessoas em situação de rua." },
  { y: "2010", t: "Crescimento da comunidade", d: "A rede de voluntários expande-se e formaliza-se a entrega regular de apoio alimentar." },
  { y: "2015", t: "Parcerias institucionais", d: "Reforço de parcerias com supermercados, restaurantes e estruturas municipais." },
  { y: "2020", t: "Resposta em tempos difíceis", d: "Durante a pandemia, o apoio a famílias carenciadas e idosos isolados intensifica-se." },
  { y: "2026", t: "20 anos a servir Coimbra", d: "Celebramos duas décadas de proximidade, dignidade e esperança." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="Uma família solidária ao serviço de Coimbra."
        sub="Somos uma IPSS independente, feita de pessoas que acreditam que a dignidade humana se constrói todos os dias."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <Reveal>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              O <strong className="text-foreground">Ninho da Mariazinha</strong> é uma associação sem fins lucrativos, fundada há mais de duas décadas em Coimbra, dedicada ao apoio social a pessoas sem-abrigo, famílias carenciadas, idosos e indivíduos em risco de exclusão.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Trabalhamos a partir da nossa sede na Estrada de Eiras e da cozinha semi-industrial em Sandelgas, em rede com voluntários, parceiros locais e a comunidade.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 lg:px-8">
        <Reveal className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={familiaAjuda}
            alt="Família a receber um saco de ajuda alimentar da Associação O Ninho da Mariazinha"
            className="h-[280px] w-full object-cover sm:h-[420px]"
            loading="lazy"
          />
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">A nossa história</h2>
          <div className="mt-12 space-y-8">
            {timeline.map((e, idx) => (
              <Reveal key={e.y} delay={idx * 80}>
                <div className="grid grid-cols-[80px_1fr] gap-6 sm:grid-cols-[120px_1fr]">
                  <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{e.y}</div>
                  <div className="border-l-2 border-primary/30 pl-6">
                    <h3 className="font-display text-xl font-semibold">{e.t}</h3>
                    <p className="mt-2 text-muted-foreground">{e.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <Reveal className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={equipa}
            alt="Equipa de voluntários do Ninho da Mariazinha a trabalhar em comunidade"
            className="h-[280px] w-full object-cover sm:h-[420px]"
            loading="lazy"
          />
        </Reveal>
        <p className="mt-4 text-center text-sm text-muted-foreground">A nossa equipa de voluntários e colaboradores no dia a dia da associação.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Os nossos valores</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Solidariedade", "Respeito", "Dignidade", "Inclusão", "Compromisso", "Proximidade"].map((v, idx) => (
            <Reveal key={v} delay={idx * 70}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-2xl font-semibold text-primary">{v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto max-w-5xl px-4 py-20 lg:px-8 lg:py-28">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-xl text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
}
