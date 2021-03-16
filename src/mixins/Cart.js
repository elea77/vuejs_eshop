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
            console.log(cart);
            console.log(cart.includes(product._id));
            // if(cart)
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
            // Récupérer le panier localStorage.getItem + parser
            // Le modifier
            // le réinsérer localStorage.setItem

            let card = JSON.parse(localStorage.getItem('cart'));
            const filterCard = card.filter((item) => {

            });
            localStorage.setItem('cart', JSON.stringify(filteredCard));
        },
        clearCart() {
            //localStorage.removeItem('cart');
            localStorage.removeItem('cart');
        },
        removeOneQty(product) {

        },
        addOneQty(product) {

        },
        getCartTotal() {
            // let cart = JSON.parse(localStorage.getItem('cart'));
            
            // const reducer = (price, qty) => price * qty;

            // console.log(cart.reduce(reducer));

        },
        getCartCount() {
            //Array.Reduce
        }
    }
}