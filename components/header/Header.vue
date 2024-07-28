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
      <button class="header__info-button">
        <BurgerIcon class="header__icon" />
        <img
          src="~/assets/images/header/avatar-placeholder.png"
          alt="User avatar"
          class="header__user-avatar"
        />
      </button>
    </div>
  </div>
</template>

<script>
import Logo from "~/assets/images/header/Logo.vue";
import BurgerIcon from "~/assets/images/header/BurgerIcon.vue";
import MapPoint from "~/assets/images/header/MapPoint.vue";
import CategorysIcon from "~/assets/images/header/CategorysIcon.vue";

export default {
  components: {
    Logo,
    BurgerIcon,
    MapPoint,
    CategorysIcon,
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/header/header.scss";
</style>
