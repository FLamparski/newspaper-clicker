export enum BuildingId {
  PAPER_BOY = "PAPER_BOY",
  LASER_PRINTER = "LASER_PRINTER",
  MOLE_SKIN_NOTEBOOK = "MOLE_SKIN_NOTEBOOK",
  POLICE_SCANNER = "POLICE_SCANNER",
  CAMERA = "CAMERA",
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
  MOLE_SKIN_NOTEBOOK: {
    id: BuildingId.MOLE_SKIN_NOTEBOOK,
    order: 2,
    displayName: "Mole Skin Notebook",
    flavourText: "Not made of real moles since last week",
    baseCost: 60,
    costMultiplier: 1.5,
    ppsValue: 10,
  },
  CAMERA: {
    id: BuildingId.CAMERA,
    order: 3,
    displayName: "Camera",
    flavourText: "Seeing is believing",
    baseCost: 100,
    costMultiplier: 1.7,
    ppsValue: 30,
  },
  POLICE_SCANNER: {
    id: BuildingId.POLICE_SCANNER,
    order: 4,
    displayName: "Police Scanner",
    flavourText: "Get those juicy crime stories fast",
    baseCost: 250,
    costMultiplier: 1.8,
    ppsValue: 50,
  },
};
