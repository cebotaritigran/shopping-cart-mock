import { useOutletContext } from "react-router"
import { Navbar } from "../components/Navbar"
import styles from "./Cart.module.css"

export const CartPage = () => {
    const { cart, setCart, products, setProducts } = useOutletContext()

    function itemPriceTotal(item) {
        let totalPrice = item.item.price * item.quantity;
        return totalPrice
    }

    // function handleAddToCart(product) {
    //     let idExists = cart.some((item) => {
    //         return item.id === product.id
    //     })
    //     if (idExists) {
    //         let updatedCart = cart.map((cart) => {
    //             if (cart.id == product.id) {

    //                 return {
    //                     ...cart,
    //                     quantity: product.quantity
    //                 }

    //             }
    //             return cart;
    //         })
    //         setCart(updatedCart)
    //     } else {
    //         setCart([
    //             ...cart,
    //             {
    //                 id: product.id,
    //                 item: product,
    //                 quantity: product.quantity
    //             }
    //         ])
    //     }
    // }


    function cartTotalPrice() {
        let cartTotalPrice = 0;
        cart.map((item) => {
            cartTotalPrice += (Number(item.quantity) * Number(item.item.price))

        })

        return cartTotalPrice
    }

    function handleDeleteCartItem(item) {
        const id = item.id
        let updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart)

    }

    function handleQuantityDecrement(id) {
        setCart(
            cart.map((cart) => {
                if (cart.id === id) {
                    return { ...cart, quantity: cart.quantity - 1 }
                }
                return cart
            })
        )

        // setProducts(
        //     products.map((product) => {

        //         if (product.id === item.id && product.quantity >= 1) {
        //             // console.log(product.quantity)
        //             // product.quantity = product.quantity + 1;
        //             handleAddToCart(item)
        //             return { ...product, quantity: product.quantity - 1 }
        //         }

        //         return product
        //     })
        // )

    }

    function handleQuantityIncrement(id) {
        setCart(
            cart.map((cart) => {
                if (cart.id === id) {
                    return { ...cart, quantity: cart.quantity + 1 }
                }
                return cart
            })
        )

        // setProducts(
        //     products.map((product) => {
        //         if (product.id === item.id) {
        //             // console.log(product.quantity)
        //             // product.quantity = product.quantity + 1;

        //             return { ...product, quantity: product.quantity + 1 }

        //         }

        //         return product
        //     })
        // )


        console.log(cart)
    }

    function handleQuantityInputChange(id, e) {
        console.log(e.target.value)
        setCart(
            cart.map((cart) => {
                if (cart.id === id) {
                    return { ...cart, quantity: Number(e.target.value) }
                }
                return cart
            })
        )
    }
    return (
        <>
            <Navbar></Navbar>
            <div className={styles.page}>
                <div className={styles.header}>
                    <div className={styles.title}>Shopping Cart</div>
                    <div className={styles.subTitle}>Review your items below before proceeding to checkout.</div>
                </div>
                <div className={styles.cartLayout}>
                    <div className={styles.cartList}>
                        {cart.map((cart) => {
                            return (
                                <div className={styles.cartItem}>
                                    <div className={styles.productInfo}>
                                        <div className={styles.imageContainer}>
                                            <img src={cart.item.image} alt={"placeholder text"}></img>
                                        </div>
                                        <div className={styles.cartInformation}>
                                            <div className={styles.cartTitle}>{cart.item.title}</div>
                                            <div className={styles.cartPrice}>${`${cart.item.price} each (Subtotal: $${itemPriceTotal(cart)})`}</div>
                                        </div>
                                    </div>

                                    <div className={styles.cartManipulation}>
                                        <div className={styles.itemQuantity}>
                                            <button className={styles.quantityButton} onClick={() => { handleQuantityDecrement(cart.id) }}>-</button>
                                            <input value={cart.quantity} className={styles.quantityInput} onChange={(Event) => { handleQuantityInputChange(cart.id, Event) }}></input>
                                            <button className={styles.quantityButton} onClick={() => { handleQuantityIncrement(cart.id) }}>+</button>
                                        </div>
                                        <div className={styles.cartDelete}>
                                            <button className={styles.deleteButton} onClick={() => { handleDeleteCartItem(cart) }}>Delete</button>
                                        </div>
                                    </div>

                                </div>
                            );

                        })}
                    </div>
                    <div className={styles.cartSummaryCheckOut}>
                        <div className={styles.cartOrderTotal}>Order Summary</div>

                        <div className={styles.cardTotal}>${cartTotalPrice()}</div>
                        <button className={styles.proceedButton}>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}