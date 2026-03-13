import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { HomePage } from './pages/Home.jsx';
import { ShopPage } from './pages/Shop.jsx';
import { CartPage } from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "shop",
        element: <ShopPage />
      },
      {
        path: "cart",
        element: <CartPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
