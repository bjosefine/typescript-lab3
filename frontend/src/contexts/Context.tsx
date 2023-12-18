import React from "react";
import { useState } from "react";
import { UserInterface } from "../interface/interface";

interface UserContextInterface {
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
  const [user, setUser] = useState<UserInterface | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
