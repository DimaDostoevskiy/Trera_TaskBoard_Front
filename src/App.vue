<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import router from "@/router/router";

onMounted(() => {
  if (Math.random() > 0.5) {
    router.push("/");
  } else {
    router.push("/login");
  }
});
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
