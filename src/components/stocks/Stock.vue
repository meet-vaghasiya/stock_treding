<template>
  <div>
    <!-- <h1>stock component</h1> -->

    <div class="col-sm-6 col-md-4">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">{{ stock.name }}</h3>
          <small>(price:{{ stock.price }})</small>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model.number="quantity"
              :class="{ danger: inSufficientFund }"
            />
          </div>
          <div class="pull-right">
            <button
              class="btn btn-success"
              @click="buyStock"
              :disabled="
                inSufficientFund || quantity <= 0 || !Number.isInteger(quantity)
              "
            >
              {{ inSufficientFund ? "Insufficient Fund" : "BUY" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    inSufficientFund() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStocks", order);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
