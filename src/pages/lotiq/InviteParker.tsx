import { useState } from "react";
import { AppLayout } from "@/components/lotiq/AppLayout";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function InviteParker() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });

  const canSubmit = form.email.trim() || form.phone.trim();

  const handleSubmit = () => {
    toast({ title: "Invite sent", description: `Invitation sent to ${form.name || form.email || form.phone}` });
    navigate(`/property/${id || "prop-1"}/parkers`);
  };

  return (
    <AppLayout
      title="Invite Parker"
      headerLeft={
        <button onClick={() => navigate(`/property/${id || "prop-1"}/parkers`)} className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center">
          <ArrowLeft className="h-4 w-4 text-foreground" />
        </button>
      }
    >
      <div className="space-y-5">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name (optional)</label>
          <Input
            placeholder="e.g. James Wilson"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-muted/50 border-0 rounded-xl h-11"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
          <Input
            placeholder="parker@email.com"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-muted/50 border-0 rounded-xl h-11"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone Number</label>
          <Input
            placeholder="+1 (555) 123-456"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-muted/50 border-0 rounded-xl h-11"
          />
          <p className="text-[10px] text-muted-foreground mt-1">At least one of email or phone is required</p>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Notes (optional)</label>
          <Textarea
            placeholder="e.g. Unit 204 Shop A12"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="bg-muted/50 border-0 rounded-xl min-h-[80px] resize-none"
          />
        </div>

        <div className="bg-muted/50 rounded-xl p-4">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Permission scope:</span> This invitation applies to the active property only. The parker will add their vehicles after accepting the invite.
          </p>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full h-12 rounded-xl text-sm font-semibold gap-2"
        >
          <Send className="h-4 w-4" />
          Send Invite
        </Button>
      </div>
    </AppLayout>
  );
}
