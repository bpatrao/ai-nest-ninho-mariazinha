import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./quem-somos";
import { Reveal } from "@/components/Reveal";
import { Banknote, Package, Building2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import img from "@/assets/contribute.jpg";
import sopas from "@/assets/sopas.jpg";

export const Route = createFileRoute("/como-contribuir")({
  head: () => ({
    meta: [
      { title: "Como Contribuir — O Ninho da Mariazinha" },
      { name: "description", content: "Donativos financeiros, géneros, parcerias empresariais e outras formas de apoiar a Associação O Ninho da Mariazinha." },
      { property: "og:title", content: "Como Contribuir" },
      { property: "og:description", content: "Apoie quem mais precisa em Coimbra." },
      { property: "og:url", content: "/como-contribuir" },
      { property: "og:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/como-contribuir" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Como Contribuir"
        title="Cada gesto torna possível o próximo."
        sub="Há muitas formas de apoiar o Ninho — escolha a que faz mais sentido para si."
      />

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Projeto emblemático</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">A Sopa da Mariazinha.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Todas as semanas, preparamos e distribuímos refeições quentes a quem mais precisa. A Sopa da Mariazinha é mais do que alimento — é um momento de encontro, dignidade e esperança.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              O seu apoio permite-nos continuar este trabalho essencial: comprar ingredientes, manter as cozinhas a funcionar e garantir que ninguém fica sem uma refeição.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link to="/contactos">Quero Ajudar</Link></Button>
            </div>
          </Reveal>
          <Reveal delay={150} className="overflow-hidden rounded-3xl shadow-xl">
            <img src={sopas} alt="Sopa da Mariazinha — refeições preparadas para quem precisa" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { i: Banknote, t: "Donativos financeiros", d: "Transferência bancária, MB Way ou referência multibanco. Cada euro chega diretamente a quem precisa.", extra: "IBAN: PT50 0000 0000 0000 0000 0000 0" },
            { i: Package, t: "Donativos em géneros", d: "Alimentos não perecíveis, roupa em bom estado, produtos de higiene e bens essenciais.", extra: "Recolha mediante combinação." },
            { i: Building2, t: "Apoio empresarial", d: "Parcerias, mecenato e responsabilidade social. Construímos respostas adaptadas a cada empresa.", extra: "Contacte-nos para conhecer formas de envolvimento." },
            { i: Share2, t: "Partilhar a missão", d: "Falar do Ninho é também uma forma de apoiar. Partilhe nas suas redes e na sua comunidade.", extra: "Cada partilha multiplica o impacto." },
          ].map((c, idx) => (
            <Reveal key={c.t} delay={idx * 100}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground"><c.i className="h-7 w-7" /></div>
                <h2 className="mt-5 font-display text-2xl font-bold">{c.t}</h2>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
                <p className="mt-4 text-sm font-medium text-primary">{c.extra}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <img src={img} alt="Donativo solidário" loading="lazy" width={1280} height={960} className="rounded-3xl shadow-lg" />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-4xl font-bold">Transparência é compromisso.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Acreditamos que cada apoiante tem direito a saber para onde vai o seu contributo. Disponibilizamos relatórios anuais de atividade e estamos sempre disponíveis para esclarecer qualquer dúvida.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link to="/contactos">Falar connosco</Link></Button>
              <Button asChild variant="outline"><Link to="/voluntariado">Ser voluntário</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
