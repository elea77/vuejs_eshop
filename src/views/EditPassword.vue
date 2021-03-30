<template>
    <div>
        <TitlePage title="Modification de mot de passe"/>
        <div class="form">
            <form>
                <div class="form__group">
                    <input type="password" v-model="password" id="" class="form_input" placeholder="Mot de passe" > <br>
                </div>
                <div class="form__group">
                    <input type="password" v-model="repeat_password" id="" class="form_input" placeholder="Répéter le mot de passe"> <br>
                </div>
                
                <div class="form__group">
                    <button type="submit" class="btn" @click="edit">Enregistrer le nouveau mot de passe</button>
                </div>
            </form>
            <p v-if="messageError">{{ messageError }} </p>
        </div>
    </div>
</template>

<script>
    import VueJwtDecode from "vue-jwt-decode";
    import TitlePage from "../components/TitlePage";
    import apiConfigs from "../configs/api.configs";

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                password: "",
                repeat_password: "",
                userToken: "",
                messageError: ""
            }
        },
        methods: {
            edit: function(event) {
                event.preventDefault(); // empêche le rechargement de la page
                const token = localStorage.getItem('token');
                if(token) {
                    
                    if(this.password == this.repeat_password) {
                        const decodedToken = VueJwtDecode.decode(token);
                        return fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`, {
                            method: "PUT",
                            headers: {
                                Authorization: token,
                                "Content-Type":"Application/json"
                            },
                            body: JSON.stringify( {
                                password: this.password
                            })
                        })
                        .then (res => res.json())
                        .then((data) => {
                            console.log(this.password);
                            if(data.error) {
                                console.log(data.error);
                                this.messageError = data.error;
                            } 
                            else {
                                this.$router.push('/account');
                            }
                        })
                        .catch(err => console.log(err));
                    }
                    else {
                        this.messageError = "Les mots de passe ne correspondent pas";
                    }
                    
                }
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