import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/home/Home";
import About from "./components/about/About.jsx";
import Error from "./components/error.jsx";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog.jsx";
import Products from "./components/products/Products";
import MoreInfo from "./components/moreInfo/MoreInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/product",
        loader: () => fetch("https://fakestoreapi.com/products"),
        element: <Products />,
      },
      {
        path: "/product/:productID",
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.productID}`),

        element: <MoreInfo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
