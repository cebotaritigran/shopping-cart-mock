import { Link } from "react-router";
import styles from './Navbar.module.css'
import { useState, useEffect } from "react";
import { Menu } from 'lucide-react';

export const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setMenu] = useState(false)
    let navbarInner = document.querySelector(`.${styles.inner}`)
    let navbarInnerMobile = document.querySelector(`.${styles.innerMobile}`)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)


        } else {
            setIsMobile(false)

        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const handleMenuOpener = () => {
        if (isMenuOpen) {

            navbarInnerMobile.classList.add(styles.inner)
            navbarInnerMobile.classList.remove(styles.innerMobile)
            setMenu(false)
        } else {


            navbarInner.classList.add(styles.innerMobile)
            navbarInner.classList.remove(styles.inner)
            setMenu(true)
        }
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.inner}>

                    <div className={styles.routes}>
                        <div className={styles.logo}>Logo</div>
                        {isMobile ?
                            <button className={styles.menuButton} onClick={handleMenuOpener}><Menu /></button>
                            :
                            <div className={styles.routes}>
                                <Link to="/" className={styles.route}>Home</Link>
                                <Link to="/shop" className={styles.route}>Shop</Link>
                                <Link to="/cart" className={styles.route}>Cart</Link>
                            </div>
                        }
                        {/* {isMenuOpen ?
                            <div className={styles.routes}>
                                <Link to="/" className={styles.route}>Home</Link>
                                <Link to="/shop" className={styles.route}>Shop</Link>
                                <Link to="/cart" className={styles.route}>Cart</Link>
                            </div>
                            :
                            null
                        } */}
                    </div>
                    {isMenuOpen ?
                        <div className={styles.routes}>
                            <Link to="/" className={styles.route}>Home</Link>
                            <Link to="/shop" className={styles.route}>Shop</Link>
                            <Link to="/cart" className={styles.route}>Cart</Link>
                        </div>
                        :
                        null
                    }
                </div>
                {/* {isMenuOpen ?
                    <div className={styles.routes}>
                        <Link to="/" className={styles.route}>Home</Link>
                        <Link to="/shop" className={styles.route}>Shop</Link>
                        <Link to="/cart" className={styles.route}>Cart</Link>
                    </div>
                    :
                    null} */}

            </div>
        </>
    )
}