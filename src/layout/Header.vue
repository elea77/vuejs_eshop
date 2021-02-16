<template>
    <header class="header__main">
        <div class="header__logo">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="header__nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>