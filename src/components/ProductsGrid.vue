<template>
    <div class="products__grid">
        <div class="product__item" v-for="product in productsArray" :key="product._id">
            <router-link v-bind:to="'/product/' + product._id">
                <ProductItem :productObject="product"/>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ProductItem from "../components/ProductItem";

    export default {
        name: "ProductsGrid",
        props: {
            productsArray: {
                type: Array
            }
        },
        components: {
            ProductItem
        }
    }

</script>

<style lang="scss" scoped>
    .products__grid {
        display: grid;
        grid-template-columns: 50% 50%;
    }
</style>