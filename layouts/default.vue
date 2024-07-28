<template>
  <div class="main-wrapper">
    <Header />
    <CompanyCard />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/footer/Footer.vue";
import Header from "~/components/header/Header.vue";
import CompanyCard from "~/components/company/CompanyCard.vue";

export default {
  components: {
    Footer,
    Header,
    CompanyCard,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
