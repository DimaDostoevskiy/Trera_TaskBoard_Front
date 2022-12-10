<template>
  <h1>Login</h1>
  <input type="text" />
  <input type="password" />
  <button @click="store.setToken" type="button">Login</button>
  <h4>{{ store.token }}</h4>
</template>

<script setup>
import { tokenStore } from "@/stores/store";
const store = tokenStore();


</script>
