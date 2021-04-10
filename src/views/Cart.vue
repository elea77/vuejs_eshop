<template>
    <div class="shopping__cart">
        <TitlePage title="Panier"/>
        <div v-if="cartArray">
            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                        <th></th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cartArray" v-bind:key="item._id">
                        <td>{{item.title}}</td>
                        <td>{{item.qty}}</td>
                        <td>{{item.price}} €</td>
                        <td>
                            <button @click="removeQtyItemCart(item)">-</button>
                            <button @click="addQtyItemCart(item)">+</button>
                        </td>
                        <td>
                            {{ item.price * item.qty }} €
                        </td>
                        <td>
                            <button @click="removeProductCart(item)">Supprimer du panier</button>
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

            <button @click="deleteCart()">Supprimer le panier</button>
            <button @click="checkout()">Passer la commande</button>
        </div>
        <div v-else>
            <h5>Votre panier est vide</h5>
        </div>

    </div>
</template>

<script>
    import Cart from '../mixins/Cart'
    import TitlePage from "../components/TitlePage";
    import { loadStripe } from '@stripe/stripe-js';
    import apiConfigs from "../configs/api.configs";
    const stripePromise = loadStripe('pk_test_51IYAwmJ5UFJGtqNY47wrtVEcNKKVkbiO0TzfR5kQ9Sfle8LjCPvQXzhuWH7PKoRaWQNP3oC2mVBhHPqkUn3n4BId00YcpQNq2k');


    export default {
        components: {
            TitlePage
        },
        mixins: [Cart],
        data: function() {
            return {
                cartArray: []
            }
        },
        created() {
            this.cartArray = this.getCart();
            // this.cartTotal = this.getCartTotal();
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
                const stripe = await stripePromise;
                const response = await fetch(`${apiConfigs.apiUrl}/create-checkout-session`,{
                    method:"POST",
                    headers : {
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                    amount:30000
                    })
                });
                const session = await response.json();
                const result = await stripe.redirectToCheckout({
                    sessionId:session.id
                });
                console.log(result);
                if(result.error) {
                    console.log(result.error);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    table {
        margin: auto;
    }
</style>