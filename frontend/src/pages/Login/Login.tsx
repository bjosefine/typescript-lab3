import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/Context";
import { UserContextInterface } from "../../contexts/Context";
import { Button } from "../../components/Button";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext) as UserContextInterface;
  const { user, setUser } = userContext;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const userData = await response.json();

    if (response.ok) {
      console.log("Logged in:", userData);
      setUser(userData);
      window.location.replace("/profile");
    } else {
      console.log("Login failed:", user);
    }
  };

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <>
      <div className="flex items-center flex-col gap-4">
        <p className="font-secondary text-4xl tracking-tight text-center">
          Login
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-2 gap-2 items-center">
            <input
              type="text"
              placeholder="email"
              className="border border-black w-52"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              className="border border-black w-52"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button label="Log in" type="black" />
          </div>
        </form>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs">Not a member?</p>
          <Button label="Register account" type="white" />
        </div>
      </div>
    </>
  );
};
