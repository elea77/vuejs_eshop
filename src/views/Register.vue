<template>
    <div class="container">
        <TitlePage title="Page d'inscription"/>
        <div class="form-register">
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="firstName" placeholder="Prénom">
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="lastName" placeholder="Nom">
                    </div>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" v-model="email" placeholder="Adresse mail">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password" placeholder="Mot de passe">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="phone" placeholder="Téléphone">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="address.street" placeholder="Adresse">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" v-model="address.city" placeholder="Ville">
                    </div>
                    <div class="form-group col-md-2">
                        <input type="number" class="form-control" v-model="address.zip" placeholder="Code postal">
                    </div>
                    <div class="form-group col-md-4">
                        <input type="text" class="form-control" v-model="address.country" placeholder="Pays">
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary" @click="login">S'inscrire</button>

            </form>
            <p v-if="messageError">{{ messageError }} </p>
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import apiConfigs from "../configs/api.configs";

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                phone: "",
                isAdmin: false,
                address: {},
                userToken: "",
                messageError: ""
            }
        },
        methods: {
            login: function(event) {
                event.preventDefault(); // empêche le rechargement de la page
                return fetch(`${apiConfigs.apiUrl}/users`, {
                    method: "POST",
                    headers: {"Content-Type":"Application/json"},
                    body: JSON.stringify( {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password,
                        isAdmin: false,
                        phone: this.phone,
                        address: {
                            zip: this.address.zip,
                            street: this.address.street,
                            city: this.address.city,
                            country: this.address.country,
                        }
                    })
                })
                .then (res => res.json())
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/login');
                    }
                })
                .catch(err => console.log(err));
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>