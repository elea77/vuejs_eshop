<template>
    <div class="container">
        <TitlePage title="Ajouter un produit"/>
        <div class="form">
            <form>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <input type="text" class="form-control" v-model="title" placeholder="Titre">
                    </div>
                    <div class="form-group col-md-4">
                        <input type="number" class="form-control" v-model="price" placeholder="Prix">
                    </div>
                </div>
                <div class="form-group">
                    <textarea class="form-control" v-model="description" placeholder="Description" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="img" placeholder="Image">
                </div>
                <img :src="img" :alt="title" width="20%"> <br>
                
                <button type="submit" class="btn btn-primary m-3" @click="addProduct">Ajouter le produit</button>

            </form>
            <p v-if="messageError">{{ messageError }} </p>
        </div>
    </div>
</template>

<script>
    import TitlePage from '../../components/TitlePage'; 
    import ApiProducts from '../../mixins/ApiProducts';

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                title: "",
                description: "",
                price: "",
                img: "",
                userToken: "",
                messageError: ""
            }
        },
        mixins:[ApiProducts],
        methods: {
            addProduct: function(event) {
                event.preventDefault();
                this.createProduct()
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/backoffice/products');
                    }
                })
                .catch(err => console.log(err));
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>