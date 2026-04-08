import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft, CheckCircle2, MapPin, ChevronRight, Shield } from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const TOTAL_STEPS = 3;
const stepLabels = ["Create Account", "Business Details", "Confirmation"];

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  // Step 1
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState<"landlord" | "manager">("landlord");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Step 2
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("United States");
  const [timezone, setTimezone] = useState("United States");
  const [subStep, setSubStep] = useState<"details" | "map">("details");

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const back = () => {
    if (step === 1 && subStep === "map") { setSubStep("details"); return; }
    if (step === 0) navigate(-1);
    else setStep((s) => s - 1);
  };

  const progressPercent = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
      {/* Header — matches PropertySetup */}
      <div className="sticky top-0 z-20 bg-background">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={back} className="p-1">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-bold text-sm">Lot IQ</span>
          </div>
          <span className="text-xs text-muted-foreground">
            Step {step + 1} of {TOTAL_STEPS}
          </span>
        </div>
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="px-4 py-2 border-b border-border">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="text-primary">●</span> {stepLabels[step]}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-5">
        {/* STEP 1: Create Account */}
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-foreground">Create your account</h2>
              <p className="text-sm text-muted-foreground mt-1">Get started with LotIQ.</p>
            </div>
            <div className="space-y-4">
              <Field label="Full Name">
                <Input placeholder="Jane Smith" value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-1.5" />
              </Field>
              <Field label="Company Name">
                <Input placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="mt-1.5" />
              </Field>

              {/* Role toggle */}
              <div>
                <Label className="text-xs text-muted-foreground">Role</Label>
                <div className="flex gap-2 mt-1.5">
                  {(["landlord", "manager"] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`flex-1 h-10 rounded-xl border-2 text-xs font-medium transition-colors ${
                        role === r
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {r === "landlord" ? "Landlord" : "Property Manager"}
                    </button>
                  ))}
                </div>
              </div>

              <Field label="Work Email">
                <Input type="email" placeholder="jan@company.com" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} className="mt-1.5" />
              </Field>
              <Field label="Phone Number">
                <Input type="tel" placeholder="+1 (555) 000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1.5" />
              </Field>
              <Field label="Password">
                <div className="relative mt-1.5">
                  <Input
                    type={showPw ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </Field>
              <Field label="Confirm Password">
                <div className="relative mt-1.5">
                  <Input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pr-10"
                  />
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </Field>
            </div>
          </div>
        )}

        {/* STEP 2: Business Details */}
        {step === 1 && subStep === "details" && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-foreground">Business details</h2>
              <p className="text-sm text-muted-foreground mt-1">Tell us about your business.</p>
            </div>
            <div className="space-y-4">
              <Field label="Business Name">
                <Input placeholder="Sunset Plaza" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="mt-1.5" />
              </Field>
              <Field label="Type">
                <Select value={businessType} onValueChange={setBusinessType}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select Type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="mixed">Mixed Use</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Address">
                <Input placeholder="123 Main St, City, State" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1.5" />
              </Field>
              <Field label="Country / Region">
                <Input value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1.5" />
              </Field>
              <Field label="Timezone">
                <Input value={timezone} onChange={(e) => setTimezone(e.target.value)} className="mt-1.5" />
              </Field>
            </div>

            <button
              type="button"
              onClick={() => setSubStep("map")}
              className="w-full h-11 rounded-xl border border-border flex items-center justify-center gap-2 text-sm text-muted-foreground hover:bg-muted transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Add Location Automatically
            </button>
          </div>
        )}

        {step === 1 && subStep === "map" && (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-foreground">Confirm location</h2>
              <p className="text-sm text-muted-foreground mt-1">Drag pin to adjust location.</p>
            </div>
            <div className="w-full h-64 rounded-xl bg-muted flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{address || "New York, NY"}</p>
                <p className="text-xs text-muted-foreground mt-1">Drag pin to adjust location</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Confirmation */}
        {step === 2 && (
          <div className="space-y-6 py-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Your request has been submitted.</h2>
              <p className="text-sm text-muted-foreground mt-1">Here's what happens next:</p>
            </div>

            <div className="space-y-4">
              {[
                { num: 1, text: "LotIQ reviews your details" },
                { num: 2, text: "Finalizes pricing" },
                { num: 3, text: "Schedules installation" },
              ].map((item) => (
                <div key={item.num} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{item.num}</span>
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom button — matches PropertySetup */}
      <div className="sticky bottom-0 bg-background border-t border-border px-4 py-3">
        {step === 1 && subStep === "map" ? (
          <Button className="w-full h-12 rounded-xl text-base font-semibold" onClick={() => { setSubStep("details"); next(); }}>
            Save Location
          </Button>
        ) : step === 2 ? (
          <Button className="w-full h-12 rounded-xl text-base font-semibold" onClick={() => navigate("/login")}>
            Open Email
          </Button>
        ) : (
          <Button className="w-full h-12 rounded-xl text-base font-semibold" onClick={next}>
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
