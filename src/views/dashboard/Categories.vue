<template>
  <div class="container mb-5">
    <TitlePage title="Liste des catégories" />
    <!-- <router-link to="/backoffice/add/category">
      <button class="btn btn-primary mb-2">Ajouter une catégorie</button>
    </router-link> -->
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="category in categoriesFromApi" v-bind:key="category._id">
                    <td>{{ category._id }}</td>
                    <td>{{ category.title }}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  import TitlePage from '../../components/TitlePage';
  import ApiCategories from '../../mixins/ApiCategories';

  export default {
    components: {
      TitlePage,
    },
    data: function() {
      return {
        categoriesFromApi: [],
        statusArray: [
            { value: 'En cours' },
            { value: 'Livré' },
            { value: 'Terminé' }
        ],
        editStatus: false
      };
    },
    mixins:[ApiCategories],
    created() {
        this.getCategories()
        .then((data) => {
            this.categoriesFromApi = data;
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