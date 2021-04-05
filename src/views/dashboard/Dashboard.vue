<template>
  <div class="">
    <TitlePage title="Dashboard" />

        <div class="panel">

            <div class="top">
                <a href=""><h2>Dashboard</h2></a>
            </div>

            <div class="menu">

                <div class="tab" style="margin-top: 25%;">
                    <a href="dashboard.php">
                        <span class="iconify" data-inline="false" data-icon="clarity:dashboard-line" style="font-size: 24px; color: white;"></span>
                        <h5>Dashboard</h5>
                    </a>
                </div>

                <div class="tab">
                    <router-link to="/backoffice/users">
                    <span class="iconify" data-inline="false" data-icon="ic:outline-note-add" style="color: white; font-size: 24px;"></span>
                        <h5>Liste des utilisateurs</h5>
                    </router-link> 
                </div>

                <div class="tab">
                    <router-link to="/backoffice/products">
                        <span class="iconify" data-inline="false" data-icon="openmoji:picture" style="font-size: 24px;"></span>
                        <h5>Liste des produits</h5>
                    </router-link> 
                </div>

                <div class="tab">
                    <a href="login.php?action=deconnexion">
                        <span class="iconify" data-inline="false" data-icon="fe:logout" style="font-size: 24px;"></span>
                        <h5>Se déconnecter</h5>
                    </a>
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
    nav {
        display: none;
    }

    .panel {
        position: fixed;
        height: 100vh;
        width: 16%;
        background-color: #6f1d7b;
        border-right-style: solid;
        border-width: 1px;
        overflow: hidden;
        top: 0;
    }

    .panel a {
        text-decoration: none;
        color: white;
    }

    .top {
        text-align: center;
        margin: 5%;
        border-bottom-style: solid;
        border-width: 1px;
    }

    .top h2 {
        margin-top: 8%;
        margin-block-end: 8%;
    }

    .tab a {
        display: inline-flex;
        width: 90%;
        text-align: center;
        margin-left: 6%;
        margin-block-end: 25%;
        text-decoration: none;
        color: white;
    }

    .tab h5 {
        margin: 0;
        margin-left: 6%;
    }

    .tab-home a {
        position: fixed;
        bottom: 0;
        display: inline-flex;
        width: 10%;
        text-align: center;
        margin-left: 3%;
        margin-block-end: 1%;
        text-decoration: none;
        color: white;
    }

    .tab-home h5 {
        margin: 0;
        margin-left: 10%;
        margin-top: 2%;
    }

    .content {
        width: 84%;
        margin-left: 16%;
    }

    .content h1 {
        margin: 2%;
        margin-block-end: 4%;
    }
</style>