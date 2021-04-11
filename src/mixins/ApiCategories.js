import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getCategories() {
            return fetch(`${apiConfigs.apiUrl}/categories`)
            .then(res=>res.json())
        },
        getCategory(id) {
            return fetch(`${apiConfigs.apiUrl}/categories/${id}`)
            .then(res => res.json())
        },
        // editProduct() {
        //     return fetch(`${apiConfigs.apiUrl}/products/${this.$route.params.id}`, {
        //         method: "PUT",
        //         headers: {
        //             "Content-Type":"Application/json"
        //         },
        //         body: JSON.stringify( {
        //             title: this.title,
        //             price: this.price,
        //             description: this.description,
        //             img: this.img,
        //             categories: this.category
        //         })
        //     })
        //     .then (res => res.json())
        // },
        // createProduct() {
        //     return fetch(`${apiConfigs.apiUrl}/products`, {
        //         method: "POST",
        //         headers: {"Content-Type":"Application/json"},
        //         body: JSON.stringify( {
        //             title: this.title,
        //             description: this.description,
        //             price: this.price,
        //             img: this.img,
        //             categories: this.category
        //         })
        //     })
        //     .then (res => res.json())
        // },
        // deleteProduct(id) {
        //     return fetch(`${apiConfigs.apiUrl}/products/${id}`, {
        //         method: "DELETE",
        //         headers: {
        //             "Content-Type":"Application/json"
        //         }
        //     })
        //     .then (res => res.json())
        // },
       
    }
} 