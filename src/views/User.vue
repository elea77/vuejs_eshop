<template>
    <div>
        <TitlePage title="Mon compte"/>
        <div v-if="isLogged">
            <div class="user__info" v-if="user">
                <p>Nom : {{user.firstName}}</p>
                <p>Prénom : {{user.lastName}}</p>
                <p>Email : {{user.email}}</p>
                <p>Téléphone : {{user.phone}}</p>
                <p>Adresse : {{user.address.street}}, {{user.address.city}} {{user.address.zip}}, {{user.address.country}}</p>
                <router-link to="/edit_profile">Modifier le profil</router-link> | 
                <router-link to="/edit_password">Modifier le mot de passe</router-link>
            </div>
        </div>
        <div v-else>
            <p>Vous n'êtes pas connecté</p>
        </div>
    </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import ApiUsers from '../mixins/ApiUsers';

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{},
                isLogged:false
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged = false;
            }
        },
        mixins:[ApiUsers],
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
        },
    }
</script>

<style lang="scss" scoped>
</style>