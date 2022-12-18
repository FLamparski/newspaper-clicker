import { BuildingId } from "@/game-data/buildings";

export default interface ClickerState {
  _version: number;
  papersCount: number;
  papersEver: number;
  basePapersPerSecond: number;
  buildings: Record<BuildingId, number>;
}
