<template>
  <div class="col-xs-6">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }}<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small></h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientStocks}">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="insufficientStocks || quantity <= 0">
            {{ insufficientStocks? '보유량부족': '판매' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],

  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    insufficientStocks() {
      return this.stock.quantity - this.quantity < 0;
    }
  },

  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('sellStock', order);
      this.quantity = 0;
    }
  }
}
</script>
