import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<div
			className="h-screen bg-cover bg-center relative w-full"
			style={{
				backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg")`,
			}}>
			<div className="absolute inset-0 bg-black bg-opacity-50">
				<Header />
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
