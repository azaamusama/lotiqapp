import { AppLayout } from "@/components/lotiq/AppLayout";
import { Card } from "@/components/ui/card";
import { Bell, HelpCircle, FileText, ShieldCheck, Lock, LogOut, ChevronRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const sections = [
  {
    label: "NOTIFICATIONS",
    items: [
      { icon: Bell, title: "Notifications", subtitle: "Choose how you receive system alerts", path: "/notifications" },
    ],
  },
  {
    label: "SYSTEM & SUPPORT",
    items: [
      { icon: HelpCircle, title: "Help & Support", subtitle: "Contact support and view documentation", path: "/settings/help" },
    ],
  },
  {
    label: "TERMS & POLICIES",
    items: [
      { icon: FileText, title: "Terms & Condition", path: "/settings/terms" },
      { icon: ShieldCheck, title: "Privacy Policy", path: "/settings/privacy" },
    ],
  },
  {
    label: "SECURITY",
    items: [
      { icon: Lock, title: "Change Password", subtitle: "Update your account password", path: "/settings/password" },
    ],
  },
];

export default function Settings() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <AppLayout title="Settings">
      <div className="space-y-6">
        {/* Appearance */}
        <div>
          <p className="text-[11px] font-semibold text-muted-foreground tracking-wider mb-2.5 px-1">
            APPEARANCE
          </p>
          <Card className="flex items-center gap-3 p-3.5 shadow-card">
            <div className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              {theme === "dark" ? <Moon className="h-4 w-4 text-muted-foreground" /> : <Sun className="h-4 w-4 text-muted-foreground" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Toggle dark theme</p>
            </div>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
          </Card>
        </div>

        {sections.map((section) => (
          <div key={section.label}>
            <p className="text-[11px] font-semibold text-muted-foreground tracking-wider mb-2.5 px-1">
              {section.label}
            </p>
            <div className="space-y-2">
              {section.items.map((item) => (
                <Card
                  key={item.title}
                  className="flex items-center gap-3 p-3.5 cursor-pointer hover:shadow-elevated transition-all shadow-card"
                  onClick={() => item.path && navigate(item.path)}
                >
                  <div className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    {item.subtitle && (
                      <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                    )}
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </Card>
              ))}
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          className="w-full border-destructive/30 text-destructive hover:bg-destructive/10 mt-4 shadow-subtle"
          onClick={() => navigate("/login")}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </Button>

        <p className="text-center text-xs text-muted-foreground pb-4">LotIQ v1.0.0</p>
      </div>
    </AppLayout>
  );
}
