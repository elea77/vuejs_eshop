import apiConfigs from "../configs/api.configs";
import VueJwtDecode from "vue-jwt-decode";


export default {
    methods: {
        getUsers() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/users`, {
                method: "GET",
                headers: {
                    Authorization: token
                }
            })
            .then(res=>res.json())
        },
        getUser() {
                const token = localStorage.getItem('token');
                const decodedToken = VueJwtDecode.decode(token);
                return fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`, {
                    headers: {
                        Authorization: token
                    }
                })
                .then(res=>res.json())
        },
        editUser() {
                const token = localStorage.getItem('token');
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
        },
        deleteUser(id) {
            return fetch(`${apiConfigs.apiUrl}/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type":"Application/json"
                }
            })
            .then (res => res.json())
        },
        createUser() {
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
        },
        login() {
            return fetch(`${apiConfigs.apiUrl}/login`, {
                method: "POST",
                headers: {"Content-Type":"Application/json"},
                body: JSON.stringify( {
                    email: this.email,
                    password: this.password
                })
            })
            .then (res => res.json())
        },
        createAdmin() {
            return fetch(`${apiConfigs.apiUrl}/users`, {
                method: "POST",
                headers: {"Content-Type":"Application/json"},
                body: JSON.stringify( {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    isAdmin: true,
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
        },
    }
} 