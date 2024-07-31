<template>
  <div class="header__container">
    <div class="header__logo-container">
      <logo class="header__logo" />
      <button class="header__category-button">
        <CategorysIcon />
        <div>Все категории</div>
      </button>
    </div>

    <div class="header__info-container">
      <div class="header__location-container">
        <MapPoint class="header__icon" />
        <div>Ростов-на-Дону</div>
      </div>
      <div class="header__divider"></div>
      <a class="header__offers-link" href="/offers">Разместить обьявление</a>
      <div class="header__user-menu">
        <button class="header__info-button" @click="toggleMenu">
          <BurgerIcon class="header__icon" />
          <img
            src="/assets/images/header/avatar-placeholder.png"
            alt="User avatar"
            class="header__user-avatar"
          />
        </button>
        <div v-if="isMenuOpen" class="header__menu">
          <NuxtLink
            v-if="!authStore.isAuthenticated"
            to="/login"
            class="header__menu-link"
            >Вход</NuxtLink
          >
          <a v-else @click="logout" href="#" class="header__menu-link">Выход</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";

import Logo from "~/assets/images/header/Logo.vue";
import BurgerIcon from "~/assets/images/header/BurgerIcon.vue";
import MapPoint from "~/assets/images/header/MapPoint.vue";
import CategorysIcon from "~/assets/images/header/CategorysIcon.vue";

export default defineComponent({
  components: {
    Logo,
    BurgerIcon,
    MapPoint,
    CategorysIcon,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    authStore() {
      return useAuthStore();
    },
    router() {
      return useRouter();
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    logout() {
      this.authStore.logout();
      this.router.push("/");
      this.isMenuOpen = false;
    },
  },
});
</script>

<style scoped lang="scss">
@import "~/assets/header/header.scss";
</style>
