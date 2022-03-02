import axios from "../helpers/axios";

export const userRegistration = (payload) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post("/user/create", payload);

			resolve(result.data);
			if (result.data.status === "success") {
				resolve(result.data);
			}
		} catch (error) {
			console.log(error.response.data);
			reject(error.response.data);
		}
	});
};

export const userRegistrationVerification = (payload) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post("/user/verify", payload);

			resolve(result.data);
			if (result.data.status === "success") {
				resolve(result.data);
			}
		} catch (error) {
			console.log(error.response.data);
			reject(error.response.data);
		}
	});
};

export const userLogin = (payload) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { email, password } = payload;

			let result = await axios.post("/user/login", { email, password });

			if (result.data.status === "success") {
				sessionStorage.setItem("accessToken", result.data.accessToken);
				localStorage.setItem("crmSite", JSON.stringify({ refreshToken: result.data.refreshToken }));
			}
			resolve(result);
		} catch (error) {
			// console.log(error.response.data.message);
			reject(error.response.data);
		}
	});
};

export const fetchUser = async (user) => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessToken = sessionStorage.getItem("accessToken");
			if (!accessToken) {
				reject("Token not found!");
			}

			const result = await axios.get("/user", {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			resolve(result.data);
		} catch (error) {
			// console.log(error);
			reject(error.response.data.message);
		}
	});
};

export const fetchNewAccessToken = async (user) => {
	return new Promise(async (resolve, reject) => {
		try {
			//get the refresh token stored in the localstorage
			const { refreshToken } = JSON.parse(localStorage.getItem("crmSite"));
			if (!refreshToken) {
				reject("Token not found!");
			}

			const result = await axios.get("/tokens", {
				headers: { Authorization: `Bearer ${refreshToken}` },
			});
			// console.log("from fetchNewAccessToken api", result);

			if (result.data.status === "success") {
				sessionStorage.setItem("accessToken", result.data.accessToken);
			}

			resolve(true);
		} catch (error) {
			if (error.message === "Request failed with status code 403") {
				localStorage.removeItem("crmSite");
			}
			reject(false);
		}
	});
};

export const userLogout = async () => {
	try {
		await axios.delete("/user/logout", {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
