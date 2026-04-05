import evidence1 from "@/assets/evidence-1.jpg";
import evidence2 from "@/assets/evidence-2.jpg";
import evidence3 from "@/assets/evidence-3.jpg";
import trashEvidence1 from "@/assets/evidence-trash-1.jpg";
import trashEvidence2 from "@/assets/evidence-trash-2.jpg";

export type VehicleStatus = "allowed" | "grace" | "violation" | "tow_requested" | "trash_overflow" | "ev";

export interface StatusIncident {
  id: string;
  plate: string;
  vehicleType: string;
  status: VehicleStatus;
  description: string;
  zone: string;
  camera: string;
  time: string;
  timestamp: string;
  images: string[];
  rulesTriggered: string[];
  towTimeline?: { action: string; time: string }[];
}

export const statusIncidents: StatusIncident[] = [
  {
    id: "si-1", plate: "ABC-1234", vehicleType: "Standard", status: "allowed",
    description: "Registered vehicle · Unit 204",
    zone: "Lot A - Entrance", camera: "CAM-001", time: "17 minutes ago",
    timestamp: "2026-04-02T14:30:00Z", images: [evidence1, evidence2, evidence3],
    rulesTriggered: [],
  },
  {
    id: "si-2", plate: "XYZ-5678", vehicleType: "EV · Plugged in", status: "allowed",
    description: "EV charging · registered guest",
    zone: "Lot B - EV Zone", camera: "CAM-003", time: "27 minutes ago",
    timestamp: "2026-04-02T14:20:00Z", images: [evidence1],
    rulesTriggered: [],
  },
  {
    id: "si-3", plate: "N/A", vehicleType: "Dumpster Area", status: "trash_overflow",
    description: "Trash overflow detected · Dumpster at capacity",
    zone: "Lot C - Service Area", camera: "CAM-004", time: "15 minutes ago",
    timestamp: "2026-04-02T14:32:00Z", images: [trashEvidence1, trashEvidence2],
    rulesTriggered: ["Trash overflow detection active", "Sanitation compliance violation"],
  },
  {
    id: "si-4", plate: "ABC-1234", vehicleType: "EV · Not Plugged", status: "violation",
    description: "EV spot · not charging",
    zone: "Lot B - EV Zone", camera: "CAM-003", time: "about 1 hour ago",
    timestamp: "2026-04-02T13:45:00Z", images: [evidence1, evidence2, evidence3],
    rulesTriggered: ["Not on authorized vehicle list", "After-hours enforcement active (10 PM – 6 AM)", "Reserved parking zone violation"],
  },
  {
    id: "si-5", plate: "JKL-7890", vehicleType: "Standard", status: "tow_requested",
    description: "Unauthorized parking · after hours",
    zone: "Lot C - Reserved", camera: "CAM-005", time: "about 2 hours ago",
    timestamp: "2026-04-02T12:47:00Z", images: [evidence1, evidence2, evidence3],
    rulesTriggered: ["Not on authorized vehicle list", "After-hours enforcement active (10 PM – 6 AM)", "Reserved parking zone violation"],
    towTimeline: [
      { action: "Tow Requested", time: "Feb 7, 3:47 PM" },
      { action: "Tow Truck Dispatched", time: "Feb 7, 3:52 PM" },
    ],
  },
];
