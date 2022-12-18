<script lang="ts" setup>
import { BuildingId } from "@/game-data/buildings";
import { useClickerStore } from "@/state/clickerStore";
import ShopItem from "@/components/ShopItem.vue";

const clickerStore = useClickerStore();
</script>

<template>
  <h2>Shop</h2>
  <ShopItem :upgradeId="BuildingId.PAPER_BOY" />
  <ShopItem
    v-if="clickerStore.papersEver > 100"
    :upgradeId="BuildingId.LASER_PRINTER"
  />
</template>
