import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getProducts() {
            return fetch(`${apiConfigs.apiUrl}/products`)
            .then(res=>res.json())
        },
        getProduct() {
            return fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`)
            .then(res => res.json())
        },
        editProduct() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`, {
                method: "PUT",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify( {
                    title: this.title,
                    price: this.price,
                    description: this.description,
                    img: this.img,
                    categories: this.category
                })
            })
            .then (res => res.json())
        },
        createProduct() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/products`, {
                method: "POST",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify( {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    img: this.img,
                    categories: this.category
                })
            })
            .then (res => res.json())
        },
        deleteProduct(id) {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/products/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                }
            })
            .then (res => res.json())
        }
    }
} 