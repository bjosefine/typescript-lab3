import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/Context";
import { Button } from "../../components/Button";

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useUserContext();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      console.log("Logged in:", data);
      console.log({ user });
    } else {
      console.log("Login failed:", data);
    }
  };

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <>
      <p>login page</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-2 gap-2 items-center">
          <input
            type="text"
            placeholder="email"
            className="border border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            className="border border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button label="Log in" type="black" />
      </form>
      <p>Not a member?</p>
      <Button label="Register account" type="white" />
    </>
  );
};
