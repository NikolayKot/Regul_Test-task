<template>
  <div class="about">
    <div class="about__description">
      <h2 class="about__title">О компании</h2>
      <p class="about__text">{{ company.description }}</p>
    </div>

    <div class="about__working-hours">
      <div class="about__hours-header" @click="toggleWorkingHours">
        <div class="about__hours-header-container">
          <h2 class="about__hours-title">Режим работы</h2>
          <span
            class="about__arrow"
            :class="{ 'about__arrow--open': showAllHours }"
          ></span>
        </div>
        <p class="about__first-day">{{ firstDay }}</p>
      </div>
      <div
        class="about__hours-content"
        :class="{ 'about__hours-content--open': showAllHours }"
      >
        <ul class="about__hours-list">
          <li
            v-for="(hours, day) in company.workingHours"
            :key="day"
            class="about__hours-item"
          >
            <span class="about__day">{{ getDayName(day) }}:</span>
            <span class="about__time">{{ hours }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="about__address">
      <div class="about__address-content">
        <h2 class="about__title">Местоположение</h2>
        <p class="about__address-text">{{ company.address }}</p>
      </div>
      <img src="/map.png" alt="Карта местоположения" class="about__map-image" />
    </div>
  </div>
</template>

<script>
import { useCompanyStore } from "~/stores/company";

export default {
  data() {
    return {
      company: useCompanyStore(),
      showAllHours: false,
    };
  },
  computed: {
    firstDay() {
      const firstDayKey = Object.keys(this.company.workingHours)[0];
      return `${this.getDayName(firstDayKey)}: ${this.company.workingHours[firstDayKey]}`;
    },
  },
  methods: {
    getDayName(day) {
      const days = {
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота",
        sunday: "Воскресенье",
      };
      return days[day];
    },
    toggleWorkingHours() {
      this.showAllHours = !this.showAllHours;
    },
  },
  async mounted() {
    await this.company.fetchCompanyData();
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/index.scss";
</style>
