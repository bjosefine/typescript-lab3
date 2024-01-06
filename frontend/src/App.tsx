import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products/Products";
import { ProductDetail } from "./pages/Products/ProductDetail";

import { Login } from "./pages/Login/Login";
import { AdminHome } from "./pages/Admin/AdminHome";

import { CreateAccount } from "./pages/Login/CreateAccount";

import { UserProfile } from "./pages/Profile/UserProfile";
import { UserFavorites } from "./pages/Profile/UserFavorites";
import { UserCart } from "./pages/Profile/UserCart";
import { UserSettings } from "./pages/Profile/UserSettings";
import { UserOrders } from "./pages/Profile/UserOrders";

function Root() {
  return (
    <>
      <UserProvider>
        <FavoriteProvider>
          <main className="font-thin bg-white">
            <Navbar />
            <div className="min-h-screen">
              <Outlet />
            </div>
            <Footer />
          </main>
        </FavoriteProvider>
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
        { element: <CreateAccount />, path: "/create" },
        { element: <AdminHome />, path: "/admin" },
        { element: <UserProfile />, path: "/profile" },
        { element: <UserFavorites />, path: "/favorite" },
        { element: <UserCart />, path: "/cart" },
        { element: <UserSettings />, path: "/settings" },
        { element: <UserOrders />, path: "/orders" },
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
};
