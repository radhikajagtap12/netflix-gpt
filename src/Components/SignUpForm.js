import React, { useState, useRef } from "react";
import { checkValidateData } from "../Utils/validate";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "./InputBox";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name.current.value);
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    if (message) {
      setErrorMessage(message);
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated!");
            navigate("/");
          })
          .catch((error) => {
            console.log("Profile is not updated!");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
  };

  return (
    <div className="flex justify-items-center">
      <div className="m-auto w-full max-w-md p-8 bg-black bg-opacity-75 rounded-lg shadow-lg">
        <div>
          <h2 className="text-3xl text-white font-bold mt-4">Sign Up</h2>
        </div>

        <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
          <InputBox
            ref={name}
            type="text"
            id="name"
            name="name"
            placeholder="Enter Full Name"
          />
          <InputBox
            ref={email}
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email"
          />

          <InputBox
            ref={password}
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
          />

          <p className="text-red-500 mb-4">{errorMessage}</p>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-md
                        hover:bg-red-700 transition duration-200"
            onClick={handleButtonClick}
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white">
          <p className="cursor-pointer">
            <Link to="/">Already have an account? Sign in now.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
