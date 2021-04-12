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
        editCategory(id) {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/categories/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify( {
                    title: this.title
                })
            })
            .then (res => res.json())
        },
        createCategory() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/categories`, {
                method: "POST",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify( {
                    title: this.title
                })
            })
            .then (res => res.json())
        }
    }
} 