import { Truck, ShieldCheck, RefreshCw, Headphones, Award, CreditCard } from "lucide-react";

const SIGNALS = [
  {
    icon: Truck,
    title: "Free shipping over $250",
    sub: "On all qualifying orders",
    color: "hsl(219 59% 93%)",
    iconColor: "hsl(219 59% 39%)",
  },
  {
    icon: ShieldCheck,
    title: "Verified authentic products",
    sub: "100% genuine, manufacturer-direct",
    color: "hsl(153 38% 91%)",
    iconColor: "hsl(153 38% 30%)",
  },
  {
    icon: RefreshCw,
    title: "Hassle-free returns",
    sub: "30-day return policy",
    color: "hsl(185 45% 92%)",
    iconColor: "hsl(185 45% 32%)",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    sub: "Mon–Fri, 8am–6pm CT",
    color: "hsl(260 40% 93%)",
    iconColor: "hsl(260 40% 40%)",
  },
  {
    icon: Award,
    title: "40+ years in dental supply",
    sub: "Trusted by 100k+ practices",
    color: "hsl(22 87% 93%)",
    iconColor: "hsl(22 87% 42%)",
  },
  {
    icon: CreditCard,
    title: "Net-30 terms available",
    sub: "For qualifying accounts",
    color: "hsl(0 60% 93%)",
    iconColor: "hsl(0 60% 40%)",
  },
];

const TrustBannerV3 = () => (
  <section className="bg-card border-y border-border">
    <div className="container py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
        Why 100,000+ dental professionals choose Safco
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {SIGNALS.map(({ icon: Icon, title, sub, color, iconColor }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-border bg-background hover:shadow-sm transition-shadow"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: color }}
            >
              <Icon className="h-5 w-5" style={{ color: iconColor }} />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground leading-tight mb-0.5">{title}</p>
              <p className="text-[11px] text-muted-foreground leading-tight">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBannerV3;
