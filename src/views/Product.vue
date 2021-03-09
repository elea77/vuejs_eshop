<template>
  <div class="page__product">
    <TitlePage title="Page produit"/>
    <ProductCard :productObject="product"/>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import ProductCard from "../components/ProductCard";

export default {
    components: {
        TitlePage,
        ProductCard,
    },
    data: function() {
      return {
       product:[]
      }
    },
    methods: {
        getProduct: function() {
            return fetch("https://nodejs-myapi.herokuapp.com/api/v1/product/" + this.$route.params.id)
            .then(res => res.json())
            .then(data => {
                console.log(data,"data");
                this.product = data;
                }
            )
            .catch(err => console.log(err))
        }
    },
    created() {
      this.getProduct();
    }
}
</script>

<style lang="scss" scoped>
    .page__product {
        img {
            width: 50%;
        }
    }
</style>