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

    <div class="google__logo">
      <img :src="googleLogo" alt="">
    </div>

    <div class="links">
      <a target="_blank" :href="link">Link to google</a> <br>
      <a target="_blank" v-bind:href="link">Link to google</a>
    </div>
    
    <div class="products__grid" v-for="(product, index) in productsArray" v-bind:key="product.id">
      {{ index }}
      {{ product.id }}
      {{ product.title }}
      {{ product.price }} €
    </div>

    <button v-on:click="sayHello">say Hello</button>
    <button @click="sayHello">say Hello</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  methods: {
    sayHello: function() {
      alert('Hello');
    }
  },
  data: function() {
    return {
      myTitle: "Ma homepage",
      myAge: 30,
      percentCa: 2000,
      isVisible: false,
      textStyling: "<strong>This text is prout</strong>",
      link: "https://google.fr",
      googleLogo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
      productsArray: [
        { id:1, title:"product 1", price: 25 },
        { id:2, title:"product 2", price: 21 }
      ]
    }
  }
}
</script>

<style scoped>
  
</style>