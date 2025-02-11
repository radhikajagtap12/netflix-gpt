import React, { useState, useRef } from "react";
import { checkValidateData } from "../Utils/validate";

const LoginForm = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const handleButtonClick = () => {
		const message = checkValidateData(
			email.current.value,
			password.current.value,
			!isSignIn ? name.current.value : null
		);
		if (message) {
			setErrorMessage(message);
			return;
		}
	};
	const handleClick = () => {
		setIsSignIn(!isSignIn);
	};
	return (
		<div className="flex justify-items-center">
			<div className="m-auto w-full max-w-md p-8 bg-black bg-opacity-75 rounded-lg shadow-lg">
				<div>
					<h2 className="text-3xl text-white font-bold mt-4">
						{isSignIn ? "Sign In" : "Sign Up"}
					</h2>
				</div>

				<form className="mt-6" onSubmit={(e) => e.preventDefault()}>
					{!isSignIn && (
						<div className="mb-4">
							<input
								ref={name}
								type="text"
								id="name"
								name="name"
								placeholder="Enter Full Name"
								className="w-full p-3 mt-1 bg-black border border-gray-600 rounded-md 
                                text-white focus:outline-none focus:ring-2 
                                focus:ring-red-600 focus:border-transparent"
							/>
						</div>
					)}

					<div className="mb-4">
						<input
							ref={email}
							type="email"
							id="email"
							name="email"
							placeholder="Email or Mobile number"
							className="w-full p-3 mt-1 bg-black border border-gray-600 rounded-md
                            text-white focus:outline-none focus:ring-2
                            focus:ring-red-600 focus:border-transparent"
						/>
					</div>

					<div className="mb-6">
						<input
							ref={password}
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
							className="w-full p-3 mt-1 bg-black border
                            border-gray-600 rounded-md text-white focus:outline-none focus:ring-2
                            focus:ring-red-600 focus:border-transparent"
						/>
					</div>
					<p className="text-red-500 mb-4">{errorMessage}</p>

					<button
						type="submit"
						className="w-full py-3 bg-red-600 text-white font-semibold rounded-md
                        hover:bg-red-700 transition duration-200"
						onClick={handleButtonClick}>
						{isSignIn ? "Sign In" : "Sign Up"}
					</button>

					<div className="mt-4 text-center text-white text-sm">
						{isSignIn && "Forgot your password?"}
					</div>
				</form>

				<div className="mt-6 text-center text-sm text-white">
					<p className="cursor-pointer" onClick={handleClick}>
						{isSignIn
							? "New to Netflix? Sign up now"
							: "Already a member? Sign in now"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
