import { useState } from "react";
import { UserInterface } from "../../interface/interface";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const CreateAccount = () => {
  const [userDetails, setUserDetails] = useState<UserInterface>({
    useremail: "",
    userpassword: "",
    userfirstname: "",
    userlastname: "",
    userphone: "",
    userbirthdate: "",
    userstreet: "",
    usercity: "",
    userstate: "",
    userzipcode: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (response.ok) {
      const userData = await response.json();
      console.log("yay user created", userData);
      window.location.replace("/login");
    } else {
      console.log("create user failed");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex items-center flex-col gap-4">
        <p className="font-secondary text-4xl tracking-tight text-center">
          Create Account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-2 gap-2 items-center">
            <input
              name="useremail"
              type="text"
              placeholder="email"
              className="border border-black w-52"
              value={userDetails.useremail}
              onChange={handleInputChange}
            />
            <input
              name="userpassword"
              type="password"
              placeholder="password"
              className="border border-black w-52"
              value={userDetails.userpassword}
              onChange={handleInputChange}
            />
            <input
              name="userfirstname"
              type="text"
              placeholder="firstname"
              className="border border-black w-52"
              value={userDetails.userfirstname}
              onChange={handleInputChange}
            />
            <input
              name="userlastname"
              type="text"
              placeholder="lastname"
              className="border border-black w-52"
              value={userDetails.userlastname}
              onChange={handleInputChange}
            />
            <input
              name="userphone"
              type="text"
              placeholder="phone"
              className="border border-black w-52"
              value={userDetails.userphone}
              onChange={handleInputChange}
            />
            <input
              name="userbirthdate"
              type="text"
              placeholder="birthdate"
              className="border border-black w-52"
              value={userDetails.userbirthdate}
              onChange={handleInputChange}
            />
            <input
              name="userstreet"
              type="text"
              placeholder="street"
              className="border border-black w-52"
              value={userDetails.userstreet}
              onChange={handleInputChange}
            />
            <input
              name="usercity"
              type="text"
              placeholder="city"
              className="border border-black w-52"
              value={userDetails.usercity}
              onChange={handleInputChange}
            />
            <input
              name="userstate"
              type="text"
              placeholder="state"
              className="border border-black w-52"
              value={userDetails.userstate}
              onChange={handleInputChange}
            />
            <input
              name="userzipcode"
              type="text"
              placeholder="zipcode"
              className="border border-black w-52"
              value={userDetails.userzipcode}
              onChange={handleInputChange}
            />
            <Button label="Create Account" type="black" />
          </div>
        </form>
        <div className="flex flex-col items-center gap-1">
          <p className="text-xs">Already got an account?</p>
          <Link to="/login">
            <Button label="Login" type="white" />
          </Link>
        </div>
      </div>
    </>
  );
};
