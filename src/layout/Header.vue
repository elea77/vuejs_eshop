<template>
    <header class="header__main">
        <div class="header__logo">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="nav-list-container">
            <nav class="header__nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/shop">Shop</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/cart">Mon panier</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/whitelist">Liste de souhaits</router-link>
                    </li>
                    <li class="nav__item" v-if="isLogged">
                        <router-link to="/account">Mon compte</router-link>
                    </li>
                    <li class="nav__item" v-else>
                        <router-link to="/login">Connexion</router-link>
                    </li>
                    <li class="nav__item" v-if="isLogged">
                        <button @click="logout">Se déconnecter</button>
                    </li>
                    <li class="nav__item" v-else>
                        <router-link to="/register">Inscription</router-link>
                    </li>
                    <li class="nav__item" v-if="user.isAdmin == true">
                        <router-link to="/backoffice">Backoffice</router-link> 
                    </li>
                </ul>
            </nav>
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

    .header__main {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #242424;
        height: 70px;
        .header__logo {
            h1 {
                color: white;
            }
            img {
                height: 70px;
                width: 200px;
            }
        }
        .header__nav {
            .nav__list {
                display: flex;
                list-style: none;
                margin: 0;
                height: 100%;
                .nav__item {
                    color: white;
                    &:hover{
                        color: #ffffff;
                        border-bottom: 4px solid #fff;
                        transition: all 0.2s ease-out;
                    }
                    a, button {
                        color: white;
                        padding: 0px 25px;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-decoration: none;
                        font-size: 1.5em;
                    }
                    button {
                        background: transparent;
                        border: none !important;
                    }
                }
            }
        }
    }

</style>