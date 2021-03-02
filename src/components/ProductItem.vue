<template>
    <div class="product__card">  
        <h2>{{ productObject.title }}</h2>
        <p>{{ productObject.description }}</p>
        <p>{{ productObject.price }} €</p>
        <img :src="productObject.img" :alt="productObject.title">
    </div>
</template>

<script>
    export default {
        name: "ProductsGrid",
        props: {
            productObject: {
                type: Object
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