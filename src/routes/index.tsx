import { createFileRoute } from "@tanstack/react-router";
import { Phone, Facebook, Flower2, Heart, Building2, MapPin, Mail, Clock } from "lucide-react";
import heroBouquet from "@/assets/hero-bouquet.jpg";
import aboutShop from "@/assets/about-shop.jpg";

const PHONE_DISPLAY = "089 855 3597";
const PHONE = "tel:+359898553597";
const FACEBOOK = "https://www.facebook.com/p/FloraGift-61573117297934/";
const ADDRESS = 'ул. „Генерал Асен Николов" 19, София, 1324, България';
const MAP_QUERY = encodeURIComponent(
  'General Asen Nikolov 19, Sofia, 1324, Bulgaria',
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FloraGift — Букети и цветни аранжировки в София" },
      {
        name: "description",
        content:
          "FloraGift — магазин за цветя в София. Уникални букети, сватбена флористика и корпоративни аранжировки със свежи рози, лилии и орхидеи.",
      },
      { property: "og:title", content: "FloraGift — Букети и цветни аранжировки в София" },
      {
        property: "og:description",
        content:
          "Свежи букети, сватбена флористика и корпоративни събития. Поръчайте по телефона в София.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: FloraGift,
});

function FloraGift() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <a
        href={PHONE}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition hover:brightness-110 md:hidden"
        aria-label="Обади се сега"
      >
        <Phone className="h-4 w-4" />
        Обади се
      </a>
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#home", label: "Начало" },
    { href: "#about", label: "За нас" },
    { href: "#services", label: "Услуги" },
    { href: "#contact", label: "Контакти" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Flower2 className="h-4 w-4" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">FloraGift</span>
        </a>
        <ul className="hidden items-center gap-9 text-sm font-medium text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={PHONE}
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition hover:brightness-110 md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Обади се сега
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Цветарски магазин · София
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-primary-dark md:text-6xl lg:text-7xl">
            Уникални букети и стилни аранжировки в София
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Внесете радост и красота във всеки специален момент със свежите цветя на
            магазин „FloraGift".
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={PHONE}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              Поръчай по телефона
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
              Разгледайте във Facebook
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <Stat value="10+" label="години опит" />
            <Stat value="500+" label="щастливи клиенти" />
            <Stat value="7/7" label="работни дни" />
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/15 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-primary/10">
            <img
              src={heroBouquet}
              alt="Елегантен букет от рози, божури и лилии на тъмнозелен фон"
              width={1280}
              height={1600}
              className="h-[560px] w-full object-cover md:h-[640px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 shadow-soft ring-1 ring-border md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-primary-dark">Свежи всеки ден</p>
                <p className="text-xs text-muted-foreground">Ръчно подбрани цветя</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl font-semibold text-primary-dark">{value}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
    </div>
  );
}

function Services() {
  const items = [
    {
      icon: Flower2,
      title: "Празнични букети",
      body:
        "Богата гама от рози, лилии, орхидеи и персонализирани аранжировки, подходящи за рождени дни, годишнини и специални жестове.",
    },
    {
      icon: Heart,
      title: "Сватбена флористика",
      body:
        "Внимание към детайла и уникален стил за вашия незабравим ден – от булчински букети до цялостна украса.",
    },
    {
      icon: Building2,
      title: "Корпоративни събития",
      body:
        "Стилни и изискани флорални решения, проектирани да създават незабравими спомени за вашите фирмени и официални събития.",
    },
  ];
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Нашите услуги
          </span>
          <h2 className="mt-3 font-serif text-4xl text-primary-dark md:text-5xl">
            Флорално изкуство за всеки повод
          </h2>
          <p className="mt-4 text-muted-foreground">
            От интимен жест до мащабно събитие – създаваме композиции, които разказват вашата
            история.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition group-hover:bg-accent/10" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-primary-dark">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/20 to-primary/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-primary/10">
            <img
              src={aboutShop}
              alt="Флорист аранжира букет от рози в магазин FloraGift"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-[520px] w-full object-cover md:h-[600px]"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            За нас
          </span>
          <h2 className="mt-3 font-serif text-4xl text-primary-dark md:text-5xl">
            Красота, сътворена с внимание към детайла
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Цветарски магазин „FloraGift" предлага разнообразие от свежи цветя, красиви букети
              и уникални аранжировки. Разположен в София, магазинът осигурява високо качество и
              стил, за да внесе радост и красота в живота на клиентите. Всеки букет се създава с
              внимание към детайла и с цел да отговори на индивидуалните нужди.
            </p>
            <p>
              Със своите уникални предложения, „FloraGift" е предпочитан избор за хора, които
              искат да направят специален жест или да украсят важен момент. Всеки продукт е
              проектиран да носи положителни емоции. Стилът и свежестта на цветята са основни
              приоритети за нашия бизнес.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Свежи цветя", "Ръчна изработка", "Доставка в София"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/20 bg-background px-4 py-2 text-xs font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Посетете ни
          </span>
          <h2 className="mt-3 font-serif text-4xl text-primary-dark md:text-5xl">
            Контакти и Локация
          </h2>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-soft">
              <h3 className="font-serif text-2xl">Магазин FloraGift</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                Заповядайте в нашия магазин или ни се обадете за поръчка.
              </p>
              <ul className="mt-8 space-y-5 text-sm">
                <InfoRow icon={MapPin} title="Адрес" body={ADDRESS} />
                <InfoRow icon={Phone} title="Телефон" body={PHONE_DISPLAY} href={PHONE} />
                <InfoRow icon={Clock} title="Работно време" body="Понеделник – Неделя" />
                <InfoRow icon={Mail} title="Facebook" body="@FloraGift" href={FACEBOOK} />
              </ul>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition hover:brightness-110"
              >
                <Facebook className="h-4 w-4" />
                Последвайте ни във Facebook за най-новите ни букети
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft lg:col-span-3">
            <iframe
              title="Карта на FloraGift в София"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              className="h-full min-h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  body: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-primary-foreground/60">{title}</p>
        <p className="mt-0.5 font-medium">{body}</p>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-start gap-4 transition hover:text-accent"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-start gap-4">{content}</div>
      )}
    </li>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Flower2 className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-semibold text-primary-dark">FloraGift</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Copyright © 2026 Магазин за цветя FloraGift. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
