import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getUsers() {
            console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/users`)
            .then(res=>res.json())
        },
        getUser() {

        },
        // etc //
    }
} 