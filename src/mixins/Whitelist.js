export default {
    methods: {
        addToWL(product) {

            let whitelist = JSON.parse(localStorage.getItem('whitelist')) || [];

            let productObject = {
                id: product._id,
                title: product.title,
                img: product.img,
                description: product.description
            }
           
            let indexOfExistingProduct = whitelist.findIndex(
                (el) => el.id === productObject.id
            )

            if(indexOfExistingProduct !== -1) {
                
            } else {
                whitelist.push(productObject);
            }

            localStorage.setItem('whitelist', JSON.stringify(whitelist));

        },
        getWL() {
            return JSON.parse(localStorage.getItem('whitelist'));
        },
        removeItemWL(product) {

            let whitelist = JSON.parse(localStorage.getItem('whitelist'));

            const filteredWL = whitelist.filter((item) => {
                return item.id !== product.id;
            });
            const updateWL = localStorage.setItem('whitelist', JSON.stringify(filteredWL));
        
            if(updateWL == undefined) {
                this.clearWL();
            }
        },
        clearWL() {
            localStorage.removeItem('whitelist');
        },
    }
}