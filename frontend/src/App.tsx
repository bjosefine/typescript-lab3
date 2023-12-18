import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { UserProvider } from "./contexts/Context";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products/Products";
import { ProductDetail } from "./pages/Products/ProductDetail";

import { Login } from "./pages/Login/Login";
import { AdminHome } from "./pages/Admin/AdminHome";
import { UserProfile } from "./pages/Profile/UserProfile";

function Root() {
  return (
    <>
      <UserProvider>
        <main className="font-thin bg-white">
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </main>
      </UserProvider>
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
        { element: <Login />, path: "/login" },
        { element: <AdminHome />, path: "/admin" },
        { element: <UserProfile />, path: "/profile" },
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
};
