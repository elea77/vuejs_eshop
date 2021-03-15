<template>
    <div>
        <TitlePage title="Page d'inscription"/>
        <div class="form">
            <!-- Autre méthode:  -->
            <!-- <form @submit.prevent="login"> -->
            <form>
                <div class="form__group">
                    <input type="text" v-model="firstName" id="" class="form_input" placeholder="Prénom"> <br>
                </div>
                <div class="form__group">
                    <input type="text" v-model="lastName" id="" class="form_input" placeholder="Nom"> <br>
                </div>
                <div class="form__group">
                    <input type="text" v-model="email" id="" class="form_input" placeholder="Adresse mail"> <br>
                </div>
                <div class="form__group">
                    <input type="password" v-model="password" id="" class="form_input" placeholder="Mot de passe"> <br>
                </div>
                <div class="form__group">
                    <button type="submit" class="btn" @click="login">S'inscrire</button>
                </div>
            </form>
            <p v-if="messageError">{{ messageError }} </p>
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";

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
                userToken: "",
                messageError: ""
            }
        },
        methods: {
            login: function(event) {
                event.preventDefault(); // empêche le rechargement de la page
                return fetch("https://nodejs-myapi.herokuapp.com/api/v1/users", {
                    method: "POST",
                    headers: {"Content-Type":"Application/json"},
                    body: JSON.stringify( {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password
                    })
                })
                .then (res => res.json())
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error.details[0].message;
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
    }
</style>