<template>
    <div class="container mb-5">
        <TitlePage title="Mon compte"/>
        <div v-if="isLogged">
            <div class="user__info row" v-if="user">
                <div class="col-6">
                    <h4>Mes informations personnelles</h4><br>
                    <p>Nom : {{user.firstName}}</p>
                    <p>Prénom : {{user.lastName}}</p>
                    <p>Email : {{user.email}}</p>
                    <p>Téléphone : {{user.phone}}</p>
                    <p>Adresse : {{user.address.street}}, {{user.address.city}} {{user.address.zip}}, {{user.address.country}}</p>
                    <router-link to="/edit_profile">Modifier le profil</router-link> 
                </div>
                <div class="col-6">
                    <h4>Mes commandes</h4><br>
                    <div v-for="order in this.ordersArray" v-bind:key="order._id">
                        <p><b>{{ order.date }}</b> | {{ order.status }} | {{ order.total }} €</p>
                    </div>
                </div>
                
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
    import ApiOrders from '../mixins/ApiOrders';

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{},
                isLogged:false,
                orders: [],
                ordersArray: []
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.isLogged = false;
            }
        },
        mixins:[ApiUsers, ApiOrders],
        created() {
            const token = localStorage.getItem('token');
            if(token) {
                this.getUser()
                .then(data=>{
                    this.isLogged = true;
                    this.user = data;
                    this.orders = this.user.orders;
                    
                    this.orders.forEach(id => {

                        this.getOrder(id)
                        .then(data=>{
                            this.ordersArray.push(data)
                        })
                        .catch(err => console.log(err))
                    }); 
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>