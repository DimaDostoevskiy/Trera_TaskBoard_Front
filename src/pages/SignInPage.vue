<template>
  <h1>Login</h1>
  <input v-model="login" type="text" />
  <input v-model="password" type="password" />
  <button @click="signIn" type="button">Login</button>
  <a @click="router.push(`/signup`)">lalala</a>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore";
import router from "@/router/router";
import api from "@/api/api";

const store = useAuthStore();

const login = ref();
const password = ref();

const signIn = async () => {
  const token = await api.requestSignIn(login.value, password.value);
  if (!token) return;
  store.setToken(token);
  localStorage.setItem(`token`, token);
  router.push(`/`);
};
</script>
