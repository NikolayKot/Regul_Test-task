import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(username, password) {
      if (username === "admin" && password === "secret") {
        this.token = "fake-jwt-token";
        if (process.client) {
          localStorage.setItem("token", this.token);
        }
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout() {
      this.token = null;
      if (process.client) {
        localStorage.removeItem("token");
      }
    },
    initAuth() {
      if (process.client) {
        const token = localStorage.getItem("token");
        if (token) {
          this.token = token;
        }
      }
    },
    checkAuth() {
      if (process.client) {
        const token = localStorage.getItem("token");
        if (token) {
          // Здесь можно добавить проверку срока действия токена
          // Например, если токен - это JWT, можно декодировать его и проверить поле exp
          this.token = token;
        } else {
          this.token = null;
        }
      }
    },
  },
});
