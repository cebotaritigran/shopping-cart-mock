import { Navbar } from "../components/Navbar"
import styles from "./Home.module.css"

export const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className={styles.home}>
                this is home
            </div>
        </>
    )
}