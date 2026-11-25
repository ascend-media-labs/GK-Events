import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Tag, Gift, Percent, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero, Section } from "@/components/site/Blocks";
import { contact, images, waLink } from "@/data/site";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Special Offers & Combo Packages | GK Events" },
      {
        name: "description",
        content: "Save up to 15% with GK Events bundled packages for weddings, corporate conferences, and stage celebrations.",
      },
    ],
  }),
  component: OffersPage,
});

const PACKAGES = [
  {
    name: "Wedding Grand Stage Bundle",
    badge: "Most Popular · 15% OFF",
    originalPrice: "₹85,000",
    offerPrice: "₹72,000",
    tagline: "Complete audio, visual, and lighting setup for weddings and sangeet.",
    features: [
      "P2.5 Curved or Flat LED Wall Backdrop (Up to 24ft x 10ft)",
      "JBL / RCF Concert Line Array Sound System with dual Subwoofers",
      "Digital Mixing Console with 6 Wireless Cordless Microphones",
      "DMX Moving Head Beam Lights, Warm Par Cans & Stage Blinders",
      "Atmospheric Haze / Low Smoke Effect Machine",
      "Dedicated On-site FOH Sound & Lighting Technical Crew",
    ],
    popular: true,
    to: "/wedding-events",
  },
  {
    name: "Corporate Conference Suite",
    badge: "Best Value · 12% OFF",
    originalPrice: "₹45,000",
    offerPrice: "₹39,500",
    tagline: "Turnkey AV setup for corporate AGMs, summits, and product launches.",
    features: [
      "High-Lumen Laser 4K Projector + Motorized Tensioned Screen",
      "Dual 75\" Commercial 4K UHD LED TVs on Floor Display Stands",
      "Clear Speech Podium Mics & Lapel Lavalier Wireless System",
      "Full-Range Audio System optimized for speech clarity",
      "Video Switcher for seamless PPT, Video, and Hybrid Zoom switching",
      "On-site technician for live show-calling & troubleshooting",
    ],
    popular: false,
    to: "/corporate-events",
  },
  {
    name: "Sangeet & DJ Party Blast",
    badge: "High Energy Special",
    originalPrice: "₹38,000",
    offerPrice: "₹32,000",
    tagline: "Punchy sound, concert lighting, and atmospheric effects for celebrations.",
    features: [
      "High-Impact Bass Subwoofers & High-Output Mid-High Tops",
      "Intelligent Moving Beam Lights, Strobes & Multi-Pattern Lasers",
      "CO2 Jet Simulators & High-Density Fog Machine",
      "DJ Console Stand & Pro Wireless Handheld Microphones",
      "Sound Engineer & Light Controller on-site throughout event",
    ],
    popular: false,
    to: "/event-solutions",
  },
];

function OffersPage() {
  return (
    <div className="bg-white text-slate-900">
      <PageHero
        eyebrow="Exclusive Event Packages"
        title="Unbeatable AV Combo"
        highlight="Offers & Discounts."
        intro="Bundle your sound, LED screens, stage lights, and live streaming to save up to 15% on turnkey event production."
        image={images.wedding}
      />

      {/* Package Offer Cards */}
      <Section eyebrow="Limited Period Offers" title="Curated Event Bundles">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.popular
                  ? "border-amber-500/80 bg-white shadow-[0_16px_40px_rgba(217,119,6,0.12)] ring-1 ring-amber-400/40"
                  : "border-slate-200/90 bg-white shadow-sm hover:border-amber-400 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-800">
                  <Percent className="h-3 w-3 text-amber-600" />
                  {pkg.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 line-through">{pkg.originalPrice}</span>
              </div>

              {/* Title & Price */}
              <div className="mt-5">
                <h3 className="font-display text-2xl font-bold text-slate-950">{pkg.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{pkg.tagline}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-display font-extrabold text-amber-700">{pkg.offerPrice}</span>
                  <span className="text-xs text-slate-500">starting price / day</span>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Package Includes:</p>
                <ul className="space-y-3">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Action */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                <Button asChild variant="whatsapp" size="lg" className="rounded-full font-bold text-white shadow-md">
                  <a
                    href={waLink(`Hi GK Events, I would like to book the "${pkg.name}" offer.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Claim Offer on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="rounded-full border-slate-300 text-slate-800 font-bold hover:bg-slate-50">
                  <Link to="/contact">Get Customized Quote</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Free Perks Banner */}
      <section className="py-6 sm:py-8 bg-white border-y border-slate-200/80">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
              <Zap className="h-6 w-6 text-amber-600 shrink-0" />
              <div>
                <p className="font-bold text-sm text-slate-900">Zero Delivery Fee</p>
                <p className="text-xs text-slate-500">Within city warehouse limits</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
              <Gift className="h-6 w-6 text-amber-600 shrink-0" />
              <div>
                <p className="font-bold text-sm text-slate-900">Free Backup Gear</p>
                <p className="text-xs text-slate-500">Extra mics & power cables included</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
              <Sparkles className="h-6 w-6 text-amber-600 shrink-0" />
              <div>
                <p className="font-bold text-sm text-slate-900">On-Site Technicians</p>
                <p className="text-xs text-slate-500">Included with every package</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
              <Tag className="h-6 w-6 text-amber-600 shrink-0" />
              <div>
                <p className="font-bold text-sm text-slate-900">Multi-Day Discounts</p>
                <p className="text-xs text-slate-500">Up to 25% off for 2+ day events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta title="Looking for a custom package for your venue?" />
    </div>
  );
}
