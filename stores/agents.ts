import { defineStore } from "pinia";

export const useAgentsStore = defineStore("agents", {
  state: () => ({
    agents: [],
  }),
  actions: {
    async fetchAgents() {
      try {
        const response = await fetch("/api/agents");
        const data = await response.json();
        this.agents = data;
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    },
  },
});
