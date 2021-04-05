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
import ApiProducts from '../mixins/ApiProducts';

export default {
    components: {
        TitlePage,
    },
    data: function() {
      return {
       productItem:{}
      }
    },
    mixins:[ApiProducts],
    created() {
      this.getProduct()
      .then(data => {
        this.productItem = data;
      })
      .catch(err => console.log(err))
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