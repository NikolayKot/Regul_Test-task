<template>
  <div class="company__container">
    <img :src="company.logo" :alt="company.name" class="company__avatar" />
    <h2 class="company__name">{{ company.name }}</h2>
    <div class="company__rating-container">
      <div v-if="company.documentsVerified" class="company__verified">
        <VerifiedIcon />
        <div class="company__reviews">Документы проверены</div>
        <span class="company__dot"></span>
      </div>
      <div class="company__rating">
        <StarIcon />
        <div class="company__reviews">{{ company.rating }}</div>
        <span class="company__dot"></span>
      </div>
      <div class="company__reviews">{{ company.reviews }} отзывов</div>
    </div>
    <div class="company__phone-container">
      <button
        v-if="!showPhone"
        @click="togglePhone"
        class="company__phone-button"
      >
        Показать номер телефона
      </button>
      <div v-else class="company__phone-wrapper">
        <button @click="closePhone" class="company__phone-close-button">
          &times;
        </button>
        <div @click="copyToClipboard" class="company__phone">
          {{ company.phoneNumber }}
        </div>
      </div>
    </div>
    <div class="company__link-container">
      <a
        href="/offers"
        class="company__link"
        :class="{ 'company__link--active': isOffersPage }"
        >Товары и услуги</a
      >
      <a
        href="/agents"
        class="company__link"
        :class="{ 'company__link--active': isAgentsPage }"
      >
        Агенты
        <div class="company__link-agents">{{ company.agentsCount }}</div>
      </a>
      <a
        href="/"
        class="company__link"
        :class="{ 'company__link--active': isHomePage }"
        >О компании</a
      >
    </div>
  </div>
</template>

<script>
import { useCompanyStore } from "~/stores/company";
import { useRoute } from "vue-router";
import StarIcon from "~/assets/images/company/Star.vue";
import VerifiedIcon from "~/assets/images/company/Verified.vue";

export default {
  components: {
    StarIcon,
    VerifiedIcon,
  },
  setup() {
    const route = useRoute();
    return { route };
  },
  data() {
    return {
      showPhone: false,
      company: {
        logo: "",
        name: "",
        rating: 0,
        reviews: 0,
        phoneNumber: "",
        agentsCount: 0,
        documentsVerified: false,
      },
    };
  },
  computed: {
    isOffersPage() {
      return this.route.path === "/offers";
    },
    isAgentsPage() {
      return this.route.path === "/agents";
    },
    isHomePage() {
      return this.route.path === "/";
    },
  },
  methods: {
    togglePhone() {
      this.showPhone = true;
    },
    closePhone() {
      this.showPhone = false;
    },
    copyToClipboard() {
      navigator.clipboard
        .writeText(this.company.phoneNumber)
        .then(() => {
          alert("Номер телефона скопирован в буфер обмена");
        })
        .catch((err) => {
          console.error("Ошибка при копировании: ", err);
        });
    },
    async fetchCompanyData() {
      const companyStore = useCompanyStore();
      await companyStore.fetchCompanyData();
      this.company = { ...companyStore };
    },
  },
  mounted() {
    this.fetchCompanyData();
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/company/company.scss";
</style>
