import axios from "axios";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE4ZDZhZTM0MDhmODIwMGMzMmUzMDAiLCJlbWFpbCI6InN1c2hhbnRiYWhpcmF0MDAyQGdtYWlsLmNvbSIsImlhdCI6MTY0NTk2OTQwNywiZXhwIjoxNjQ1OTcwMzA3fQ.0cbg2NjEo7sT9hN38Mp80LvpooHV9x-DVUYlspOamNo";

const axiosInstance = axios.create({
	baseURL: "http://localhost:3001/api/v1",
	headers: {
		Authorization: `Bearer ${token}`,
	},
});
export default axiosInstance;
