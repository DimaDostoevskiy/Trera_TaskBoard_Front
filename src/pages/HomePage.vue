<template>
  <h1>Home Page</h1>
  <button @click="signOut" type="button">LogOut</button>
  <h4>{{store.token}}</h4>
</template>

<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
import router from "@/router/router";

const store = useAuthStore();

const signOut = () => {
  store.setToken(null);
  localStorage.clear();
  router.push(`/signin`);
};
</script>
