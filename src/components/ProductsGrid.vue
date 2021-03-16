<template>
    <div class="products__grid">
        <ProductCard
        v-for="product in productsArray"
        :key="product._id"
        :productObject="product"
        />
    </div>
</template>

<script>
    import ProductCard from "./ProductCard";

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