<template>
  <div>
    <!-- <h1>stocks component</h1> -->
    <app-stock
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  data() {
    return {
      // stocks:   [],
    };
  },
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      // alert("hello world");
      console.log(this.$store.getters.stocks, "console.app");
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style scoped></style>
