<template>
  <div class="container mb-5">
    <TitlePage title="Liste des produits" />
    <router-link to="/backoffice/add/product">
      <button class="btn btn-primary mb-2">Ajouter un produit</button>
    </router-link>
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <!-- <th scope="col">Catégorie</th> -->
            <th scope="col">Actions</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="product in productsFromApi" v-bind:key="product._id">
                    <td>{{ product.title }}</td>
                    <td><p>{{ product.price }} €</p></td>
                    <td>{{ product.description }}</td>
                    <td><img :src="product.img" :alt="product.title" width="50px"></td>
                    <!-- <td>{{ product.categories }}</td> -->
                    <td>
                      <router-link :to="{name:'EditProduct',params:{id:product._id}}">
                        <span class="iconify" data-inline="false" data-icon="ant-design:edit-filled" style="font-size: 28px;  color: #0085FF;"></span>
                      </router-link>
                      <button @click="del(product._id)" class="no-btn">
                        <span class="iconify" data-inline="false" data-icon="fluent:delete-dismiss-28-filled" style="font-size: 28px; color: #CA1C46; "></span>
                      </button>

                    </td> 
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  import TitlePage from '../../components/TitlePage';
  import ProductsGrid from '../../components/ProductsGrid';
  import ApiProducts from '../../mixins/ApiProducts';
  import ApiCategories from '../../mixins/ApiCategories';

  export default {
    components: {
      TitlePage,
      ProductsGrid,
    },
    data: function() {
      return {
        productsFromApi: [],
        searchValue: "",
        categoriesArray: {}
      };
    },
    mixins:[ApiProducts, ApiCategories],
    methods: {
      del: function(id) {
        console.log(id);
        this.deleteProduct(id)
        .then(data => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
      }
    },
    created() {
      this.getProducts()
        .then((data) => {
          this.productsFromApi = data;
          // this.productsFromApi.forEach(id => {

          //   console.log(id);

          //   this.getCategory(id.categories)
          //   .then((data) => {
          //     console.log(data);
          //     this.categoriesArray.push(data)
          //   })
          //   .catch((err) => console.log(err));

          //   // this.getCategory(id)
          //   // .then(data=>{
          //   //   this.ordersArray.push(data)
          //   // })
          //   // .catch(err => console.log(err))
          // }); 
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