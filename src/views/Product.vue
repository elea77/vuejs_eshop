<template>
  <div class="page__product">
    <div class="product__content" v-if="productItem">
      <TitlePage :title="productItem.title"/>
      <!-- <ProductCard :productsArray="productsFromApi"/> -->

      <p>{{productItem.price}} €</p>
      <p>{{productItem.description}}</p>
      <img :src="productItem.img" :alt="productItem.title">

    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import apiConfigs from "../configs/api.configs";

export default {
    components: {
        TitlePage,
    },
    data: function() {
      return {
       productItem:{}
      }
    },
    methods: {
        getProduct: function() {
            return fetch(`${apiConfigs.apiUrl}/product/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data,"data");
                this.productItem = data;
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