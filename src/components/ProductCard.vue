<template>
    <div class="product__card">  
        <router-link :to="{name:'Product',params:{id:productObject._id}}">
            <h2>
                {{productObject.title}}
            </h2>
        </router-link>
        <p>            
            {{productObject.price}}
        </p>
        <p>
            <button @click="addItemToCart(productObject)">Ajouter au panier</button>

            <button @click="addItemToWL(productObject)"><i class="far fa-star"></i></button>
        </p>
        

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
                console.log(product);
            },
            addItemToWL: function(product) {
                this.addToWL(product);
            }
        }
    }
    
</script>

<style lang="scss" scoped>

    .product__card {
        img {
            width: 50%;
        }
    }
</style>