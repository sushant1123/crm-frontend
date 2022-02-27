import { userLoginFailure, userLoginRequest, userLoginSuccess } from "./loginSlice";
import axios from "../../helpers/axios";

//is higher order fn. (fn inside another fn)
// is like writing fetchAllTickets =()=> {
//   return async (dispatch)=>{}
// }

export const userLogin = (payload) => async (dispatch) => {
	try {
		const { email, password } = payload;
		dispatch(userLoginRequest());
		let result = await axios.post("/user/login", { email, password });

		if (result.data.status === "success") {
			sessionStorage.setItem("accessToken", result.data.accessToken);
			localStorage.setItem("crmSite", JSON.stringify({ refreshToken: result.data.refreshToken }));
			dispatch(userLoginSuccess());
		}
	} catch (error) {
		console.log(error.response.data.message);
		dispatch(userLoginFailure(error.response.data.message));
	}
};
