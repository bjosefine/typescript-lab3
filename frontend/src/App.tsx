import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Navbar } from "./components/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <main className="bg-orange-500">
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
      ],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
};
