<template>
  <div class="page__product container mb-5">
    <div class="product__content" v-if="productItem">
      <TitlePage :title="productItem.title"/>

      <div class="row">
        <div class="col">
            <img :src="productItem.img" :alt="productItem.title" class="product__img">
        </div>
        <div class="col product__info">
            <h4>Description du produit</h4>
            <p>{{productItem.description}}</p>
            <p>Prix: {{productItem.price}} €</p>

            <button @click="addItemToCart(productItem)" class="btn btn-primary">Ajouter au panier</button>
        
            <div v-for="product in this.whitelistArray" :key="product.id">
                <div v-if="product.id == productItem._id">
                    <button @click="removeItemToWL(productItem)" class="no-btn">Enlever de la liste de souhaits <i class="fas fa-star"></i></button>
                </div>
            </div>
            <div v-if="!this.whitelistArray">
                <button @click="addItemToWL(productItem)" class="no-btn">Ajouter à la liste de souhaits <i class="far fa-star"></i></button>
            </div>
        </div>
      </div>
      
        
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import ApiProducts from '../mixins/ApiProducts';
import Cart from "../mixins/Cart";
import Whitelist from "../mixins/Whitelist";


export default {
    components: {
        TitlePage,
    },
    data: function() {
      return {
        productItem:{},
        whitelistArray: [],
        whitelistExisting: false
      }
    },
    mixins:[ApiProducts, Cart, Whitelist],
    created() {
      this.getProduct()
      .then(data => {
        this.productItem = data;
      })
      .catch(err => console.log(err))

      this.whitelistArray = this.getWL();

    },
    methods: {
      addItemToCart: function(product) {
          this.addToCart(product);
      },
      addItemToWL: function(product) {
        this.addToWL(product);
        window.location.reload();
      },
      removeItemToWL: function(product) {
          this.removeItemWL(product);
          window.location.reload();
      }
    }
}
</script>

<style lang="scss" scoped>
    .page__product {
        .product__img {
            height: 22em;
        }
        .product__info {
          text-align: left;
          p {
            font-size: 1.2em;
          }
        }
        .no-btn {
            background: transparent;
            border: none;
        }
    }
</style>