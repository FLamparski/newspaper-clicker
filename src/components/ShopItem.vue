<script lang="ts" setup>
import { allBuildings, BuildingId } from "@/game-data/buildings";
import { useClickerStore } from "@/state/clickerStore";
import { computed } from "vue";

const clickerStore = useClickerStore();

const props = defineProps<{
  upgradeId: BuildingId;
}>();

const upgrade = computed(() => allBuildings[props.upgradeId]);
const price = computed(() =>
  Math.floor(clickerStore.getUpgradePrice(props.upgradeId))
);
const canAfford = computed(() =>
  clickerStore.canAffordUpgrade(props.upgradeId)
);
const numOwned = computed(() => clickerStore.buildings[props.upgradeId]);
</script>

<template>
  <div class="shop-item">
    <h3>{{ upgrade.displayName }}</h3>
    <p class="flavour">{{ upgrade.flavourText }}</p>
    <button
      type="button"
      :disabled="!canAfford"
      @click="() => clickerStore.buyUpgrade(props.upgradeId)"
    >
      🗞️ {{ price }}
    </button>
    <p class="num-owned" v-if="numOwned > 0">{{ numOwned }} owned</p>
  </div>
</template>

<style>
.shop-item {
  display: grid;
  grid-template-columns: 3fr 1fr;
  max-width: 500px;
}

.shop-item > h3 {
  grid-row: 1;
  grid-column: 1;
  margin: 0;
  align-self: center;
  text-align: left;
  padding-right: 1rem;
}

.shop-item > .flavour {
  grid-row: 2;
  grid-column: 1;
  font-size: 0.8rem;
  font-style: italic;
  text-align: left;
  padding-right: 1rem;
}

.shop-item > button {
  grid-row: 1;
  grid-column: 2;
}

.shop-item > .num-owned {
  grid-row: 2;
  grid-column: 2;
}
</style>
