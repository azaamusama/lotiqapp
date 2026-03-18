import { Link } from "react-router-dom";
import { ArrowRight, Truck, BadgePercent, ShieldCheck } from "lucide-react";
import heroBannerProducts from "@/assets/hero-banner-products.png";

const VALUE_PROPS = [
  { icon: Truck, label: "Same-Day Shipping" },
  { icon: BadgePercent, label: "Bulk Savings" },
  { icon: ShieldCheck, label: "Trusted by Professionals" },
];

const HeroBannerV4 = () => (
  <section className="w-full bg-gradient-to-br from-[hsl(210_40%_98%)] via-[hsl(210_60%_97%)] to-[hsl(195_50%_95%)] border-b border-border overflow-hidden">
    <div className="container">
      <div className="flex items-center min-h-[380px] py-12 gap-8 lg:gap-16">

        {/* ── Left: Copy ── */}
        <div className="flex-1 max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            30,000+ Products in Stock
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tight mb-4">
            Everything Your<br />
            <span className="text-primary">Practice Needs</span> —<br />
            Delivered Fast
          </h1>

          {/* Subheadline */}
          <p className="text-base text-muted-foreground leading-relaxed mb-7 max-w-sm">
            30,000+ Dental Supplies at Competitive Prices, from the brands you already trust.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8">
            {VALUE_PROPS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-primary shrink-0" />
                <span className="font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/category/all-products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Shop Supplies
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/category/all-products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Browse catalog →
            </Link>
          </div>
        </div>

        {/* ── Right: Product Visual ── */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          {/* Soft glow behind image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
          </div>

          {/* Stat badges */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-border rounded-xl px-3.5 py-2.5 shadow-md text-center">
            <p className="text-2xl font-black text-primary leading-none">30K+</p>
            <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Products</p>
          </div>

          <div className="absolute bottom-8 left-0 bg-white/90 backdrop-blur-sm border border-border rounded-xl px-3.5 py-2.5 shadow-md text-center">
            <p className="text-2xl font-black text-[hsl(153_50%_40%)] leading-none">Free</p>
            <p className="text-[11px] text-muted-foreground font-medium mt-0.5">Ship over $99</p>
          </div>

          <img
            src={heroBannerProducts}
            alt="Dental supplies including gloves, instruments, syringes and masks"
            className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </div>
  </section>
);

export default HeroBannerV4;
