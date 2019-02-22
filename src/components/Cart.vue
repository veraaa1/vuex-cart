<template>
  <div id="cart">
    <h2>add something into your cart</h2>
    <ul v-if="cart.productId.length && products" class="cartlists">
      <li v-for="productid in cart.productId" :key="productid">
        <img :src="products.find(e=>e.id == productid).goodImg" alt>
        <span>{{products.find(e=>e.id == productid).goodName}}</span>
        <div>
          <button @click="cutNum(productid)">-</button>
          <span>{{cart.quatityById[productid]}}</span>
          <button @click="addCart(productid)">+</button>
        </div>
        <button @click="removeCart(productid)">remove cart</button>
      </li>
      <li>共{{$store.getters.total}}元</li>
    </ul>
    <div v-else>empty cart</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "cart",
  created() {
    this.getPros();
  },
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },
    products() {
      return this.$store.state.products.products;
    }
  },

  methods: {
    ...mapActions(["cutNum", "removeCart", "getPros", "addCart"])
  }
};
</script>

<style scoped>
.cartlists {
  width: 100%;
  list-style: none;
}
.cartlists > li {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.cartlists > li > img {
  width: 50px;
  height: 50px;
  display: block;
}
</style>
