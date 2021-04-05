<template>
  <div class="container">
    <TitlePage title="Liste des produits" />
    <button class="btn btn-primary mb-2">Ajouter un Administrateur</button>
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Titre</th>
            <th scope="col">Prix</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="product in productsFromApi" v-bind:key="product._id">
                    <td>{{ product.title }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.img }}</td>
                          
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  import TitlePage from '../../components/TitlePage';
  import ProductsGrid from '../../components/ProductsGrid';
  import ApiProducts from '../../mixins/ApiProducts';

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
    mixins:[ApiProducts],
    methods: {
            // edit: function(event) {
            //   console.log("test");
            // },
            // del: function(user_id) {
            //   console.log(user_id);
              // this.deleteUser(user_id)
              // .then(data => {
              //       console.log("check");
              // })
              // .catch((err) => console.log(err));
            // }
        },
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
  .no-btn {
    background: transparent;
    border: none !important;
    font-size:0;
  }
</style>