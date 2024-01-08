import React, { useState } from "react";

interface CartContextProps {
  cartProducts: Array<number>;
  setCartProducts: React.Dispatch<React.SetStateAction<Array<number>>>;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = React.createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<Array<number>>([]);
  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};
