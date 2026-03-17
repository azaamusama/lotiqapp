import { useState } from "react";
import { X, Mail, CheckCircle, ArrowRight, Clock, Tag, RefreshCw } from "lucide-react";

const AccountPromptV3 = () => {
  const [dismissed, setDismissed] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [resent, setResent] = useState(false);

  if (dismissed) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) setSubmitted(true);
  };

  const handleResend = () => {
    setResent(true);
    setTimeout(() => setResent(false), 3000);
  };

  return (
    <div className="bg-[hsl(219_59%_97%)] border-y border-[hsl(219_59%_88%)]">
      <div className="container py-6">

        {/* ── Post-submit confirmation ── */}
        {submitted ? (
          <div className="flex flex-col sm:flex-row items-center gap-5 max-w-2xl mx-auto text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[hsl(153_38%_91%)] flex items-center justify-center shrink-0">
              <CheckCircle className="h-6 w-6 text-[hsl(153_38%_30%)]" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground mb-0.5">We've received your details 🎉</p>
              <p className="text-sm text-muted-foreground">
                Check your email at <strong>{email}</strong> to verify your account and unlock saved orders, faster checkout, and exclusive pricing.
              </p>
              <button
                onClick={handleResend}
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline transition-colors"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${resent ? "animate-spin" : ""}`} />
                {resent ? "Email sent!" : "Didn't get the email? Resend confirmation"}
              </button>
            </div>
            <button onClick={() => setDismissed(true)} className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-border/50 transition-colors shrink-0">
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : !showSignup ? (
          /* ── Soft prompt ── */
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Save time on your next order</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Faster checkout</span>
                  <span className="flex items-center gap-1"><Tag className="h-3 w-3" /> Account-only pricing</span>
                  <span className="flex items-center gap-1"><RefreshCw className="h-3 w-3" /> Easy reorders</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowSignup(true)}
                className="flex items-center gap-1.5 bg-primary hover:bg-[hsl(219_59%_33%)] text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Create account
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Not now
              </button>
            </div>
          </div>
        ) : (
          /* ── Signup form ── */
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-foreground">Create your account in seconds</h3>
              <button type="button" onClick={() => setShowSignup(false)} className="p-1 text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 h-10 px-3 rounded-lg border border-input bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-10 px-3 rounded-lg border border-input bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 bg-primary hover:bg-[hsl(219_59%_33%)] text-primary-foreground text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              Get started — it's free
            </button>
            <p className="text-[11px] text-muted-foreground text-center mt-2">
              No credit card required. We'll send a quick verification email.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AccountPromptV3;
