<template>
    <div class="products__grid">
        <div class="product__item" v-for="product in productsArray" :key="product._id">
            <router-link v-bind:to="'/product/' + product._id">
                <ProductCard :productObject="product"/>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ProductCard from "../components/ProductCard";

    export default {
        name: "ProductsGrid",
        props: {
            productsArray: {
                type: Array
            }
        },
        components: {
            ProductCard
        }
    }

</script>

<style lang="scss" scoped>
    .products__grid {
        display: grid;
        grid-template-columns: 50% 50%;
    }
</style>