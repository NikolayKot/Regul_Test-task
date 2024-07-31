<template>
  <div class="main-wrapper">
    <Header />
    <CompanyCard />
    <div class="content-divider"></div>
    <div class="content-wrapper">
      <div class="main-content">
        <slot />
      </div>
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
  min-height: 100vh;
  margin: 0 auto;
}

.content-divider {
  width: 100%;
  height: 1px;
  background-color: #cccccc;
  margin: 32px 0px 24px;
}

.content-wrapper {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1 0 auto;
}
</style>
