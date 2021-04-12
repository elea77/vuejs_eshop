<template>
    <div class="container mb-5">
        <TitlePage title="Modification d'un produit"/>
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

                <p class="category__product">Catégorie actuelle: {{ this.categ.title }} </p>
                
                <select class="form-control" v-model="category">
                    <option v-for="category in categories" v-bind:key="category._id" :value="category._id">{{ category.title }}</option>
                </select>

                <button type="submit" class="btn btn-primary m-3" @click="edit">Modifier le produit</button>

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
                title:"",
                description: "",
                price: "",
                img: "",
                messageError: "",
                category: "",
                categ: "",
                categories: {}
            }
        },
        mixins:[ApiProducts, ApiCategories],
        methods: {
            edit: function(event) {
                event.preventDefault(); // empêche le rechargement de la page
                this.editProduct()
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } 
                    else {
                        this.$router.push('/backoffice/products');
                    }
                })
                .catch(err => console.log(err));
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        },
        created() {
            this.getProduct()
            .then(data=>{
                    this.title = data.title;
                    this.price = data.price;
                    this.description = data.description;
                    this.img = data.img;
                    this.categ = data.categories;


                    this.getCategory(this.categ)
                    .then((data) => {
                        this.categ = data;
                        console.log(this.categ.title);

                    })
                    .catch(err => console.log(err))
            })
            .catch((err) => console.log(err))
            
    

            this.getCategories()
            .then((data) => {
                this.categories = data;
            })
            .catch(err => console.log(err))
        },
    }
</script>

<style lang="scss" scoped>
    .form {
        .form_input {
            width: 40%;
            height: calc(1.5em + .75rem + 2px);
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            margin-bottom: 1rem;
        }
        .btn {
            display: inline-block;
            font-weight: 400;
            color: #212529;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
        }
        .category__product {
            text-align: left;
        }
    }
</style>