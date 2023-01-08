<template>





  <h4>Your Product</h4>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name"
             v-model="product.name"
      />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input type="text" class="form-control" id="description"
             v-model="product.description"
      />
    </div>

    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" id="price"
             v-model="product.price"
      />
    </div>

    <div class="form-group">
      <label for="published">Published</label>
      <input type="checkbox" class="form-check-label" id="published"
             v-model="product.published"
      />
    </div>
    <div class="form-group">
      <label><strong>Status:</strong></label>
      {{ product.published ? "Available" : "Coming soon" }}
    </div>
    <button type="submit" class="btn btn-danger" @click="deleteProduct">Delete</button>
    <button type="submit" class="btn btn-primary" @click="updateProduct">Update</button>
  </form>
</template>

<script>
import ProductDataService from "@/service/ProductDataService";

export default {
  name: "ProductDetail.vue",
  data() {
    return {
      id: this.$route.params.id,
      product: {}
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      ProductDataService.get(this.id)
        .then(response => {
          this.product = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    },
    updateProduct() {
      ProductDataService.update(this.id, this.product)
        .then(response => {
          console.log(response.data);
          this.$router.push("/products");
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteProduct() {
      ProductDataService.delete(this.id)
        .then(response => {
          console.log(response.data);
          this.$router.push("/products");
        })
        .catch(e => {
          console.log(e);
        });
    }



  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>