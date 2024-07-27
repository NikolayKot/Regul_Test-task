<template>
    <div class="header__container">
        <div class="header__logo-container">
            <logo class="header__logo"/>
            <button class="header__category-button">Все категории</button>
        </div>

        <div class="header__info-container">
            <div>Ростов-на-Дону</div>
            <a class="header__offers-link" href="/offers">Разместить обьявление</a>
            <button class="header__info-button">
                <BurgerIcon class="header__burger-icon" />
                <img src="~/assets/images/header/avatar-placeholder.png" alt="User avatar" class="header__user-avatar" />
            </button>
        </div>
    </div>
</template>

<script>
import Logo from "~/assets/images/header/Logo.vue";
import BurgerIcon from "~/assets/images/header/BurgerIcon.vue";

export default {
    components: {
        Logo,
        BurgerIcon
    },
}
</script>

<style scoped lang="scss">
@import "~/assets/index.scss";
</style>
