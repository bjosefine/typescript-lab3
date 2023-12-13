import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Navbar } from "./components/Navbar";
import { ProductDetail } from "./pages/ProductDetail";

function Root() {
  return (
    <>
      <main className="font-thin bg-white">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

export const App = () => {
  const router = createBrowserRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Products />, path: "/products" },
        { element: <ProductDetail />, path: "products/:productId" },
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
};
