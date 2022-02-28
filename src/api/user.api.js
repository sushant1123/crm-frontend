import axios from "../helpers/axios";

export const userLogin = (payload) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { email, password } = payload;

			let result = await axios.post("/user/login", { email, password });

			resolve(result);
			if (result.data.status === "success") {
				sessionStorage.setItem("accessToken", result.data.accessToken);
				localStorage.setItem("crmSite", JSON.stringify({ refreshToken: result.data.refreshToken }));
			}
		} catch (error) {
			console.log(error.response.data.message);
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
			console.log(error);
			reject(error.message);
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
