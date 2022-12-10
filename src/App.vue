<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import router from "@/router/router";

onMounted(() =>
  localStorage.getItem("token") ? router.push("/") : router.push("/login")
);
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
