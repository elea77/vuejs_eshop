<template>
  <div class="page__shop container mb-5">
    <TitlePage title="Boutique" />
    <div class="search__form form-group">
      <input type="text" class="form-control search__input" placeholder="Rechercher un produit" v-model="searchValue">
    </div>
    <div class="search__content">
      <ProductsGrid :productsArray="filteredShop" />
    </div>
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

<style lang="scss" scoped>
  .page__shop {
    .search__input {
      width: 12em;
      margin: auto;
    }
  }
 
</style>