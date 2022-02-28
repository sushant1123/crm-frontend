import axios from "../helpers/axios";

export const getAllTickets = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessToken = sessionStorage.getItem("accessToken");
			const result = await axios.get("/ticket", {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			resolve(result.data);
		} catch (error) {
			reject(error);
		}
	});
};
