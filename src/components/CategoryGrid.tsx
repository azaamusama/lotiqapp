import { Gem, FlaskConical, Shield, Wrench, Microscope, Syringe, Stethoscope, Package } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { name: "Burs & Diamonds", icon: Gem, count: "2,400+", slug: "burs-diamonds" },
  { name: "Restorative", icon: FlaskConical, count: "3,100+", slug: "restorative" },
  { name: "Infection Control", icon: Shield, count: "1,800+", slug: "infection-control" },
  { name: "Equipment", icon: Wrench, count: "950+", slug: "equipment" },
  { name: "Laboratory", icon: Microscope, count: "2,200+", slug: "laboratory" },
  { name: "Anesthetics", icon: Syringe, count: "600+", slug: "anesthetics" },
  { name: "Preventive", icon: Stethoscope, count: "1,200+", slug: "preventive" },
  { name: "All Products", icon: Package, count: "30,000+", slug: "all-products" },
];

const CategoryGrid = () => {
  return (
    <section className="py-4">
      <div className="container">
        <h2 className="text-base font-bold text-foreground mb-3">Shop by Category</h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {CATEGORIES.map(({ name, icon: Icon, count, slug }) => (
            <Link
              key={name}
              to={`/category/${slug}`}
              className="flex flex-col items-center gap-1.5 p-3 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-[10px] font-medium text-foreground text-center leading-tight">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;

