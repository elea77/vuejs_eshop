<template>

  <div class="home">

    <TitlePage title="Homepage"/>
    <div class="row content__page">
      <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12 content__image">
        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt=""> 
      </div>
      <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 content__description">
        <div class="content__text">
          <h4>Le design d'intérieur pour tous</h4>
          <h2>Il y en a pour tous les gouts</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import TitlePage from "../components/TitlePage";

  export default {
    name: 'Home',
    components: {
      TitlePage
    },
    methods: {
    },
    data: function() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .content__page {
      width: 100vw;
      margin: 0;
      .content__image {
        padding: 0;
        img {
          width: 100%;
        }
      }
      .content__description {
        padding: 0;
        background: #35495e;
        color: white;
        .content__text {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          text-align: center;
          @media (max-width: 768px) {
            position: unset;
            top: unset;
            transform: unset;
            height: 20em;
          }
          h4, h2 {
            padding: 0 0.5em;
            @media (max-width: 768px) {
              font-size: 1.5em;
              position: relative;
              top: 5em;
            }
          }
        } 
      }
    }
  }
  
  


</style>