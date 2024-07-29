<template>
  <div class="offers">
    <div class="offers__dropdown-container">
      <div class="offers__dropdown">
        <button @click="toggleDropdown" class="offers__dropdown-button">
          {{ selectedCategory }}
          <span
            class="offers__dropdown-icon"
            :class="{ open: isDropdownOpen }"
          ></span>
        </button>
        <div v-if="isDropdownOpen" class="offers__dropdown-content">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="offers__category-group"
          >
            <a
              href="#"
              @click="selectCategory(category.name)"
              class="offers__category-name"
              >{{ category.name }}</a
            >
            <a
              v-for="subcategory in category.subcategories"
              :key="subcategory"
              href="#"
              @click="selectCategory(subcategory)"
              class="offers__subcategory-name"
            >
              {{ subcategory }}
            </a>
          </div>
        </div>
      </div>
      <div class="offers__grid">
        <div v-for="offer in offers" :key="offer.id" class="offers__card">
          <div class="offers__image-container">
            <img :src="offer.image" :alt="offer.title" class="offers__image" />
            <div class="offers__meta">
              <div class="offers__meta-container">
                <div v-if="!offer.hidden" class="offers__views">
                  <ViewsIcon class="offers__views-img" />
                  <div class="offers__views-text">{{ offer.views }}</div>
                </div>
                <div v-if="!offer.hidden" class="offers__days">
                  <DateIcon class="offers__views-img" />
                  <div class="offers__days-text">{{ offer.daysAgo }} дня</div>
                </div>
              </div>
              <button
                v-if="!offer.hidden"
                @click="hideOffer(offer)"
                class="offers__hide-button"
              >
                ✕
              </button>
            </div>
          </div>
          <div class="offers__details">
            <p class="offers__price">{{ formatPrice(offer.price) }} ₽</p>
            <h2 class="offers__title">{{ offer.title }}</h2>
            <hr class="offers__divider" />
            <div v-if="!offer.hidden" class="offers__promotion">
              <span v-if="!offer.promoting" class="offers__promotion-text"
                >Увеличьте количество просмотров</span
              >
              <button
                v-if="!offer.promoting"
                @click="promoteOffer(offer)"
                class="offers__promotion-button"
              >
                Продвигать
              </button>
              <span v-if="offer.promoting" class="offers__promoting-text-hidden"
                >Объявление продвигается</span
              >
            </div>
            <div v-if="offer.hidden" class="offers__hidden">
              <span class="offers__hidden-text">Объявление скрыто</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateIcon from "~/assets/images/offers/Date.vue";
import ViewsIcon from "~/assets/images/offers/Views.vue";
import { useOffersStore } from "~/stores/offers";

export default {
  components: {
    DateIcon,
    ViewsIcon,
  },
  data() {
    return {
      offers: [],
      isDropdownOpen: false,
      selectedCategory: "Все категории",
      categories: [
        {
          name: "Все категории",
          subcategories: [],
        },
        {
          name: "Автомобили",
          subcategories: ["Спортивные", "Грузовые", "Семейные"],
        },
        {
          name: "Недвижимость",
          subcategories: ["Квартиры", "Дома", "Коммерческая"],
        },
        {
          name: "Электроника",
          subcategories: ["Телефоны", "Компьютеры", "Аудио"],
        },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.isDropdownOpen = false;
      // Здесь можно добавить логику фильтрации объявлений по выбранной категории
    },
    formatPrice(price) {
      return price.toLocaleString("ru-RU");
    },
    promoteOffer(offer) {
      offer.promoting = true;
    },
    hideOffer(offer) {
      offer.hidden = true;
      offer.promoting = false;
    },
    async fetchOffers() {
      const offersStore = useOffersStore();
      await offersStore.fetchOffers();
      this.offers = offersStore.offers.map((offer) => ({
        ...offer,
        promoting: false,
        hidden: false,
      }));
    },
  },
  mounted() {
    this.fetchOffers();
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/offers/offers.scss";
</style>
