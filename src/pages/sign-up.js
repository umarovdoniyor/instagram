import { isValid } from "date-fns/esm";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExists } from "../services/firebase";

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid =
    emailAddress === "" ||
    password === "" ||
    username === "" ||
    fullName === "";

  const handleSignUp = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUsernameExists(username);

    // Will continue from here

    try {
    } catch (error) {}
  };

  useEffect(() => {
    document.title = "SignUp - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="SignUp page iphon photo"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>

          {error && <p className=" mb-4 text-xs text-red-primary ">{error}</p>}

          <form onSubmit={handleSignUp} method="POST">
            <input
              type="text"
              aria-label="Enter your email User Name"
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 "
              onChange={({ target }) => setUsername(target.value)}
              value={username}
              name="username"
            />
            <input
              type="text"
              aria-label="Enter your email Full Name"
              placeholder="Full Name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 "
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
              name="fullName"
            />
            <input
              type="text"
              aria-label="Enter your email address"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 "
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
              name="emailAddress"
            />
            <input
              type="password"
              aria-label="Enter your password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 "
              onChange={({ target }) => setPassword(target.value)}
              value={password}
              name="password"
            />
            <button
              type="submit"
              disabled={isValid}
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-grap-primary rounded">
          <p className="text-small">
            Already have an account?
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
