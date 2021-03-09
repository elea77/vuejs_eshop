<template>
    <div>
        <TitlePage title="Page de connexion"/>
        <div class="form">
            <form action="">
                <input type="text" v-model="email" id="" class="form_input" placeholder="Adresse mail"> <br>
                <input type="text" v-model="password" id="" class="form_input" placeholder="Mot de passe"> <br>
                <button type="submit" class="btn" @click="login">Se connecter</button>
            </form>
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
                email: "",
                password: "",
                userToken: ""
            }
        },
        methods: {
            login: function(event) {
                event.preventDefault();
                return fetch("https://nodejs-myapi.herokuapp.com/api/v1/login", {
                    method: "POST",
                    headers: {"Content-Type":"Application/json"},
                    body: JSON.stringify( {
                        email: this.email,
                        password: this.password
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data,"login data");
                    console.log(data.token,"token");
                })
                .catch(err => console.log(err));
                localStorage.setItem("token", this.userToken);
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