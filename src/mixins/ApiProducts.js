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
            return fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify( {
                    title: this.title,
                    price: this.price,
                    description: this.description,
                    img: this.img
                })
            })
            .then (res => res.json())
        },
        createProduct() {
            return fetch(`${apiConfigs.apiUrl}/products`, {
                method: "POST",
                headers: {"Content-Type":"Application/json"},
                body: JSON.stringify( {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    img: this.img
                })
            })
            .then (res => res.json())
        },
        deleteProduct() {
            return fetch(`${apiConfigs.apiUrl}/products/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type":"Application/json"
                }
            })
            .then (res => res.json())
        }
    }
} 