import { useState } from "react";
import { AppLayout } from "@/components/lotiq/AppLayout";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Plus, Search, ChevronRight, Car } from "lucide-react";
import { Input } from "@/components/ui/input";

type TabKey = "active" | "invited" | "disabled";

const mockParkers = [
  { id: "p1", name: "Jeames Wilson", initials: "J", status: "active" as const, vehicles: 2, unit: "Unit 204", note: "" },
  { id: "p2", name: "Maria Garcia", initials: "M", status: "active" as const, vehicles: 1, unit: "Unit 312", note: "EV assigned" },
  { id: "p3", name: "Tom.chen@email.com", initials: "T", status: "invited" as const, vehicles: 0, unit: "Unit 108", note: "" },
  { id: "p4", name: "Lisa Park", initials: "L", status: "disabled" as const, vehicles: 1, unit: "Unit 405", note: "Former Tenant" },
];

const statusConfig = {
  active: { label: "Active", color: "text-[hsl(var(--lotiq-green))]", bg: "bg-[hsl(var(--lotiq-green))]/10" },
  invited: { label: "Pending", color: "text-[hsl(var(--lotiq-amber))]", bg: "bg-[hsl(var(--lotiq-amber))]/10" },
  disabled: { label: "Disabled", color: "text-muted-foreground", bg: "bg-muted" },
};

export default function AuthorizedParkers() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabKey>("active");
  const [search, setSearch] = useState("");

  const counts = {
    active: mockParkers.filter((p) => p.status === "active").length,
    invited: mockParkers.filter((p) => p.status === "invited").length,
    disabled: mockParkers.filter((p) => p.status === "disabled").length,
  };

  const filtered = mockParkers.filter(
    (p) =>
      p.status === tab &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout
      title="Authorized Parkers"
      headerLeft={
        <button onClick={() => navigate(`/property/${id || "prop-1"}`)} className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center">
          <ArrowLeft className="h-4 w-4 text-foreground" />
        </button>
      }
      headerRight={
        <button onClick={() => navigate(`/property/${id || "prop-1"}/parkers/invite`)} className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <Plus className="h-4 w-4 text-primary-foreground" />
        </button>
      }
    >
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, plate, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-muted/50 border-0 rounded-xl h-11"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(["active", "invited", "disabled"] as TabKey[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
              tab === t
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)} ({counts[t]})
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.map((parker) => {
          const sc = statusConfig[parker.status];
          return (
            <button
              key={parker.id}
              onClick={() => navigate(`/property/${id || "prop-1"}/parkers/${parker.id}`)}
              className="w-full flex items-center gap-3 p-4 bg-card rounded-2xl hover:bg-muted/30 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-foreground shrink-0">
                {parker.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground truncate">{parker.name}</p>
                  <span className={`text-[10px] font-medium ${sc.color}`}>{sc.label}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  {parker.vehicles > 0 && (
                    <>
                      <Car className="h-3 w-3" />
                      <span>{parker.vehicles} vehicle{parker.vehicles !== 1 ? "s" : ""}</span>
                      <span>·</span>
                    </>
                  )}
                  <span>{parker.unit}</span>
                  {parker.note && <><span>·</span><span>{parker.note}</span></>}
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
            </button>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-8">No parkers found</p>
        )}
      </div>
    </AppLayout>
  );
}
