import React, { useState, useEffect } from "react";

interface CartContextProps {
  cartProducts: Array<number>;
  setCartProducts: React.Dispatch<React.SetStateAction<Array<number>>>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = React.createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<Array<number>>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    setCartCount(cartProducts.length);
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, cartCount, setCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
