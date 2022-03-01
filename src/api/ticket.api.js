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
			// console.log(error.response);
			reject(error.response.data);
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
			// console.log(error.response);
			reject(error.response.data);
		}
	});
};

export const updateReplyTicket = (ticketId, messageObj) => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessToken = sessionStorage.getItem("accessToken");
			const result = await axios.put(`/ticket/${ticketId}`, messageObj, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			resolve(result.data);
		} catch (error) {
			// console.log(error.response);
			reject(error.response.data);
		}
	});
};

export const updateTicketStatusToClose = (ticketId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessToken = sessionStorage.getItem("accessToken");
			//patch requires body object even if it is empty
			const result = await axios.patch(
				`/ticket/close-ticket/${ticketId}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			resolve(result.data);
		} catch (error) {
			// console.log(error.response);
			reject(error.response.data);
		}
	});
};

export const createNewTicketAPI = (formData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessToken = sessionStorage.getItem("accessToken");

			const result = await axios.post(`/ticket`, formData, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			resolve(result.data);
		} catch (error) {
			// console.log(error.response);
			reject(error.response.data);
		}
	});
};
