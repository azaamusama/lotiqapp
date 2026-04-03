import { AppLayout } from "@/components/lotiq/AppLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <AppLayout
      title="Privacy Policy"
      headerLeft={
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate("/rules")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
      }
      headerRight={<div />}
    >
      <div className="prose prose-sm max-w-none text-foreground space-y-4">
        <p className="text-muted-foreground text-sm">
          LotIQ collects and processes information to provide and improve its property intelligence platform. This includes account details (such as name, email, and company), property and operational data, video and monitoring data (including footage and slip-and-fall requests), and technical data like device and usage information.
        </p>
        <p className="text-muted-foreground text-sm">
          We use this information to operate the platform, generate alerts and insights, process video requests, improve performance, and communicate with users. LotIQ does not sell personal data but may share information with trusted service providers or when required by law.
        </p>
        <p className="text-muted-foreground text-sm">
          Users are responsible for ensuring their use of surveillance and video data complies with applicable laws and regulations. We implement reasonable security measures to protect data, though no system is completely secure. Data is retained only as long as necessary for service delivery, and video data may be stored for limited periods.
        </p>
        <p className="text-muted-foreground text-sm">
          Depending on your location, you may have rights to access, update, or delete your data. LotIQ uses cookies to enhance user experience and may integrate with third-party services governed by their own policies. Continued use of the platform constitutes acceptance of this policy. For questions, contact support@lotiq.com.
        </p>
      </div>
    </AppLayout>
  );
}
