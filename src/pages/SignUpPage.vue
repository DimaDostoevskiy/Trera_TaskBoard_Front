<template>
  <h1>SignUp</h1>
  <input v-model="name" type="text" placeholder="name" />
  <input v-model="login" type="text" placeholder="login" />
  <input v-model="password" type="password" placeholder="password" />
  <button @click="signUp" type="button">SignUp</button>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/useAuthStore";
import router from "@/router/router";
import api from "@/api/api";

const store = useAuthStore();

const login = ref("");
const password = ref("");
const name = ref("");

const signUp = async () => {
  if (!(await api.requestSignUp(name.value, login.value, password.value)))
    return;
  const token = await api.requestSignIn(login.value, password.value);
  if (!token) return;
  store.setToken(token);
  localStorage.setItem(`token`, token);
  router.push(`/`);
};
</script>
