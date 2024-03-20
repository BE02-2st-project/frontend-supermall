import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Main from "./pages/Main";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import Cart from "./pages/Cart";

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
        path: "/products", // /item
        element: <Products />,
      },
      {
        path: "/products/:productId",
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
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
