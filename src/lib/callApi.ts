import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import AuthenticationException from "@/models/exceptions/AuthenticationException";
import ValidationException from "@/models/exceptions/ValidationException";

interface ApiErrorResponse {
	errors?: Record<string, string[]>;
	message?: string;
}

export const callApi = (): AxiosInstance => {
	const axiosInstance = axios.create({
		baseURL:
			process.env.API_CALL_URL ||
			"http://localhost:5000/api2/GetAppForCrm/0.1/",
		headers: {
			"Content-Type": "application/json",
		},
		withCredentials: true,
	});

	axiosInstance.interceptors.request.use(
		(config) => {
			return config;
		},
		(error: AxiosError) => {
			return Promise.reject(error);
		}
	);

	axiosInstance.interceptors.response.use(
		(res: AxiosResponse) => {
			return res;
		},
		(error: AxiosError<ApiErrorResponse>) => {
			if (!error.response) {
				return Promise.reject(new Error("Network error occurred"));
			}

			const { status, data } = error.response;

			if (status === 422) {
				throw new ValidationException(data.errors || {});
			} else if (status === 403) {
				throw new AuthenticationException(data.message || "Unauthorized");
			}

			return Promise.reject(error);
		}
	);

	return axiosInstance;
};
