import { defineStore } from "pinia";

interface CompanyState {
  logo: string;
  name: string;
  rating: number;
  agentsCount: number;
  reviews: number;
  phoneNumber: string;
  documentsVerified: boolean;
  description: string;
  address: string;
  workingHours: {
    [key: string]: string;
  };
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
    description: "",
    address: "",
    workingHours: {},
  }),
  actions: {
    async fetchCompanyData() {
      try {
        const response = await fetch("/api/company");
        const data = await response.json();
        Object.assign(this, data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    },
  },
});
