import { useState } from 'react';
import styles from './App.module.css';
import { HomePage } from './pages/Home';
import { Outlet } from 'react-router';


function App() {

  let [cart, setCart] = useState([

  ])
  let [totalPrice, setTotalPrice] = useState()
  return (
    <>
      <div className={styles.someDiv}>hello asd</div>
      <Outlet context={{ cart, setCart }} />
    </>
  )
}

export default App
