import { defineStore } from "pinia";

interface Offer {
  id: number;
  image: string;
  views: number;
  daysAgo: number;
  price: number;
  title: string;
}

export const useOffersStore = defineStore("offers", {
  state: () => ({
    offers: [] as Offer[],
  }),
  actions: {
    async fetchOffers() {
      try {
        const response = await fetch("/api/offers");
        const data = await response.json();
        this.offers = data;
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    },
  },
});
