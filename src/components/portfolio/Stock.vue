<template>
  <div>
    <!-- <h1>stock component</h1> -->

    <div class="col-sm-6 col-md-4">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">{{ stock.name }}</h3>
          <small
            >(price:{{ stock.price }}) | Quantity: {{ stock.quantity }}</small
          >
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model.number="quantity"
              :class="{ danger: insufficientQuantity }"
            />
          </div>
          <div class="pull-right">
            <button
              class="btn btn-success"
              @click="sellStock"
              :disabled="
                insufficientQuantity ||
                quantity <= 0 ||
                !Number.isInteger(quantity)
              "
            >
              {{ insufficientQuantity ? "Insufficient quanity" : "SELL" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    // ...mapActions(["sellStock"]),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("sellStock", order);

      //   this.sellStock();
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
