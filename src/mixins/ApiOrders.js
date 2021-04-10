import apiConfigs from "../configs/api.configs";


export default {
    methods: {
        getOrders() {
            return fetch(`${apiConfigs.apiUrl}/orders`)
            .then(res=>res.json())
        },
        getOrder(id) {
            return fetch(`${apiConfigs.apiUrl}/orders/${id}`)
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
        createOrder() {
            const token = localStorage.getItem('token');
            const decodedToken = VueJwtDecode.decode(token);

            this.cartArray.forEach(item => {
                this.products.push(item.id)
            });

            return fetch(`${apiConfigs.apiUrl}/orders`, {
            method: "POST",
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify( {
                total: this.calcTotal,
                status: "En cours",
                user: decodedToken.id,
                products: this.products
            })
        })
        .then (res => res.json())

        }
    }
} 