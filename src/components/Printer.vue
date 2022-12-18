<script setup lang="ts">
import { useClickerStore } from "@/state/clickerStore";
import { computed } from "vue";

const clickerStore = useClickerStore();
const papersCount = computed(() => Math.floor(clickerStore.papersCount));
const ppsPretty = computed(
  () => Math.round(clickerStore.basePapersPerSecond * 100) / 100
);
</script>

<template>
  <div class="card">
    <button type="button" @click="clickerStore.print">
      📰 Print Newspaper
    </button>
    <p v-if="clickerStore.papersEver > 0">
      <strong>{{ papersCount }}</strong> paper{{
        papersCount === 1 ? "" : "s"
      }}
      in stock, <strong>{{ ppsPretty }}</strong> papers/s
    </p>
    <p v-else>A clicker game about newspapers.</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
