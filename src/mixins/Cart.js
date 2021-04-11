export default {
    methods: {

        // Quand vous insérez en dans le localStorage => stringifier 
        // Le panier sera un tableau d'objet
        
        addToCart(product) {

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            let productObject = {
                id: product._id,
                title: product.title,
                price: product.price,
                qty: 1
            }
            // console.log(cart);
            // console.log(cart.includes(product._id));
           
            let indexOfExistingProduct = cart.findIndex(
                (el) => el.id === productObject.id
            )

            if(indexOfExistingProduct !== -1) {
                cart[indexOfExistingProduct].qty += 1
            } else {
                cart.push(productObject);
            }

            localStorage.setItem('cart', JSON.stringify(cart));

        },
        getCart() {
            return JSON.parse(localStorage.getItem('cart'));
        },
        removeItemCart(product) {

            let cart = JSON.parse(localStorage.getItem('cart'));

            const filteredCart = cart.filter((item) => {
                return item.id !== product.id;
            });
            const updateCart = localStorage.setItem('cart', JSON.stringify(filteredCart));
        
            if(updateCart == undefined) {
                this.clearCart();
            }
        },
        clearCart() {
            localStorage.removeItem('cart');
        },
        removeOneQty(product) {
            let cart = JSON.parse(localStorage.getItem('cart'));

            let productObject = {
                id: product.id,
                title: product.title,
                price: product.price,
                qty: 1
            }
            let indexOfExistingProduct = cart.findIndex((el) => el.id === productObject.id );

            if(indexOfExistingProduct != -1) {

                if(cart[indexOfExistingProduct].qty > 1) {

                    cart[indexOfExistingProduct].qty--;
                }
            }
            localStorage.setItem('cart', JSON.stringify(cart));


        },
        addOneQty(product) {
            let cart = JSON.parse(localStorage.getItem('cart'));

            let productObject = {
                id: product.id,
                title: product.title,
                price: product.price,
                qty: 1
            }
            let indexOfExistingProduct = cart.findIndex((el) => el.id === productObject.id );

            if(indexOfExistingProduct != -1) {
                cart[indexOfExistingProduct].qty++;
            }
            localStorage.setItem('cart', JSON.stringify(cart));

        },
        getCartTotal(cart) {

            let total = cart.reduce(
                (total, item) => total + (item.qty * item.price), 0
            );
            return total;

        },
        getCartCount(cart) {
         
            let total = cart.reduce(
                (total, item) => total + item.qty, 0
            );
            return total;
        }
    }
}