<template>
  <div class="container mb-5">
    <TitlePage title="Dashboard" />
        <div class="content">
            <h3>Bienvenue sur le dashboard admin</h3>

            <div class="row my-5">
                <div class="col-6 mb-5">
                    <router-link to="/backoffice/users">
                        <div class="bloc__group">    
                            <i class="fas fa-users pb-3"></i>
                            <h5>Liste des utilisateurs</h5>
                        </div>
                    </router-link>
                </div>
                <div class="col-6 mb-5">
                    <router-link to="/backoffice/products">
                        <div class="bloc__group">
                            <i class="fas fa-store pb-3"></i>
                            <h5>Liste des produits</h5>
                        </div>
                    </router-link> 
                </div>
                <div class="col-6">
                    <router-link to="/backoffice/orders">
                        <div class="bloc__group">      
                            <i class="fas fa-shopping-basket pb-3"></i>
                            <h5>Commandes</h5>
                        </div>
                    </router-link> 
                </div>
                <div class="col-6">
                    <router-link to="/backoffice/categories">
                        <div class="bloc__group">      
                            <i class="fas fa-layer-group pb-3"></i>
                            <h5>Catégories</h5>
                        </div>
                    </router-link> 
                </div>
            </div>
        </div>
  </div>
</template>

<script>
  import TitlePage from '../../components/TitlePage';

  export default {
    components: {
      TitlePage
    },
    data: function() {
      return {
      };
    },
    created() {
      
    },
  };
</script>

<style lang="scss" scoped>

    .content {
        a {
            color: white;
            .bloc__group {
                background: rgb(0, 30, 87);
                padding: 2em;
                width: 80%;
                margin: auto;
                &:hover {
                    background:rgb(5, 44, 116);
                }
                i {
                    font-size: 3em;
                }
            }
            
        }
    }
    
</style>