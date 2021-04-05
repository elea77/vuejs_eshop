import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getProducts() {
            // console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/products`)
            .then(res=>res.json())
        },
        getProduct() {
            return fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`)
            .then(res => res.json())
        },
        editProduct() {
            return fetch(`${apiConfigs.apiUrl}/products/${id}`, {
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
    }
} 