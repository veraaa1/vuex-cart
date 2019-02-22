<template>
  <div id="products">
    <ul v-if="products.length" class="lists">
      <li v-for="product in products" :key="product.id">
        <img :src="product.goodImg" alt>
        <div>
          <h3>{{product.goodName}}</h3>
          <p>￥{{product.price}}</p>
          <p>剩余{{product.inventory}}</p>
          <button @click="addCart(product.id)">add to cart</button>
        </div>
      </li>
    </ul>
    <div v-else>waiting...</div>
  </div>
</template>

<script>
export default {
  name: "products",
  computed: {
    products() {
      return this.$store.state.products.products;
    }
  },
  methods: {
    addCart(id) {
      this.$store.dispatch("addCart", id);
    }
  },
  created() {
    this.$store.dispatch("getPros");
  }
};
</script>

<style scoped>
.lists {
  width: 90%;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.lists > li {
  width: 28%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #eee;
}
.lists > li > img {
  width: 100%;
}
</style>
