<template>
    <div class="product__card col-4 mb-4"> 
        <router-link :to="{name:'Product',params:{id:productObject._id}}">
            <img :src="productObject.img" :alt="productObject.title">
            <h5 class="product__title">
                {{productObject.title}}
            </h5>
        </router-link>
        <p>            
            {{productObject.price}} €
        </p>
        <button @click="addItemToCart(productObject)" class="btn btn-primary">Ajouter au panier</button><br>
        <button @click="addItemToWL(productObject)" class="no-btn">Ajouter a la liste <i class="far fa-star"></i></button>

        <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="success">
            Le produit a été ajouté avec succès !
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
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
                whitelistExisting: false,
                success: false
            }
        },
        methods: {
            addItemToCart: function(product) {
                this.addToCart(product);
                this.success = true;
            },
            addItemToWL: function(product) {
                this.addToWL(product);
                this.success = true;

            }
        }
    }
    
</script>

<style lang="scss" scoped>

    .product__card {
        img {
            height: 15em;
        }
        .product__title {
            color: black;
            padding: 0.25em;
        }
        .no-btn {
            background: transparent;
            border: none;
        }
    }
</style>