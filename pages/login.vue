<template>
  <div class="login__container">
    <h1 class="login__title">Вход в систему</h1>
    <form @submit.prevent="login" class="login__form">
      <div class="login__input-container">
        <label for="username" class="login__label">Имя пользователя</label>
        <input
          v-model="username"
          id="username"
          class="login__input"
          type="text"
          required
        />
      </div>
      <div class="login__input-container">
        <label for="password" class="login__label">Пароль</label>
        <input
          v-model="password"
          id="password"
          class="login__input"
          type="password"
          required
        />
      </div>
      <button type="submit" class="login__button">Войти</button>
    </form>
    <p v-if="error" class="login__error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const error = ref("");
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
  try {
    await authStore.login(username.value, password.value);
    router.push("/offers");
  } catch (err) {
    error.value = "Неверное имя пользователя или пароль";
  }
};

definePageMeta({
  layout: "login",
});
</script>

<style scoped lang="scss">
@import "~/assets/login/login.scss";
</style>
