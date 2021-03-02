<template>
  <div class="page__shop">
    <TitlePage title="Mon Eshop"/>
    <ProductsGrid :productsArray="productsFromApi"/>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import ProductsGrid from "../components/ProductsGrid";

export default {
    components: {
        TitlePage,
        ProductsGrid
    },
    data: function() {
      return {
       productsFromApi:[]
      }
    },
    methods: {
        getProducts: function () {
           return fetch("http://localhost:3000/api/v1/products")
            .then(res => res.json())
            .then(data => {
                // console.log(data,"data");
                this.productsFromApi = data;
                }
            )
            .catch(err => console.log(err))
        }
    },
    created() {
      this.getProducts();
    }
}
</script>

<style lang="scss" scoped></style>