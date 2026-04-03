import { AppLayout } from "@/components/lotiq/AppLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TermsConditions() {
  const navigate = useNavigate();

  return (
    <AppLayout
      title="Terms & Condition"
      headerLeft={
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate("/rules")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
      }
      headerRight={<div />}
    >
      <div className="prose prose-sm max-w-none text-foreground">
        <h4 className="font-bold text-base">Overview</h4>
        <p className="text-muted-foreground text-sm">
          LotIQ is a property intelligence platform that provides alerts, analytics, and video-based insights across multiple properties. By using LotIQ, you agree to these terms.
        </p>

        <h4 className="font-bold text-base mt-6">Accounts</h4>
        <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
          <li>You are responsible for your account and credentials</li>
          <li>Provide accurate information</li>
          <li>We may suspend accounts for misuse</li>
        </ul>

        <h4 className="font-bold text-base mt-6">Acceptable Use</h4>
        <p className="text-muted-foreground text-sm">You may not:</p>
        <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
          <li>Use the platform unlawfully</li>
          <li>Access unauthorized data</li>
          <li>Misuse surveillance or video content</li>
        </ul>

        <h4 className="font-bold text-base mt-6">Data & Alerts</h4>
        <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
          <li>Alerts (e.g., slip risk, violations) are assistive insights, not guarantees</li>
          <li>Data accuracy may vary based on inputs and conditions</li>
        </ul>

        <h4 className="font-bold text-base mt-6">Slip-and-Fall Video Requests</h4>
        <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
          <li>Videos are generated only on request</li>
          <li>Requires: property, date, and time range</li>
          <li>Delivered within 24 hours (standard)</li>
          <li>Availability depends on recorded data</li>
        </ul>

        <h4 className="font-bold text-base mt-6">Video Usage</h4>
        <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
          <li>Access is limited to authorized properties</li>
          <li>Videos must not be shared or used unlawfully</li>
        </ul>

        <h4 className="font-bold text-base mt-6">Service Availability</h4>
        <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
          <li>Platform uptime is not guaranteed</li>
          <li>Downtime may occur due to maintenance or external factors</li>
        </ul>

        <h4 className="font-bold text-base mt-6">Liability</h4>
        <p className="text-muted-foreground text-sm">
          LotIQ is a decision-support tool. We are not liable for:
        </p>
        <ul className="text-muted-foreground text-sm list-disc pl-5 space-y-1">
          <li>Actions taken based on alerts or data</li>
          <li>Missed detections or delayed notifications</li>
          <li>Third-party integrations or towing outcomes</li>
        </ul>

        <h4 className="font-bold text-base mt-6">Changes</h4>
        <p className="text-muted-foreground text-sm">
          We may update these terms at any time. Continued use of the platform after changes constitutes acceptance.
        </p>

        <h4 className="font-bold text-base mt-6">Contact</h4>
        <p className="text-muted-foreground text-sm">
          For questions, contact support@lotiq.com.
        </p>
      </div>
    </AppLayout>
  );
}
