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

export const getSingleTicket = (ticketId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessToken = sessionStorage.getItem("accessToken");
			const result = await axios.get(`/ticket/${ticketId}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			resolve(result);
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};
