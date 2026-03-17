import { Link } from "react-router-dom";
import { ShoppingCart, Star, Flame } from "lucide-react";
import productComposite from "@/assets/product-composite.jpg";
import productGloves from "@/assets/product-gloves.jpg";
import productMasks from "@/assets/product-masks.jpg";
import productProphy from "@/assets/product-prophy.jpg";
import productBurs from "@/assets/product-burs.jpg";
import productCement from "@/assets/product-cement.jpg";
import productAnesthetic from "@/assets/product-anesthetic.jpg";

const ESSENTIALS = [
  { id: 1, name: "Composite Resin Syringes", brand: "3M ESPE", price: "$48.99", unit: "/pk 10", rating: 4.8, reviews: 312, img: productComposite, availability: "In Stock" },
  { id: 2, name: "Nitrile Exam Gloves", brand: "Medline", price: "$22.50", unit: "/box 100", rating: 4.7, reviews: 891, img: productGloves, availability: "In Stock" },
  { id: 3, name: "Procedure Face Masks", brand: "Crosstex", price: "$14.99", unit: "/box 50", rating: 4.6, reviews: 543, img: productMasks, availability: "In Stock" },
  { id: 4, name: "Prophy Paste Mint", brand: "Dentsply", price: "$31.00", unit: "/jar 200g", rating: 4.9, reviews: 204, img: productProphy, availability: "Ships Tomorrow" },
  { id: 5, name: "Carbide Bur Set", brand: "SS White", price: "$29.95", unit: "/set 12", rating: 4.7, reviews: 178, img: productBurs, availability: "In Stock" },
  { id: 6, name: "Glass Ionomer Cement", brand: "GC America", price: "$54.00", unit: "/kit", rating: 4.5, reviews: 96, img: productCement, availability: "In Stock" },
  { id: 7, name: "Lidocaine 2% w/ Epi", brand: "Novocol", price: "$38.50", unit: "/box 50", rating: 4.9, reviews: 427, img: productAnesthetic, availability: "In Stock" },
];

const EssentialsStarterV3 = () => (
  <section className="bg-background">
    <div className="container py-12">
      {/* Header */}
      <div className="flex items-end justify-between mb-7">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-[hsl(22_87%_93%)] text-[hsl(22_87%_35%)] text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
            <Flame className="h-3.5 w-3.5" />
            Most Ordered
          </div>
          <h2 className="text-xl font-bold text-foreground">Start with the essentials</h2>
          <p className="text-sm text-muted-foreground mt-0.5">The products every practice keeps in stock</p>
        </div>
        <Link to="/category/all-products" className="text-sm font-semibold text-primary hover:underline hidden sm:block">
          View all →
        </Link>
      </div>

      {/* Product list */}
      <div className="flex flex-col gap-2">
        {ESSENTIALS.map((product) => (
          <div
            key={product.id}
            className="group flex items-center gap-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md px-4 py-3 transition-all duration-200"
          >
            {/* Image */}
            <div className="w-14 h-14 rounded-lg bg-muted/40 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">{product.brand}</p>
              <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-2.5 w-2.5"
                      fill={i < Math.floor(product.rating) ? "hsl(22 87% 61%)" : "none"}
                      stroke={i < Math.floor(product.rating) ? "hsl(22 87% 61%)" : "hsl(220 10% 80%)"}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-muted-foreground">{product.rating} ({product.reviews})</span>
              </div>
            </div>

            {/* Availability */}
            <div className="hidden sm:block shrink-0">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                product.availability === "In Stock"
                  ? "bg-[hsl(153_38%_91%)] text-[hsl(153_38%_25%)]"
                  : "bg-[hsl(22_87%_93%)] text-[hsl(22_87%_35%)]"
              }`}>
                {product.availability}
              </span>
            </div>

            {/* Price + Add */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right hidden xs:block">
                <span className="text-base font-bold text-primary">{product.price}</span>
                <span className="block text-[11px] text-muted-foreground">{product.unit}</span>
              </div>
              <button className="flex items-center gap-1 bg-primary hover:bg-[hsl(219_59%_33%)] text-primary-foreground text-xs font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
                <ShoppingCart className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          to="/category/all-products"
          className="inline-flex items-center gap-2 border border-border bg-card hover:border-primary hover:text-primary text-sm font-semibold text-foreground px-6 py-2.5 rounded-xl transition-all duration-200"
        >
          View full catalog →
        </Link>
      </div>
    </div>
  </section>
);

export default EssentialsStarterV3;
