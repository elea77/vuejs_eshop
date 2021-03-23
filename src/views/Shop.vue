<template>
  <div class="page__shop">
    <TitlePage title="Mon Eshop" />
    <div class="search__form">
      <input type="text" v-model="searchValue">
      <!-- <input type="text" v-model="searchValue" @keyup="search"> -->
    </div>
    <div class="search__content">
      <ProductsGrid :productsArray="filteredShop" />
    </div>
    <!-- <ProductsGrid :productsArray="productsFromApi" /> -->
  </div>
</template>

<script>
  import TitlePage from '../components/TitlePage';
  import ProductsGrid from '../components/ProductsGrid';
  import ApiProducts from '../mixins/ApiProducts';

  export default {
    components: {
      TitlePage,
      ProductsGrid,
    },
    data: function() {
      return {
        productsFromApi: [],
        searchValue: ""
      };
    },
    // methods: {
    //   search: function() {
    //     console.log(this.searchValue);
    //   }
    // },
    computed: {
      filteredShop: function() {
        let filter = new RegExp(this.searchValue, "i");
        return this.productsFromApi.filter(item => item.title.match(filter));
      }
    },
    mixins:[ApiProducts],
    created() {
      this.getProducts()
        .then((data) => {
          this.productsFromApi = data;
        })
        .catch((err) => console.log(err));
    },
  };
</script>

<style lang="scss" scoped></style>