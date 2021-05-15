<template>
  <div>
    <h1>stocks component</h1>
    <app-stock
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
// import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters({ stocks: "stockPortfolio" }),
    stocks() {
      return this.$store.getters.stockPortfolio;
    },
  },
  components: {
    appStock: Stock,
  },
};
</script>

<style scoped></style>
