import { useState } from "react";
import { ArrowRight, Stethoscope, Scissors, Baby, Smile, Layers, Syringe, ChevronRight } from "lucide-react";

const PRACTICE_TYPES = [
  { id: "general", label: "General Practice", icon: Stethoscope, color: "hsl(219 59% 39%)", bg: "hsl(219 59% 95%)" },
  { id: "orthodontics", label: "Orthodontics", icon: Smile, color: "hsl(185 45% 32%)", bg: "hsl(185 45% 94%)" },
  { id: "oral-surgery", label: "Oral Surgery", icon: Scissors, color: "hsl(260 40% 40%)", bg: "hsl(260 40% 94%)" },
  { id: "pediatric", label: "Pediatric", icon: Baby, color: "hsl(22 87% 42%)", bg: "hsl(22 87% 94%)" },
  { id: "periodontics", label: "Periodontics", icon: Layers, color: "hsl(153 38% 30%)", bg: "hsl(153 38% 92%)" },
  { id: "endodontics", label: "Endodontics", icon: Syringe, color: "hsl(0 60% 40%)", bg: "hsl(0 60% 94%)" },
];

const LOOKING_FOR = [
  { id: "consumables", label: "Consumables & Supplies" },
  { id: "equipment", label: "Equipment & Instruments" },
  { id: "preventatives", label: "Preventatives & Prophy" },
  { id: "anesthetics", label: "Anesthetics & Sedation" },
  { id: "ppe", label: "PPE & Infection Control" },
  { id: "explore", label: "Just Exploring" },
];

interface WelcomeHeroV3Props {
  onComplete: (practice: string, lookingFor: string) => void;
}

const WelcomeHeroV3 = ({ onComplete }: WelcomeHeroV3Props) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handlePracticeSelect = (id: string) => {
    setSelectedPractice(id);
    setTimeout(() => setStep(2), 280);
  };

  const handleLookingForSelect = (id: string) => {
    setDismissed(true);
    onComplete(selectedPractice ?? "general", id);
  };

  return (
    <section className="bg-gradient-to-br from-[hsl(219_59%_96%)] via-[hsl(0_0%_100%)] to-[hsl(168_38%_95%)] border-b border-border">
      <div className="container max-w-4xl mx-auto px-4 py-14">

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= 1 ? "bg-primary" : "bg-border"}`} />
          <div className={`h-1.5 w-12 rounded-full transition-all duration-500 ${step >= 2 ? "bg-primary" : "bg-border"}`} />
        </div>

        {/* Step 1 — Practice Type */}
        <div className={`transition-all duration-400 ${step === 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none absolute"}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Welcome to Safco Dental
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3 tracking-tight">
              Let's get you what you need, faster
            </h1>
            <p className="text-muted-foreground text-base max-w-md mx-auto">
              Tell us about your practice and we'll personalise your experience in seconds.
            </p>
          </div>

          <p className="text-center text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
            What type of practice are you?
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PRACTICE_TYPES.map(({ id, label, icon: Icon, color, bg }) => (
              <button
                key={id}
                onClick={() => handlePracticeSelect(id)}
                className={`group flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                  selectedPractice === id
                    ? "border-primary shadow-md -translate-y-0.5"
                    : "border-border bg-card hover:border-primary/40"
                }`}
                style={{ backgroundColor: selectedPractice === id ? bg : undefined }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: bg, color }}
                >
                  <Icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                </div>
                <span className="text-sm font-medium text-foreground leading-tight">{label}</span>
              </button>
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => { setDismissed(true); onComplete("general", "explore"); }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Skip — I'll browse on my own
            </button>
          </div>
        </div>

        {/* Step 2 — What are you looking for */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-400">
            <div className="text-center mb-10">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                ← Back
              </button>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                What are you looking for today?
              </h2>
              <p className="text-muted-foreground text-sm">
                We'll highlight the most relevant products for you.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {LOOKING_FOR.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleLookingForSelect(id)}
                  className="group flex items-center justify-between p-4 rounded-xl border-2 border-border bg-card text-left hover:border-primary hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-sm font-medium text-foreground">{label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WelcomeHeroV3;
