<template>
  <div>
    <ul class="list-group">
      <router-link v-for="product in products"
                   :to = "'/products/' + product.id"
                   class="list-group-item list-group-item-action" :key="product.id">
        {{product.name }}
      </router-link>
    </ul>
  </div>



</template>

<script>
import ProductDataService from "@/service/ProductDataService";

export default {
  name: "products-demo",
  data() {
    return {
      products: [],
      currentTutorial: null,
      currentIndex: -1,
      name: ""
    };
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
          .then(response => {
            this.products = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },







  },
  mounted() {
    this.retrieveProducts();
  }
};
</script>

<style>
.list {
  text-align: center;
  max-height: 50px;
  max-width: 50px;
  margin: auto;
}
</style>