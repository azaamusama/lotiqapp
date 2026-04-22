import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Camera, CheckCircle2, CircleDot, Clock3, FileCheck2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import lotiqLogo from "@/assets/lotiq-logo.svg";

const steps = [
  {
    eyebrow: "Real-time visibility",
    headline: "See what’s happening on your property — in real time",
    body: "LotIQ monitors your property 24/7 using AI-powered cameras, giving you continuous visibility without on-site staff.",
    visual: "visibility",
  },
  {
    eyebrow: "Automated enforcement",
    headline: "Detect and act — automatically",
    body: "Parking violations, EV misuse, and safety incidents are detected instantly and handled with evidence-backed automation.",
    visual: "enforcement",
  },
  {
    eyebrow: "Evidence & control",
    headline: "Every action is backed by evidence",
    body: "Review incidents, verify activity, and maintain full control with clear timelines and visual proof.",
    visual: "evidence",
  },
] as const;

function VisibilityVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 shadow-float sm:p-4">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div>
          <p className="text-xs font-medium text-muted-foreground">North Lot</p>
          <p className="text-sm font-semibold text-card-foreground">Camera grid</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Live
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
        {["Entry", "EV Bay", "Loading", "Rear"].map((label, index) => (
          <div key={label} className="aspect-[4/3] rounded-xl border border-border bg-secondary p-2.5 sm:p-3">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>{label}</span>
              <Camera className="h-3 w-3" />
            </div>
            <div className="mt-6 h-2 rounded-full bg-muted-foreground/20" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-muted-foreground/15" />
            {index === 1 && <div className="mt-5 h-2 w-10 animate-pulse rounded-full bg-primary" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function EnforcementVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 shadow-float sm:p-4">
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-primary">Violation detected</p>
            <h3 className="mt-1 text-lg font-semibold text-card-foreground">Unauthorized parking</h3>
          </div>
          <ShieldCheck className="h-5 w-5 text-primary" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-medium">
          {["Detected", "Actioned", "Resolved"].map((item, index) => (
            <div key={item} className="rounded-lg border border-border bg-card px-2 py-2 text-muted-foreground">
              {index === 0 ? <CircleDot className="mx-auto mb-1 h-4 w-4 text-primary" /> : <CheckCircle2 className="mx-auto mb-1 h-4 w-4 text-primary" />}
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EvidenceVisual() {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 shadow-float sm:p-4">
      <div className="aspect-video rounded-xl bg-secondary p-3">
        <div className="h-full rounded-lg border border-border bg-background p-3">
          <div className="flex h-full items-end justify-between">
            <span className="rounded-md bg-card px-2 py-1 text-[10px] font-medium text-card-foreground shadow-subtle">CAM 04 · 8:42 PM</span>
            <FileCheck2 className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {["Evidence captured", "Manager review", "Action logged"].map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm">
            <Clock3 className="h-4 w-4 text-primary" />
            <span className="font-medium text-card-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OnboardingVisual({ type }: { type: (typeof steps)[number]["visual"] }) {
  if (type === "enforcement") return <EnforcementVisual />;
  if (type === "evidence") return <EvidenceVisual />;
  return <VisibilityVisual />;
}

export default function Onboarding() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];
  const isLast = activeStep === steps.length - 1;

  const handleContinue = () => {
    if (isLast) {
      navigate("/signup");
      return;
    }

    setActiveStep((current) => current + 1);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between">
          <img src={lotiqLogo} alt="LotIQ" className="h-8 w-auto" />
          <button onClick={() => navigate("/login")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Skip
          </button>
        </header>

        <section className="flex flex-1 flex-col justify-center gap-7 py-8 sm:gap-9 sm:py-10">
          <div key={step.headline} className="animate-fade-in space-y-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{step.eyebrow}</p>
              <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                {step.headline}
              </h1>
              <p className="max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-lg">{step.body}</p>
            </div>
          </div>

          <div key={step.visual} className="animate-fade-in">
            <OnboardingVisual type={step.visual} />
          </div>
        </section>

        <footer className="shrink-0 space-y-5 pb-2">
          <div className="flex items-center justify-center gap-2">
            {steps.map((item, index) => (
              <button
                key={item.eyebrow}
                onClick={() => setActiveStep(index)}
                className={`h-2 rounded-full transition-all ${index === activeStep ? "w-8 bg-primary" : "w-2 bg-muted"}`}
                aria-label={`Go to onboarding step ${index + 1}`}
              />
            ))}
          </div>
          <div className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row">
            <Button onClick={handleContinue} className="h-12 flex-1 rounded-xl font-semibold shadow-elevated transition-all hover:shadow-float">
              {isLast ? "Set up your property" : "Continue"}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {isLast && (
              <Button variant="outline" onClick={() => navigate("/login")} className="h-12 flex-1 rounded-xl font-semibold">
                Sign in
              </Button>
            )}
          </div>
        </footer>
      </div>
    </main>
  );
}