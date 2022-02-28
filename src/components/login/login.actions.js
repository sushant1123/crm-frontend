import { userLoginFailure, userLoginRequest, userLoginSuccess } from "./loginSlice";
import axios from "../../helpers/axios";
// import axios from "axios";

import { getUserProfile } from "../../containers/dashboard/user.actions";

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
			dispatch(getUserProfile());
		}
	} catch (error) {
		console.log(error.response.data.message);
		dispatch(userLoginFailure(error.response.data.message));
	}
};
