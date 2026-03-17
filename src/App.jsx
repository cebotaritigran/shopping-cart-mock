import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { HomePage } from './pages/Home';
import { Outlet } from 'react-router';
import fetchProducts from './services/product';

function App() {

  let [cart, setCart] = useState([

  ])
  const [products, setProducts] = useState([])
  useEffect(() => {

    async function loadProducts() {
      const productsData = await fetchProducts();
      setProducts(productsData)
    }

    loadProducts();
  }, []);


  // let [totalPrice, setTotalPrice] = useState()
  return (
    <>
      <div className={styles.someDiv}>hello asd</div>
      <Outlet context={{ cart, setCart, products, setProducts }} />
    </>
  )
}

export default App
