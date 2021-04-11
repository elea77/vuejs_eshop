<template>
    <div class="product__card col-4"> 
        <router-link :to="{name:'Product',params:{id:productObject._id}}">
            <img :src="productObject.img" :alt="productObject.title">
            <h5>
                {{productObject.title}}
            </h5>
        </router-link>
        <p>            
            {{productObject.price}} €
        </p>
        <button @click="addItemToCart(productObject)" class="btn btn-primary">Ajouter au panier</button>
        
        <div v-for="product in this.whitelistArray" :key="product.id">
            <div v-if="product.id == productObject._id">
                <button @click="removeItemToWL(productObject)" class="no-btn"><i class="fas fa-star"></i></button>
            </div>
            <div v-else-if="product.id != productObject._id">
                <button @click="addItemToWL(productObject)" class="no-btn"><i class="far fa-star"></i></button>
            </div>
        </div>
        <div v-if="!this.whitelistArray">
            <button @click="addItemToWL(productObject)" class="no-btn"><i class="far fa-star"></i></button>
        </div>
    </div>
</template>

<script>
    import Cart from "../mixins/Cart";
    import Whitelist from "../mixins/Whitelist";

    export default {
        name: "ProductsGrid",
        mixins: [Cart, Whitelist],
        props: {
            productObject: {
                type: Object
            }
        },
        data: function() {
            return {
                whitelistArray: [],
                whitelistExisting: false
            }
        },
        created() {
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

    .product__card {
        img {
            height: 15em;
        }
        .no-btn {
            background: transparent;
            border: none;
        }
    }
</style>