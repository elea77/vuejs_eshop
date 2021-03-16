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
                        <button>-</button>
                        <button>+</button>
                    </td>
                    <td>
                        {{ item.qty * item.price }} €
                    </td>
                    <td>
                        <button>Supprimer du panier</button>
                    </td>
                </tr>
            </tbody>
        </table> <br><br>
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
        methods: {
            deleteCart: function() {
                this.clearCart();
            }
        },
        mixins: [Cart],
        data: function() {
            return {
                cartArray: []
            }
        },
        created() {
            this.cartArray = this.getCart();
        }
    }
</script>

<style lang="scss" scoped>
    table {
        margin: auto;
    }
</style>