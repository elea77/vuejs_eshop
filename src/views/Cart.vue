<template>
    <div class="shopping__cart">
        <TitlePage title="Panier"/>
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

    </div>
</template>

<script>
import Cart from '../mixins/Cart'
import TitlePage from "../components/TitlePage";

    export default {
        components: {
            TitlePage
        },
        mixins: [Cart],
        data: function() {
            return {
                cartArray: [],
                // cartTotal: ""
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    table {
        margin: auto;
    }
</style>