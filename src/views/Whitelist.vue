<template>
    <div class="whitelist container mb-5">
        <TitlePage title="Liste de souhaits"/>
        <div v-if="listArray">

        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Titre</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in listArray" v-bind:key="item.id">
                    <td>
                        <router-link :to="{name:'Product',params:{id:item.id}}">
                            {{item.title}}
                        </router-link> 
                    </td>
                    <td>
                        <router-link :to="{name:'Product',params:{id:item.id}}">
                            <img :src="item.img" :alt="item.title" width="50px">
                        </router-link> 
                    </td>
                    <td><button class="btn btn-info" @click="removeProductWL(item)">Supprimer de la liste</button></td>
                </tr>
            </tbody>
        </table> 
        <br>
        <button class="btn btn-warning" @click="deleteCart()">Supprimer la liste de souhaits</button>
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
    

</style>