<template>
  <div class="about">
    <TitlePage title="A propos de nous"/>
    <p>Ce site a été créé a l'occasion d'un projet réalisé à Ynov.</p>
  </div>
</template>

<script>
  import TitlePage from "../components/TitlePage";
  export default {
    name: "About",
    components: {
      TitlePage
    }
  }
</script>