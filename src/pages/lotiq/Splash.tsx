import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding", { replace: true }), 1800);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-sidebar text-sidebar-foreground flex flex-col items-center justify-center px-6">
      <div className="animate-fade-in flex flex-col items-center gap-5 text-center">
        <div className="w-20 h-20 rounded-2xl border border-sidebar-border bg-sidebar-accent flex items-center justify-center shadow-float">
          <Shield className="h-10 w-10 text-sidebar-primary" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-sidebar-foreground">
          Lot<span className="text-sidebar-primary">IQ</span>
        </h1>
        <p className="text-sm text-sidebar-foreground/70">The operating system for physical property</p>
        <div className="mt-3 h-1 w-16 overflow-hidden rounded-full bg-sidebar-accent">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-sidebar-primary" />
        </div>
      </div>
    </div>
  );
}
