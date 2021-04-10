import apiConfigs from "../configs/api.configs";


export default {
    methods: {
        getOrders() {
            return fetch(`${apiConfigs.apiUrl}/orders`)
            .then(res=>res.json())
        },
        getOrder() {
            return fetch(`${apiConfigs.apiUrl}/orders/${this.$route.params.id}`)
            .then(res => res.json())
        },
        editOrder(id) {
            return fetch(`${apiConfigs.apiUrl}/orders/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify( {
                    status: this.status
                })
            })
            .then (res => res.json())
        },
    }
} 