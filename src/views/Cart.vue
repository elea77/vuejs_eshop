<template>
    <div class="shopping__cart container">
        <TitlePage title="Panier"/>
        <div v-if="cartArray">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Titre</th>
                        <th scope="col">Quantité</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Total</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cartArray" v-bind:key="item._id">
                        <td>{{item.title}}</td>
                        <td>{{item.qty}}</td>
                        <td>{{item.price}} €</td>
                        <td>
                            {{ item.price * item.qty }} €
                        </td>
                        <td>
                            <button class="btn" @click="removeQtyItemCart(item)">-</button> &nbsp;
                            <button class="btn" @click="addQtyItemCart(item)">+</button> &nbsp;
                            <button class="btn btn-info" @click="removeProductCart(item)">Supprimer du panier</button>
                        </td>
                    </tr>
                </tbody>
            </table> <br><br>
            <div>
                Quantité totale: {{ calcQty }}
            </div>
            <div>
                Prix total: {{ calcTotal }} €
            </div>
            
            <div v-if="this.deliveryStatus" class="form-check">
                <button @click="delivery()" class="btn btn-primary">Précédent</button>

                <div class="delivery__form">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                    <img src="https://www.dpd.com/lu/wp-content/themes/DPD_NoLogin/images/DPD_logo_redgrad_rgb_responsive.svg" alt="" class="img">
                    <h5>Livraison a domicile (environ 48h)</h5>
                    <p><b>4,90€ TTC</b></p>
                </div>
               
                <p> Prix total avec frais de port: <b>{{ calcTotal + 4.90 }} €</b></p>
                
                <button @click="checkout()" v-if="isLogged" class="btn btn-primary">Passer la commande</button>

            </div>
            <div v-else>
                <button @click="deleteCart()" class="btn btn-warning">Supprimer le panier</button> &nbsp;
                <button @click="delivery()" class="btn btn-primary">Suivant</button>
            </div>
            <br>
            
        </div>
        <div v-else>
            <h5>Votre panier est vide</h5>
        </div>

    </div>
</template>

<script>
    import Cart from '../mixins/Cart'
    import ApiUsers from '../mixins/ApiUsers'
    import ApiOrders from '../mixins/ApiOrders'
    import TitlePage from "../components/TitlePage";
    import { loadStripe } from '@stripe/stripe-js';
    import apiConfigs from "../configs/api.configs";
    const stripePromise = loadStripe('pk_test_51IYAwmJ5UFJGtqNY47wrtVEcNKKVkbiO0TzfR5kQ9Sfle8LjCPvQXzhuWH7PKoRaWQNP3oC2mVBhHPqkUn3n4BId00YcpQNq2k');


    export default {
        components: {
            TitlePage
        },
        mixins: [Cart, ApiUsers, ApiOrders],
        data: function() {
            return {
                cartArray: [],
                total: 0,
                isLogged: false,
                status: "",
                user: "",
                products: [],
                deliveryStatus: false
            }
        },
        created() {
            this.cartArray = this.getCart();
            const token = localStorage.getItem('token');
            if(token) {
                this.isLogged = true;
            }
        },
        computed: {
            calcQty: function(){
                return this.getCartCount(this.cartArray);
            },
            calcTotal: function(){
                return this.getCartTotal(this.cartArray);
            }
        },
        methods: {
            deleteCart: function() {
                this.clearCart();
                window.location.reload();
            },
            removeProductCart: function(product) {
                this.removeItemCart(product);
                this.cartArray = this.getCart();
            },
            addQtyItemCart: function(product) {
                this.addOneQty(product);
                this.cartArray = this.getCart();
            },
            removeQtyItemCart: function(product) {
                this.removeOneQty(product);
                this.cartArray = this.getCart();
            },
            checkout: async function() {
                this.order();
                const stripe = await stripePromise;
                const response = await fetch(`${apiConfigs.apiUrl}/create-checkout-session`,{
                    method:"POST",
                    headers : {
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                        amount: (this.calcTotal + 4.90 ) * 100
                    })
                });
                const session = await response.json();
                const result = await stripe.redirectToCheckout({
                    sessionId:session.id
                });
                if(result.error) {
                    console.log(result.error);
                }
                
            },
            order: function() {
                this.createOrder()
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    }
                })
                .catch(err => console.log(err));
            },
            delivery: function() {
                if(this.deliveryStatus == false) {
                    this.deliveryStatus = true;
                } else {
                    this.deliveryStatus = false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img {
        width: 10em;
    }
</style>