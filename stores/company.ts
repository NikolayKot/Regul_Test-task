import { defineStore } from "pinia";

interface CompanyState {
  logo: string;
  name: string;
  rating: number;
  agentsCount: number;
  reviews: number;
  phoneNumber: string;
  documentsVerified: boolean;
}

export const useCompanyStore = defineStore("company", {
  state: (): CompanyState => ({
    logo: "",
    name: "",
    rating: 0,
    agentsCount: 0,
    reviews: 0,
    phoneNumber: "",
    documentsVerified: false,
  }),
  actions: {
    async fetchCompanyData() {
      try {
        const response = await fetch("/api/company");
        const data = await response.json();
        this.logo = data.logo;
        this.name = data.name;
        this.rating = data.rating;
        this.phoneNumber = data.phoneNumber;
        this.reviews = data.reviews;
        this.agentsCount = data.agentsCount;
        this.documentsVerified = data.documentsVerified;
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    },
  },
});
