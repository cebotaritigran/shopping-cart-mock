import App from "../App"
import { CartPage } from "../pages/Cart"
import { HomePage } from "../pages/Home"
import { ShopPage } from "../pages/Shop"

const routes = [
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
]

export default routes;