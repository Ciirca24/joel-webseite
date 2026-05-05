import React from "react";

function Icon({ name, className = "h-6 w-6" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    mail: (
      <svg {...commonProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    mapPin: (
      <svg {...commonProps}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    arrowRight: (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
    check: (
      <svg {...commonProps}>
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    pen: (
      <svg {...commonProps}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    message: (
      <svg {...commonProps}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
    inbox: (
      <svg {...commonProps}>
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function Button({ children, href, variant = "primary" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
      : "bg-white text-stone-950 hover:bg-stone-200";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/[0.04] ${className}`}>{children}</div>;
}

export default function PersonalWebsite() {
  const services = [
    "Schwierige E-Mails professionell schreiben lassen",
    "Seriöse Antworten auf wichtige Nachrichten formulieren",
    "Copywriting für klare Verkaufsbotschaften",
    "Content-Creator-Captions für Social Media",
    "Texte für Menschen mit wenig Zeit oder Unsicherheit beim Formulieren",
  ];

  const offers = [
    {
      icon: "inbox",
      title: "E-Mails schreiben & beantworten",
      text: "Ich formuliere schwierige, mühsame oder wichtige E-Mails für dich – klar, respektvoll und professionell.",
    },
    {
      icon: "pen",
      title: "Copywriting",
      text: "Texte, die dein Angebot verständlich, seriös und überzeugend präsentieren – ohne unnötig kompliziert zu wirken.",
    },
    {
      icon: "message",
      title: "Creator Captions",
      text: "Captions für Instagram, TikTok, LinkedIn oder andere Plattformen – locker, professionell und passend zu deinem Stil.",
    },
  ];

  const tests = [
    services.length === 5,
    offers.length === 3,
    offers.every((offer) => offer.title && offer.text && offer.icon),
  ];

  if (!tests.every(Boolean)) {
    throw new Error("Website content validation failed.");
  }

  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-neutral-950 to-black" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-stone-700/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-neutral-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-200">
              Copywriting • E-Mail-Service • Content Captions
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Joël Stöckli
                <span className="block text-stone-400">Ich finde die richtigen Worte.</span>
              </h1>
              <p className="max-w-xl text-lg leading-8 text-stone-300">
                Ich helfe dir bei schwierigen E-Mails, professionellen Antworten, Copywriting und Social-Media-Captions. Locker formuliert, seriös umgesetzt und klar auf den Punkt gebracht.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:joel_stoeckli@hotmail.com?subject=Anfrage%20Textservice%20Jo%C3%ABl%20St%C3%B6ckli">
                Anfrage senden
                <Icon name="arrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button href="#angebot" variant="outline">
                Angebot ansehen
              </Button>
            </div>
          </div>

          <Card className="rounded-[2rem] bg-white/[0.06] shadow-2xl backdrop-blur">
            <div className="p-8">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
                <img
                  src="/joel-stoeckli.jpg"
                  alt="Joël Stöckli"
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Kurz gesagt</p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">
                  Du hast keine Zeit oder Mühe mit Formulierungen? Ich nehme dir diese Arbeit ab.
                </h2>
              </div>

              <div className="mt-6 space-y-3 text-stone-300">
                <div className="flex items-center gap-3">
                  <Icon name="mapPin" className="h-5 w-5 text-stone-500" />
                  Bezirk Kulm, Schweiz
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="mail" className="h-5 w-5 text-stone-500" />
                  joel_stoeckli@hotmail.com
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="angebot" className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Mein Angebot</h2>
            <p className="mt-4 text-stone-400">
              Für Menschen, Selbstständige und Creator, die klare Texte brauchen – aber keine Zeit, Lust oder Sicherheit beim Formulieren haben.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {offers.map((item) => (
              <Card key={item.title}>
                <div className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-stone-200">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-stone-400">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-3xl font-bold">Wobei ich helfen kann</h2>
            <p className="mt-4 leading-7 text-stone-400">
              Manche Nachrichten sind unangenehm, wichtig oder einfach mühsam. Ich helfe dir, professionell zu antworten und die richtigen Worte zu finden – ohne Stress und ohne komplizierte Formulierungen.
            </p>
          </div>
          <div className="grid gap-4">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-stone-200">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-stone-300" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-stone-100 p-8 text-stone-950 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Für wen ist das gedacht?</h2>
              <p className="mt-4 leading-7 text-stone-700">
                Für Leute, die Schwierigkeiten beim Formulieren haben, wichtige Mails nicht falsch schreiben möchten oder schlicht keine Zeit für mühsame Schreibarbeit haben. Auch für Creator, Selbstständige und kleine Unternehmen, die professioneller auftreten wollen.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-lg font-medium leading-8">
                „Ich schreibe nicht einfach schöne Sätze. Ich helfe dir, deine Botschaft so zu formulieren, dass sie verstanden wird, seriös wirkt und professionell ankommt.“
              </p>
              <p className="mt-4 text-sm font-semibold text-stone-500">Joël Stöckli</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold">Ablauf</h2>
              <p className="mt-4 text-stone-400">Einfach, unkompliziert und auf Anfrage.</p>
            </div>
            <div className="grid gap-4 md:col-span-2">
              <div className="rounded-2xl bg-white/5 p-5">
                <h3 className="font-semibold">1. Du schreibst mir</h3>
                <p className="mt-2 text-stone-400">Du erklärst kurz, wobei du Hilfe brauchst.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <h3 className="font-semibold">2. Ich formuliere deinen Text</h3>
                <p className="mt-2 text-stone-400">Ich mache daraus eine klare, seriöse und passende Nachricht.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <h3 className="font-semibold">3. Du bekommst deinen fertigen Text</h3>
                <p className="mt-2 text-stone-400">Preise gibt es aktuell individuell auf Anfrage – je nach Umfang und Aufwand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Brauchst du Hilfe beim Formulieren?</h2>
          <p className="mt-4 text-stone-400">
            Schreib mir kurz, worum es geht. Ich melde mich mit einer passenden Einschätzung zurück.
          </p>
          <Button href="mailto:joel_stoeckli@hotmail.com?subject=Anfrage%20Textservice%20Jo%C3%ABl%20St%C3%B6ckli">
            Anfrage senden
          </Button>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-stone-500">
        © 2026 Joël Stöckli. Copywriting, E-Mail-Service & Content Captions.
      </footer>
    </main>
  );
}
