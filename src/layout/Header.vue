<template>
    <header class="header__main">
        <div class="header__logo">
            <router-link to="/">
                <img src="../assets/logo.png" alt="logo">
            </router-link>
        </div>
        <div class="nav-list-container">
            <nav class="header__nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link to="/shop">Boutique</router-link>
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

        <div class="responsive__menu">
            <input id="burger" type="checkbox" />

            <label for="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <nav>    
                <ul>
                    <li>
                        <router-link to="/shop">Boutique</router-link>
                    </li>
                    <li>
                        <router-link to="/cart">Mon panier</router-link>
                    </li>
                    <li>
                        <router-link to="/whitelist">Liste de souhaits</router-link>
                    </li>
                    <li v-if="isLogged">
                        <router-link to="/account">Mon compte</router-link>
                    </li>
                    <li v-else>
                        <router-link to="/login">Connexion</router-link>
                    </li>
                    <li v-if="isLogged">
                        <button @click="logout">Se déconnecter</button>
                    </li>
                    <li v-else>
                        <router-link to="/register">Inscription</router-link>
                    </li>
                    <li v-if="user.isAdmin == true">
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
                height: auto;
                width: 4em;
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
                        font-size: 1.2em;
                        // font-size: 1.5em;
                    }
                    button {
                        background: transparent;
                        border: none !important;
                    }
                }
            }
        }
    }

    .responsive__menu {
        display: none;
        @media (max-width: 1000px) {
            display: block;
        }
        h1 {
            position: fixed;
            top: 40px;
            left: 40px;
            z-index: 6;
            font-size: 20px;
            font-weight: 900;
            font-family: sans-serif;
            text-transform: uppercase;
            > span {
                text-transform: none;
                opacity: .5;
                font-weight: 300;
                font-size: 12px;
            }
        }
        input + label {
            position: fixed;
            top: 40px;
            right: 40px;
            height: 20px;
            width: 15px; 
            z-index: 5;
            span {
                position: absolute;
                width: 100%;
                height: 2px;
                top: 50%;
                margin-top: -1px;
                left: 0;
                display: block;
                background: black;
                transition: .5s;
            }
            span:first-child {
                top: 3px; 
            }
            span:last-child {
                top: 16px; 
            }      
        }
        label:hover {
            cursor: pointer;
        }
        input:checked + label { 
            span {
                opacity: 0;
                top: 50%;
            }
            span:first-child {
                opacity: 1;
                transform: rotate(405deg);
            }
            span:last-child {
                opacity: 1;
                transform: rotate(-405deg);
            }
        }
        input ~ nav {
            background: white;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            z-index: 3;
            transition: .5s;
            transition-delay: .5s;
            overflow-x: auto;
            // overflow: hidden;
            > ul {
                text-align: center;
                position: absolute;
                top: 35%;
                left: 20%;
                right: 20%;
                list-style: none;
                > li {
                    opacity: 0;
                    transition: .5s;
                    transition-delay: 0s;
                    > a {
                        text-decoration: none;
                        text-transform: uppercase;
                        color: black;
                        font-weight: 700;
                        font-family: sans-serif;
                        display: block;
                        padding: 30px;
                    }
                }
            }
        }
        input:checked ~ nav { 
            height: 100%;
            transition-delay: 0s;
            > ul {
                > li {
                opacity: 1;
                transition-delay: .5s;
                }
            }
        } 

    }
    
</style>