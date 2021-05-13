<template>
  <div>
    <!-- <h1>stocks component</h1> -->
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 110 },
        { id: 2, name: "Google", price: 200 },
        { id: 3, name: "BMW", price: 410 },
        { id: 4, name: "Audi", price: 610 },
      ],
    };
  },
  components: {
    appStock: Stock,
  },
};
</script>

<style scoped></style>
