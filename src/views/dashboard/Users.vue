<template>
  <div class="container">
    <TitlePage title="Liste utilisateurs" />

    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Prénom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Adresse</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="user in usersFromApi" v-bind:key="user._id">
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.address.street }}, {{ user.address.city }} {{ user.address.zip }}, {{ user.address.country }}</td>                    
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  import TitlePage from '../../components/TitlePage';
  import ProductsGrid from '../../components/ProductsGrid';
  import ApiUsers from '../../mixins/ApiUsers';

  export default {
    components: {
      TitlePage,
      ProductsGrid,
    },
    data: function() {
      return {
        usersFromApi: [],
        searchValue: ""
      };
    },
    mixins:[ApiUsers],
    created() {
      this.getUsers()
        .then((data) => {
          this.usersFromApi = data;
        })
        .catch((err) => console.log(err));
    },
  };
</script>

<style lang="scss" scoped></style>