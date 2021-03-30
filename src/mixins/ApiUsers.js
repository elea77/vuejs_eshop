import apiConfigs from "../configs/api.configs";
import VueJwtDecode from "vue-jwt-decode";


export default {
    methods: {
        getUsers() {
            console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/users`)
            .then(res=>res.json())
        },
        getUser() {
            const token = localStorage.getItem('token');
            if(token) {
                const decodedToken = VueJwtDecode.decode(token);
                return fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`, {
                    headers: {
                        Authorization: token
                    }
                })
                .then(res=>res.json())
            }
        },
        editUser() {
            const token = localStorage.getItem('token');
            if(token) {
                const decodedToken = VueJwtDecode.decode(token);
                return fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`, {
                    method: "PUT",
                    headers: {
                        Authorization: token,
                        "Content-Type":"Application/json"
                    },
                    body: JSON.stringify( {
                        firstName: this.firstName,
                        lastName: this.lastName,
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
            }
        },
        deleteUser() {
        }
    }
} 