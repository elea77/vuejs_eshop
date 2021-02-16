<template>
  <div class="home">
    <h1>{{ myTitle }}</h1>

    <p>J'ai {{ myAge }} ans</p>

    <!-- Conditions if ? else : -->
    <p>{{ myAge > 30 ? "Je suis vieux" : "Je suis jeune" }}</p>
    
    <p>{{ percentCa / 100 }}</p>

    <div class="unvisible__block" v-if="!isVisible">
      <p>je suis invisible</p>
    </div>
    <div class="visible__block" v-else-if="isVisible">
      <p>je suis visible</p>
    </div>
    <div class="visible__block" v-else>
      <p>je suis ni visible ni invisible</p>
    </div>

    <div class="font-bold" v-html="textStyling">
      <p>{{ textStyling }}</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: function() {
    return {
      myTitle: "Ma homepage",
      myAge: 30,
      percentCa: 2000,
      isVisible: false,
      textStyling: "<strong>This text is prout</strong>"
    }
  }
}
</script>

<style scoped>
  
</style>