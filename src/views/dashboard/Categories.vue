<template>
  <div class="container mb-5">
    <TitlePage title="Liste des catégories" />
    <button class="btn btn-primary mb-2" @click="createToggle()">Ajouter une catégorie</button>
    <br>
    <form v-if="createTitle" class="form">
        <input type="text" name="" v-model="title" placeholder="Titre" class="form-control">
        <button class="btn btn-primary" @click="create()">Ajouter</button>
    </form>
    <br>
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Nom</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categoriesFromApi" v-bind:key="category._id">
                    
                <td v-if="editTitle" class="edit__title">
                    <input type="text" name="" v-model="category.title" class="form-control input__edit">
                    <button class="btn btn-primary" @click="save(category.title, category._id)">Enregistrer</button>
                </td>
                <td v-else>{{ category.title }}</td>
                    
                <td>
                    <button @click="editToggle()" class="no-btn">
                      <span class="iconify" data-inline="false" data-icon="ant-design:edit-filled" style="font-size: 28px;  color: #0085FF;"></span>
                    </button>
                </td>
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
        editTitle: false,
        createTitle: false,
        title: ""
      };
    },
    mixins:[ApiCategories],
    methods: {
        editToggle: function() {
            if(this.editTitle == false) {
                this.editTitle = true;
            } else {
                this.editTitle = false;
            }
        },
        createToggle: function() {
            if(this.createTitle == false) {
                this.createTitle = true;
            } else {
                this.createTitle = false;
            }
        },
        save: function(title, id) {
            this.title = title;

            console.log(id, this.title);

            this.editCategory(id)
            .then((data) => {
                if(data.error) {
                    console.log(data.error);
                    this.messageError = data.error;
                } 
                else {
                    window.location.reload();
                }
            })
            .catch(err => console.log(err));
        },
        create: function() {
          this.createCategory()
          .then((data) => {
              if(data.error) {
                  console.log(data.error);
                  this.messageError = data.error;
              } 
              else {
                  window.location.reload();
              }
          })
          .catch(err => console.log(err));
        }
    },
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
  .form {
    input {
      margin: 1em auto;
      width: 12em;
    }
  }
  tbody {
    .edit__title {
      display: inline-flex;
      justify-content: center;
      width: 100%;
      .input__edit {
        width: 10em;
        margin-right: 2em;
      }
    }
  }
  
  .no-btn {
    background: transparent;
    border: none !important;
    font-size:0;
  }
</style>