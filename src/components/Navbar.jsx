import { Link, NavLink } from "react-router";
import styles from './Navbar.module.css'
import { useState, useEffect } from "react";
import { Menu } from 'lucide-react';

export const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setMenu] = useState(false)
    let navbarInner = document.querySelector(`.${styles.inner}`)
    let navbarInnerMobile = document.querySelector(`.${styles.innerMobile}`)
    let navbar = document.querySelector(`.${styles.navbar}`)


    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)


        } else {
            setIsMobile(false)

        }
    }

    window.addEventListener("resize", handleResize)
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1);

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const handleMenuOpener = () => {
        if (isMenuOpen) {
            navbar.classList.remove(styles.navbarMobile)
            navbarInnerMobile.classList.add(styles.inner)
            navbarInnerMobile.classList.remove(styles.innerMobile)
            setMenu(false)
        } else {
            navbar.classList.add(styles.navbarMobile)
            navbarInner.classList.add(styles.innerMobile)
            navbarInner.classList.remove(styles.inner)
            setMenu(true)
        }
    }


    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.inner}>

                    <div className={styles.container}>
                        <div className={styles.logo}><Link to="/" className={styles.logo}><i className={styles.logo}>the</i> Mock</Link></div>
                        {isMobile ?
                            <button className={styles.menuButton} onClick={handleMenuOpener}><Menu /></button>
                            :
                            <div className={styles.routes}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? `${styles.route} ${styles.active}` : styles.route
                                    }
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    to="/shop"
                                    className={({ isActive }) =>
                                        isActive ? `${styles.route} ${styles.active}` : styles.route
                                    }
                                >
                                    Shop
                                </NavLink>

                                <NavLink
                                    to="/cart"
                                    className={({ isActive }) =>
                                        isActive ? `${styles.route} ${styles.active}` : styles.route
                                    }
                                >
                                    Cart
                                </NavLink>
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
                        <div className={styles.routesMobile}>
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