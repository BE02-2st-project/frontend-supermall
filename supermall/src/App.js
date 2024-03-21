import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import Register from "./pages/Register";
import RegisterList from "./pages/RegisterList";
import EditUser from "./pages/EditUser";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

import { redirect } from "react-router-dom";

const loader = async () => {
    const userLogin = Boolean(localStorage.getItem("accessToken"));
    if (!userLogin) {
        return redirect("/login");
    }
    return null;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                // path: "/products/:category", // /item
                path: "/products/:category",
                element: <Products />,
            },
            {
                path: "/products/:category/:itemId",
                element: <ProductDetail />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/mypage",
                element: <MyPage />,
                loader: loader,
            },
            {
                path: "/mypage/edit",
                element: <EditUser />,
                loader: loader,
            },
            {
                path: "/mypage/register",
                element: <Register />,
                loader: loader,
            },
            {
                path: "/mypage/registerlist",
                element: <RegisterList />,
                loader: loader,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order",
                element: <Order />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
