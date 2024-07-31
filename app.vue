<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const authStore = useAuthStore();
const route = useRoute();

onMounted(() => {
  authStore.initAuth();
});

const layout = computed(() => {
  return route.meta.layout || "default";
});
</script>

<style>
@import url("~/assets/css/font-styles.css");

html,
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  scroll-behavior: smooth;
}
</style>
