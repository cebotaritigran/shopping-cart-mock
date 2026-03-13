import { useOutletContext } from "react-router"
import { Navbar } from "../components/Navbar"
import styles from "./Cart.module.css"

export const CartPage = () => {
    const { cart, setCart } = useOutletContext()

    function itemPriceTotal(item) {
        let totalPrice = item.item.price * item.quantity;
        return totalPrice
    }

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
                                            <button className={styles.quantityButton}>-</button>
                                            <input value={1} className={styles.quantityInput}></input>
                                            <button className={styles.quantityButton}>+</button>
                                        </div>
                                        <div className={styles.cartDelete}>
                                            <button onClick={() => { handleDeleteCartItem(cart) }}>Delete</button>
                                        </div>
                                    </div>

                                </div>
                            );

                        })}
                    </div>
                    <div className={styles.cartSummaryCheckOut}>
                        <div>Order Summary</div>

                        <div>${cartTotalPrice()}</div>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}