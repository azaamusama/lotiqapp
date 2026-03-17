import { Link } from "react-router-dom";
import { ShoppingCart, Star, Zap, Package } from "lucide-react";
import productComposite from "@/assets/product-composite.jpg";
import productGloves from "@/assets/product-gloves.jpg";
import productMasks from "@/assets/product-masks.jpg";
import productProphy from "@/assets/product-prophy.jpg";
import productBurs from "@/assets/product-burs.jpg";
import productCement from "@/assets/product-cement.jpg";
import productAnesthetic from "@/assets/product-anesthetic.jpg";

const PRODUCTS_BY_PRACTICE: Record<string, typeof ALL_PRODUCTS> = {
  general: [0, 1, 2, 3].map(i => ({} as any)),
  orthodontics: [0, 2, 5, 6].map(i => ({} as any)),
  "oral-surgery": [0, 1, 6, 3].map(i => ({} as any)),
  pediatric: [3, 1, 2, 4].map(i => ({} as any)),
  periodontics: [3, 4, 2, 1].map(i => ({} as any)),
  endodontics: [6, 4, 0, 1].map(i => ({} as any)),
};

const ALL_PRODUCTS = [
  { id: 1, name: "Composite Resin Syringes", brand: "3M ESPE", price: "$48.99", unit: "/pk of 10", rating: 4.8, reviews: 312, img: productComposite, badge: "Best Seller" },
  { id: 2, name: "Nitrile Exam Gloves", brand: "Medline", price: "$22.50", unit: "/box of 100", rating: 4.7, reviews: 891, img: productGloves, badge: "Top Pick" },
  { id: 3, name: "Procedure Face Masks", brand: "Crosstex", price: "$14.99", unit: "/box of 50", rating: 4.6, reviews: 543, img: productMasks, badge: null },
  { id: 4, name: "Prophy Paste Mint", brand: "Dentsply", price: "$31.00", unit: "/jar 200g", rating: 4.9, reviews: 204, img: productProphy, badge: "Staff Pick" },
  { id: 5, name: "Carbide Bur Set", brand: "SS White", price: "$29.95", unit: "/set of 12", rating: 4.7, reviews: 178, img: productBurs, badge: null },
  { id: 6, name: "Glass Ionomer Cement", brand: "GC America", price: "$54.00", unit: "/kit", rating: 4.5, reviews: 96, img: productCement, badge: null },
  { id: 7, name: "Lidocaine 2% w/ Epi", brand: "Novocol", price: "$38.50", unit: "/box of 50", rating: 4.9, reviews: 427, img: productAnesthetic, badge: "Fast Mover" },
];

const PRACTICE_LABELS: Record<string, string> = {
  general: "General Practice",
  orthodontics: "Orthodontics",
  "oral-surgery": "Oral Surgery",
  pediatric: "Pediatric Dentistry",
  periodontics: "Periodontics",
  endodontics: "Endodontics",
};

const CATEGORIES = [
  { label: "Composites & Cements", slug: "composites", color: "hsl(219 59% 93%)", iconColor: "hsl(219 59% 39%)" },
  { label: "Infection Control", slug: "infection-control", color: "hsl(153 38% 91%)", iconColor: "hsl(153 38% 30%)" },
  { label: "Preventatives", slug: "preventatives", color: "hsl(185 45% 92%)", iconColor: "hsl(185 45% 32%)" },
  { label: "Anesthetics", slug: "anesthetics", color: "hsl(22 87% 93%)", iconColor: "hsl(22 87% 42%)" },
  { label: "Instruments", slug: "instruments", color: "hsl(260 40% 93%)", iconColor: "hsl(260 40% 40%)" },
  { label: "Endodontics", slug: "endodontics", color: "hsl(0 60% 93%)", iconColor: "hsl(0 60% 40%)" },
];

interface PersonalizedSectionV3Props {
  practice: string;
  lookingFor: string;
}

const PersonalizedSectionV3 = ({ practice, lookingFor }: PersonalizedSectionV3Props) => {
  const indices = PRODUCTS_BY_PRACTICE[practice] ?? PRODUCTS_BY_PRACTICE.general;
  const products = indices.map((_, i) => {
    const idx = [0, 1, 2, 3, 4, 5, 6][i % 7];
    return ALL_PRODUCTS[idx];
  });

  return (
    <div className="bg-background">

      {/* ── Personalised Greeting Banner ── */}
      <div className="bg-gradient-to-r from-primary to-[hsl(219_59%_50%)] text-primary-foreground">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">
                Showing results for {PRACTICE_LABELS[practice] ?? "your practice"}
              </p>
              <p className="text-xs text-primary-foreground/75">
                Curated based on what {PRACTICE_LABELS[practice] ?? "practices like yours"} order most
              </p>
            </div>
          </div>
          <Link
            to="/category/all-products"
            className="text-xs font-semibold text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-2 transition-colors whitespace-nowrap"
          >
            Browse all products →
          </Link>
        </div>
      </div>

      {/* ── Quick Category Grid ── */}
      <div className="container py-10">
        <h2 className="text-xl font-bold text-foreground mb-6">Top categories for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {CATEGORIES.map(({ label, slug, color, iconColor }) => (
            <Link
              key={slug}
              to={`/category/${slug}`}
              className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: color }}
              >
                <Package className="h-5 w-5" style={{ color: iconColor }} />
              </div>
              <span className="text-xs font-medium text-foreground leading-tight">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Recommended Products ── */}
      <div className="container pb-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Recommended for you</h2>
            <p className="text-sm text-muted-foreground mt-1">Popular choices for {PRACTICE_LABELS[practice] ?? "your practice"}</p>
          </div>
          <Link to="/category/all-products" className="text-sm font-semibold text-primary hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ALL_PRODUCTS.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative bg-muted/40 aspect-square overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-3.5 flex flex-col flex-1">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{product.brand}</p>
                <p className="text-sm font-medium text-foreground leading-snug mb-2 flex-1">{product.name}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3"
                        fill={i < Math.floor(product.rating) ? "hsl(22 87% 61%)" : "none"}
                        stroke={i < Math.floor(product.rating) ? "hsl(22 87% 61%)" : "hsl(220 10% 80%)"}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price + Add */}
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-base font-bold text-primary">{product.price}</span>
                    <span className="text-[11px] text-muted-foreground ml-1">{product.unit}</span>
                  </div>
                  <button className="flex items-center gap-1 bg-primary hover:bg-[hsl(219_59%_33%)] text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                    <ShoppingCart className="h-3.5 w-3.5" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedSectionV3;
