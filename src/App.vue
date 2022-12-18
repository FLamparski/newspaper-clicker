<script setup lang="ts">
import Printer from "@/components/Printer.vue";
import Shop from "@/components/Shop.vue";
import { onMounted, ref } from "vue";
import { useClickerStore } from "@/state/clickerStore";
import { loadState, saveState } from "@/state/saveLoad";

const clickerStore = useClickerStore();

let lastTs = performance.now();
const lastSaveTs = ref(0);
function tick(ts: number) {
  const deltaMs = ts - lastTs;
  lastTs = ts;
  clickerStore.tick(deltaMs);

  if (ts - lastSaveTs.value > 5000) {
    saveState(clickerStore.saveableState);
    lastSaveTs.value = ts;
  }

  // requestAnimationFrame(tick);
  setTimeout(() => tick(performance.now()), 1000);
}

onMounted(() => {
  (window as any).cheats = {
    addCookies(n: number) {
      Array.from({ length: n }).forEach(clickerStore.print);
    },
  };

  const loadedState = loadState();
  if (loadedState) {
    clickerStore.loadState(loadedState);
  }

  tick(performance.now());
});
</script>

<template>
  <h1>Newspaper Clicker</h1>

  <Printer />
  <Shop v-if="clickerStore.shopAvailable" />

  <p>
    <small>Last saved: {{ lastSaveTs }}</small>
  </p>
</template>

<style scoped></style>
