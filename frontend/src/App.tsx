import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products/Products";
import { ProductDetail } from "./pages/Products/ProductDetail";

import { Login } from "./pages/Login/Login";
import { AdminHome } from "./pages/Admin/AdminHome";

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
        { element: <ProductDetail />, path: "/products/:productId" },
        { element: <AdminHome />, path: "/admin" },
        { element: <Login />, path: "/login" },
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
};
