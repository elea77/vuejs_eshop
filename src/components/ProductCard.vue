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
        </p>

    </div>
</template>

<script>
    import Cart from "../mixins/Cart";

    export default {
        name: "ProductsGrid",
        mixins:[Cart],
        props: {
            productObject: {
                type: Object
            }
        },
        methods: {
            addItemToCart: function(product) {
                this.addToCart(product);
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