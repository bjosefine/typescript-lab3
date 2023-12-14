import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Navbar } from "./components/Navbar";
import { ProductDetail } from "./pages/ProductDetail";
import { Footer } from "./components/Footer";

function Root() {
  return (
    <>
      <main className="font-thin bg-white">
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
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
