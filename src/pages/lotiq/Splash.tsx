import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lotiqLogo from "@/assets/lotiq-logo.svg";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding", { replace: true }), 1800);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sidebar px-6 text-sidebar-foreground">
      <div className="flex animate-fade-in flex-col items-center gap-5 text-center">
        <img src={lotiqLogo} alt="LotIQ" className="h-10 w-auto" />
        <p className="max-w-[240px] text-sm leading-6 text-sidebar-foreground/70">The operating system for physical property</p>
        <div className="mt-2 h-1 w-14 overflow-hidden rounded-full bg-sidebar-accent">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-sidebar-primary" />
        </div>
      </div>
    </div>
  );
}
