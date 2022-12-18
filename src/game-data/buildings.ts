export enum BuildingId {
  PAPER_BOY = "PAPER_BOY",
  LASER_PRINTER = "LASER_PRINTER",
}

export interface Building {
  id: BuildingId;
  order: number;
  displayName: string;
  flavourText: string;
  baseCost: number;
  costMultiplier: number;
  ppsValue: number;
}

export const allBuildings: Record<BuildingId, Building> = {
  PAPER_BOY: {
    id: BuildingId.PAPER_BOY,
    order: 0,
    displayName: "Paper Boy",
    flavourText: "Ageless and genderless",
    baseCost: 10,
    costMultiplier: 1.2,
    ppsValue: 0.1,
  },
  LASER_PRINTER: {
    id: BuildingId.LASER_PRINTER,
    order: 1,
    displayName: "Laser Printer",
    flavourText: "12% fewer jams than inkjet!",
    baseCost: 30,
    costMultiplier: 1.3,
    ppsValue: 5,
  },
};
