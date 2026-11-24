import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm, PageHero } from "@/components/site/Blocks";
import { contact, images, waLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | GK Events" },
      { name: "description", content: "Get a quote for sound, LED walls, photography, films or live streaming. Call or WhatsApp GK Events." },
      { property: "og:title", content: "Contact & Book GK Events" },
      { property: "og:description", content: "Call, WhatsApp or send an enquiry for your event." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const cards = [
    { icon: Phone, label: "Call us", value: contact.phone, href: contact.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: waLink() },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Location", value: contact.city },
    { icon: Clock, label: "Hours", value: contact.hours },
  ];
  return (
    <>
      <PageHero eyebrow="Contact & Booking" title="Let's plan your" highlight="next event." intro="Share your date, venue and requirements — we'll send a tailored quote within hours." image={images.corporate} />
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="grid content-start gap-4">
            {cards.map((c) => {
              const inner = (<><c.icon className="h-6 w-6 shrink-0 text-primary" /><div className="min-w-0"><p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p><p className="truncate font-bold">{c.value}</p></div></>);
              return c.href
                ? <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 hover:border-primary/50">{inner}</a>
                : <div key={c.label} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5">{inner}</div>;
            })}
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-extrabold">Send an enquiry</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
