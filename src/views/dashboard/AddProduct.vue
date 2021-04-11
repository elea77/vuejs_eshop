<template>
    <div class="container mb-5">
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

                <select class="form-control" v-model="category">
                    <option v-for="categ in categories" v-bind:key="categ._id" :value="categ._id">{{ categ.title }}</option>
                </select>
                
                <button type="submit" class="btn btn-primary m-3" @click="addProduct">Ajouter le produit</button>

            </form>
            <p v-if="messageError">{{ messageError }} </p>
        </div>
    </div>
</template>

<script>
    import TitlePage from '../../components/TitlePage'; 
    import ApiProducts from '../../mixins/ApiProducts';
    import ApiCategories from '../../mixins/ApiCategories';

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
                messageError: "",
                category: "",
                categories: {}
            }
        },
        mixins:[ApiProducts, ApiCategories],
        methods: {
            addProduct: function(event) {
                event.preventDefault();
                console.log(this.category);
                this.createProduct()
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/backoffice/products');
                    }
                })
                .catch(err => console.log(err))
            }
        },
        created() {
            this.getCategories()
            .then((data) => {
                this.categories = data;
            })
            .catch(err => console.log(err))
        }
    }
</script>

<style lang="scss" scoped>
    
</style>