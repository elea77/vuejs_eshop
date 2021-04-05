<template>
    <header class="header__main">
        <div class="header__logo">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="header__nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/contact">Contact</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/shop">Shop</router-link> |
            <router-link to="/cart">Mon panier</router-link> |
            <div v-if="isLogged">
                <router-link to="/account">Mon compte</router-link> |
                <button @click="logout">Se déconnecter</button>
            </div>
            <div v-else>
                <router-link to="/login">Connexion</router-link> |
                <router-link to="/register">Inscription</router-link>
            </div>
            <div v-if="user.isAdmin == true">
                <router-link to="/backoffice">Backoffice</router-link> 

            </div>

        </div>
    </header>
</template>

<script>
import ApiUsers from '../mixins/ApiUsers';

    export default {
        components: {
        },
        data: function() {
            return {
                user:{},
                isLogged:false,
                decodedToken: ""
            }
        },
        mixins:[ApiUsers],
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged = false;
                this.$router.push('/login');
                window.location.reload();

            }
        },
        created() {
            const token = localStorage.getItem('token');
            if(token) {
                this.getUser()
                .then(data=>{
                        this.isLogged = true;
                        this.user = data;
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>