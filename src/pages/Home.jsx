import { Navbar } from "../components/Navbar"
import styles from "./Home.module.css"

export const HomePage = () => {

    
    return (
        <>
            <Navbar></Navbar>
            <div className={styles.home}>
                <div className={styles.homeHeading}>
                    <div className={styles.homeHeadingTop}>
                        Your Essential Style,
                    </div>
                    <div className={styles.homeHeadingBottom}>
                        Carefully Chosen.
                    </div>

                </div>
                <div className={styles.description}>
                    Welcome to <div className={styles.underline}>The Mock</div> – where quality, consciousness, and timeless design converge. We present a handpicked collection of essentials for your wardrobe and home, curated for a more intentional lifestyle.
                </div>
                <div className={styles.heroCta}>
                    <button className={styles.exploreButton}>
                        Explore The Collection
                    </button>
                    <div className={styles.discoverMore}>Discover pieces that matter.</div>
                </div>
            </div>
        </>
    )
}