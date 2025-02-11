export const checkValidateData = (email, password, name = null) => {
	// Only validate name if it's provided (i.e., during Sign Up)
	if (name !== null && name !== undefined && name.length === 0) {
		return "Name is required";
	}

	const emailValidation =
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

	if (!emailValidation) {
		return "Email Id is not valid.";
	}

	// Improved password regex
	const passwordValidation =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!]).{6,}$/.test(password);

	if (!passwordValidation) {
		return "Password must valid";
	}

	return null;
};
