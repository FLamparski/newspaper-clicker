import { BuildingId, allBuildings } from "@/game-data/buildings";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import ClickerState from "@/state/clickerState";

export const useClickerStore = defineStore("clicker", () => {
  const papersCount = ref(0);
  const papersEver = ref(0);
  const basePapersPerSecond = ref(0);
  const buildings = ref<Record<BuildingId, number>>({
    PAPER_BOY: 0,
    LASER_PRINTER: 0,
  });

  const shopAvailable = computed(() => papersEver.value > 10);

  const saveableState = computed<ClickerState>(() => ({
    _version: 1,
    papersCount: papersCount.value,
    papersEver: papersEver.value,
    basePapersPerSecond: basePapersPerSecond.value,
    buildings: { ...buildings.value },
  }));
  function loadState(state: ClickerState) {
    papersCount.value = state.papersCount;
    papersEver.value = state.papersEver;
    basePapersPerSecond.value = state.basePapersPerSecond;
    buildings.value = state.buildings;
  }

  function print() {
    papersCount.value++;
    papersEver.value++;
  }

  function tick(elapsedMs: number) {
    const elapsedSeconds = elapsedMs / 1000;
    const papersInTick = basePapersPerSecond.value * elapsedSeconds;
    papersCount.value += papersInTick;
    papersEver.value += papersInTick;
  }

  function getUpgradePrice(id: BuildingId): number {
    const { baseCost, costMultiplier } = allBuildings[id];
    const currentCount = buildings.value[id];
    return baseCost * Math.pow(costMultiplier, currentCount);
  }

  function canAffordUpgrade(id: BuildingId): boolean {
    const price = getUpgradePrice(id);
    return papersCount.value >= price;
  }

  function buyUpgrade(id: BuildingId) {
    const price = getUpgradePrice(id);
    papersCount.value -= price;
    buildings.value[id]++;
    basePapersPerSecond.value += allBuildings[id].ppsValue;
  }

  return {
    papersCount,
    papersEver,
    basePapersPerSecond,
    shopAvailable,
    buildings,
    saveableState,
    print,
    tick,
    getUpgradePrice,
    canAffordUpgrade,
    buyUpgrade,
    loadState,
  };
});
