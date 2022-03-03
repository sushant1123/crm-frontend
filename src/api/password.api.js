import axios from "../helpers/axios";

export const requestPasswordResetOtp = (email) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post("/user/reset-password", { email });
			// console.log(result.data);
			resolve(result.data);
		} catch (error) {
			reject({ status: "error", message: error.message });
		}
	});
};

export const updateUserPassword = (formData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.patch("/user/reset-password", formData);
			// console.log("updateUserPassword::password.api", result.data);
			resolve(result.data);
		} catch (error) {
			reject({ status: "error", message: error.message });
		}
	});
};
