<template>
  <div id="app">
    <h1>vuex-cart</h1>
    <Products/>
    <Cart/>
  </div>
</template>

<script>
import Products from "./components/Products";
import Cart from "./components/Cart";
export default {
  name: "app",
  components: {
    Products,
    Cart
  }
};
</script>

<style>
</style>
