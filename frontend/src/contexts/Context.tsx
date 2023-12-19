import React from "react";
import { useState, useEffect } from "react";
import { UserInterface } from "../interface/interface";

export interface UserContextInterface {
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
}

interface UserProviderProp {
  children: React.ReactNode;
}

export const UserContext = React.createContext<UserContextInterface | null>(
  null
);

export const UserProvider = ({ children }: UserProviderProp) => {
  const [user, setUser] = useState<UserInterface | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
