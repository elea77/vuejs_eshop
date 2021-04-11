import apiConfigs from "../configs/api.configs";
import VueJwtDecode from "vue-jwt-decode";

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

            const date = new Date();
            const orderDate = date.toLocaleDateString(['fr-FR'], {month: 'long', day: '2-digit', year: 'numeric'}); 

            this.cartArray.forEach(item => {
                this.products.push(item.id)
            });

            return fetch(`${apiConfigs.apiUrl}/orders`, {
                method: "POST",
                headers: {"Content-Type":"Application/json"},
                body: JSON.stringify( {
                    total: this.calcTotal + 4.90,
                    status: "En cours",
                    date: orderDate,
                    user: decodedToken.id,
                    products: this.products
                })
            })
            .then (res => res.json())
        }
    }
} 