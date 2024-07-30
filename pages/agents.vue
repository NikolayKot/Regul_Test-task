<template>
  <div class="agents__container">
    <div v-for="agent in agents" :key="agent.id" class="agents__card">
      <img
        :src="agent.photo"
        :alt="agent.firstName + ' ' + agent.lastName"
        class="agents__photo"
        @click="openModal(agent)"
      />
      <div class="agents__info">
        <h2 class="agents__name">{{ agent.firstName }} {{ agent.lastName }}</h2>
        <div class="agents__rating-container">
          <div v-if="agent.documentsVerified" class="agents__verified">
            <VerifiedIcon />
            <div class="agents__reviews">Документы проверены</div>
            <div class="agents__dot"></div>
          </div>
          <div v-if="agent.rating > 0" class="agents__rating">
            <StarIcon />
            <div class="agents__reviews">{{ agent.rating }}</div>
            <div class="agents__dot"></div>
          </div>
          <div v-if="agent.reviews > 0" class="agents__reviews">
            {{ agent.reviews }} отзывов
          </div>
          <div v-else class="agents__reviews">Нет отзывов</div>
        </div>
        <div class="agents__description">
          {{ truncateDescription(agent.description) }}
        </div>
      </div>
    </div>
    
    <!-- Модальное окно -->
    <div v-if="selectedAgent" class="agents__modal">
      <div class="agents__modal-content">
        <div class="agents__modal-close" @click="closeModal">&times;</div>
        <div class="agents__modal-header">
          <img
            :src="selectedAgent.photo"
            :alt="selectedAgent.firstName + ' ' + selectedAgent.lastName"
            class="agents__modal-photo"
          />
          <div class="agents__modal-info">
            <h2 class="agents__modal-name">
              {{ selectedAgent.firstName }} {{ selectedAgent.lastName }}
            </h2>
            <div class="agents__rating-container">
              <div
                v-if="selectedAgent.documentsVerified"
                class="agents__verified"
              >
                <VerifiedIcon />
                <div class="agents__reviews">Документы проверены</div>
                <div class="agents__dot"></div>
              </div>
              <div v-if="selectedAgent.rating > 0" class="agents__rating">
                <StarIcon />
                <div class="agents__reviews">{{ selectedAgent.rating }}</div>
                <div class="agents__dot"></div>
              </div>
              <div v-if="selectedAgent.reviews > 0" class="agents__reviews">
                {{ selectedAgent.reviews }} отзывов
              </div>
              <div v-else class="agents__reviews">Нет отзывов</div>
            </div>
          </div>
        </div>
        <div class="agents__modal-description">
          {{ selectedAgent.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAgentsStore } from "~/stores/agents";
import StarIcon from "~/assets/images/company/Star.vue";
import VerifiedIcon from "~/assets/images/company/Verified.vue";

export default {
  name: "AgentsPage",
  components: {
    StarIcon,
    VerifiedIcon,
  },
  data() {
    return {
      agents: [],
      selectedAgent: null,
    };
  },
  methods: {
    async fetchAgents() {
      const agentsStore = useAgentsStore();
      await agentsStore.fetchAgents();
      this.agents = agentsStore.agents;
    },
    truncateDescription(description) {
      const maxLength = 125;
      if (description.length <= maxLength) return description;
      return (
        description.substr(0, maxLength).split(" ").slice(0, -1).join(" ") +
        "..."
      );
    },
    openModal(agent) {
      this.selectedAgent = agent;
    },
    closeModal() {
      this.selectedAgent = null;
    },
  },
  mounted() {
    this.fetchAgents();
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/agents/agents.scss";
</style>
