<template>
    <div class="whitelist">
        <TitlePage title="Liste de souhaits"/>
        <div v-if="listArray">

        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Image</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listArray" v-bind:key="item._id">
                    <td>{{item.title}}</td>
                    <td><img :src="item.img" :alt="item.title" width="50px"></td>

                    <td>
                        <button @click="removeProductWL(item)">Supprimer de la liste</button>
                    </td>
                </tr>
            </tbody>
        </table> 

        <button @click="deleteCart()">Supprimer la liste de souhait</button>
        </div>
        <div v-else>
            <h5>Votre liste est vide</h5>
        </div>
    </div>
</template>

<script>
    import Whitelist from '../mixins/Whitelist'
    import TitlePage from "../components/TitlePage";

    export default {
        components: {
            TitlePage
        },
        mixins: [Whitelist],
        data: function() {
            return {
                listArray: []
            }
        },
        created() {
            this.listArray = this.getWL();
        },
        methods: {
            deleteCart: function() {
                this.clearWL();
                window.location.reload();
            },
            removeProductWL: function(product) {
                this.removeItemWL(product);
                this.listArray = this.getWL();
            },
            addQtyItemCart: function(product) {
                this.addOneQty(product);
                this.listArray = this.getWL();
            }
        }
    }
</script>

<style lang="scss" scoped>
    table {
        margin: auto;
    }
</style>