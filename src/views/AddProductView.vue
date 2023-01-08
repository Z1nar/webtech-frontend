<template>
  <form class="needs-validation" novalidate>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="product.name"
            name="title"
        />
        <div class ="invalid-feedback">
          Please provide a valid name.
        </div>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
            class="form-control"
            id="description"
            required
            v-model="product.description"
            name="description"
        />
        <div class ="invalid-feedback">
          Please provide a valid description.
        </div>
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input
            type="number"
            class="form-control"
            id="price"
            required
            v-model="product.price"
            name="price"
        />
        <div class ="invalid-feedback">
          Please provide a valid price.
        </div>

      </div>

      <div class="form-group">
        <label for="published">Published</label>
        <input
            type="checkbox"
            class="form-check-label"
            id="published"

            v-model="product.published"
            name="published"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
  </form>
</template>
<script>

import ProductDataService from "@/service/ProductDataService";

export default {
  name: "add-product",
  data() {
    return {
      product: {
        id: null,
        name: "",
        description: "",
        published: false,
        price: null,
      },
      submitted: false
    };
  },
methods: {
saveProduct() {
  const valid= this.validate();
  if(valid){
    const data = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      published: this.product.published
    };

    ProductDataService.create(data)
        .then(response => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });

  }

},

newProduct() {
this.submitted = false;
this.product = {};
},
  validate() {
    let valid = true;
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms)
      .forEach((form) => {
        if (form.checkValidity() === false) {
          valid = false;
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      },false)
    return valid;

  }
}
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
