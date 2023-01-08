<template>
  <div>
    <ul class="list-group">
      <li>
        <div v-for="product in products"
                     :to = "'/products/' + product.id"
                     class="list-group-item list-group-item-action" :key="product.id">
          <h1>{{ product.name }}</h1>
          <p>Description : {{ product.description }}</p>
          <p>{{ product.price }} Euro </p>
          <p>In stock : {{ product.published ? "Available" : "Coming soon" }}</p>
        </div>
      </li>


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
  max-width: 200px;
  margin: auto;
}
</style>