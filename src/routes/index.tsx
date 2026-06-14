import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, UtensilsCrossed, HandHeart, ArrowRight, Sparkles, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Ninho da Mariazinha — 20 anos a apoiar quem mais precisa" },
      { name: "description", content: "Associação solidária em Coimbra. Apoio alimentar, social e comunitário a sem-abrigo, famílias carenciadas e idosos há 20 anos." },
      { property: "og:title", content: "O Ninho da Mariazinha" },
      { property: "og:description", content: "Há 20 anos a construir esperança, dignidade e apoio para quem mais precisa." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Voluntários a servir refeições" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> 20 anos · Coimbra
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              20 anos a apoiar quem mais precisa.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              Todos os dias trabalhamos para que ninguém fique para trás. Refeições, escuta, presença e dignidade — para sem-abrigo, famílias e idosos.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 hover:text-white">
                <Link to="/precisa-de-ajuda">Preciso de Ajuda</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 hover:text-white">
                <Link to="/voluntariado">Quero Ser Voluntário</Link>
              </Button>
              <Button asChild size="lg" className="bg-hope text-white hover:bg-hope/90 hover:text-white">
                <Link to="/como-contribuir">Apoiar a Associação</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "20", l: "Anos de atividade", i: Calendar },
            { n: "+80", l: "Utentes apoiados", i: Users },
            { n: "Semanal", l: "Sopa da Mariazinha", i: UtensilsCrossed },
            { n: "+60", l: "Voluntários ativos", i: HandHeart },
          ].map((s, idx) => (
            <Reveal key={s.l} delay={idx * 100}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <s.i className="h-7 w-7 text-primary" />
                <div className="mt-4 font-display text-4xl font-bold text-foreground">{s.n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src={about} alt="Voluntários a preparar cabazes alimentares" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Quem somos</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Uma rede solidária construída ao longo de duas décadas.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nascemos em Coimbra com uma missão simples: acolher quem mais precisa. Hoje somos uma IPSS de referência local, com voluntários, parceiros e uma comunidade que acredita que ninguém deve ficar para trás.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link to="/quem-somos">Conhecer a nossa história <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
              <Button asChild className="bg-primary text-white hover:bg-primary/90"><Link to="/missao">A nossa missão</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIPS */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Preciso de Apoio", d: "Refeições, cabazes e escuta. Estamos aqui para si.", to: "/precisa-de-ajuda", c: "bg-accent" },
            { t: "Ser Voluntário", d: "Doe o seu tempo. Faça parte desta família.", to: "/voluntariado", c: "bg-primary" },
            { t: "Como Contribuir", d: "Donativos financeiros, géneros ou parcerias.", to: "/como-contribuir", c: "bg-[var(--hope)]" },
          ].map((c, idx) => (
            <Reveal key={c.t} delay={idx * 120}>
              <Link to={c.to} className={`group flex h-full flex-col justify-between rounded-3xl p-8 transition-transform hover:-translate-y-1 text-white ${c.c}`}>
                <div>
                  <Heart className="h-8 w-8 opacity-90" />
                  <h3 className="mt-5 font-display text-2xl font-bold">{c.t}</h3>
                  <p className="mt-2 text-base opacity-90">{c.d}</p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  Saber mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section className="bg-warm py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Histórias reais</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Vidas tocadas pela nossa comunidade.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { q: "Encontrei aqui mais do que uma refeição quente. Encontrei dignidade e amizade.", a: "António, utente" },
              { q: "Ser voluntária no Ninho mudou a minha forma de ver Coimbra e as pessoas.", a: "Marta, voluntária há 6 anos" },
              { q: "É uma honra apoiar uma instituição com este compromisso e proximidade.", a: "Parceiro local" },
            ].map((t, idx) => (
              <Reveal key={t.a} delay={idx * 120}>
                <figure className="rounded-2xl bg-card p-8 shadow-sm">
                  <blockquote className="font-display text-lg leading-relaxed text-foreground">“{t.q}”</blockquote>
                  <figcaption className="mt-6 text-sm font-semibold text-muted-foreground">— {t.a}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-hope px-8 py-16 text-hope-foreground sm:px-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Junte-se a esta missão.</h2>
              <p className="mt-4 text-lg text-white/90">Cada gesto conta. Voluntariado, donativo ou simplesmente partilhar — todos podemos fazer parte.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90"><Link to="/como-contribuir">Apoiar agora</Link></Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link to="/contactos"><MapPin className="mr-1 h-4 w-4" /> Visitar-nos</Link></Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
