import { Navbar } from "../components/Navbar"
import styles from "./Shop.module.css"
// import fetchProducts from "../services/product"
// import { useEffect, useState } from "react"
import { useOutletContext } from "react-router"

export const ShopPage = () => {

    const { cart, setCart, products, setProducts } = useOutletContext()
    // const [products, setProducts] = useState([])


    console.log(products)

    // useEffect(() => {

    //     async function loadProducts() {
    //         const productsData = await fetchProducts();
    //         setProducts(productsData)
    //     }

    //     loadProducts();
    // }, []);

    function handleAddToCart(product) {
        let idExists = cart.some((item) => {
            return item.id === product.id
        })

        if (idExists) {
            let updatedCart = cart.map((cart) => {
                if (cart.id == product.id) {
                    return {
                        ...cart,
                        quantity: cart.quantity + product.quantity
                    }

                }
                return cart;
            })
            setCart(updatedCart)
        } else {
            setCart([
                ...cart,
                {
                    id: product.id,
                    item: product,
                    quantity: product.quantity
                }
            ])
        }
        // console.log(idExists)

    }

    function handleQuantityDecrement(id) {
        setProducts(
            products.map((product) => {

                if (product.id === id && product.quantity >= 1) {
                    // console.log(product.quantity)
                    // product.quantity = product.quantity + 1;
                    return { ...product, quantity: product.quantity - 1 }
                }

                return product
            })
        )
    }

    function handleQuantityIncrement(id) {
        setProducts(
            products.map((product) => {
                if (product.id === id) {
                    // console.log(product.quantity)
                    // product.quantity = product.quantity + 1;
                    return { ...product, quantity: product.quantity + 1 }
                }

                return product
            })
        )
    }

    // console.log(cart)
    // console.log(products)
    return (
        <>
            <Navbar></Navbar>

            <div className={styles.home}>
                {products.map((product) => {

                    return (
                        <div className={styles.itemContainer} key={product.id}>
                            <div className={styles.imageContainer}>
                                <img src={product.image} alt={"placeholder text"}></img>
                            </div>
                            <div className={styles.itemDetails}>
                                <div className={styles.itemName}>{product.title}</div>
                                <div className={styles.itemPrice}>${product.price}</div>

                            </div>
                            <div className={styles.addCartContainer}>
                                <div className={styles.itemQuantity}>
                                    <button className={styles.quantityButton} onClick={() => { handleQuantityDecrement(product.id) }}>-</button>
                                    <input value={product.quantity} className={styles.quantityInput}></input>
                                    <button className={styles.quantityButton} onClick={() => { handleQuantityIncrement(product.id) }}>+</button>
                                </div>
                                <div className={styles.cartButton}>
                                    <button className={styles.addcartButton} onClick={() => handleAddToCart(product)}>Add</button>
                                </div>
                            </div>
                        </div>
                    )

                })}

            </div>
        </>
    )
}