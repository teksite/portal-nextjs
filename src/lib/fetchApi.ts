import ValidationException from "@/models/exceptions/ValidationException";
import AuthenticationException from "@/models/exceptions/AuthenticationException";

interface ApiErrorResponse {
	errors?: Record<string, string[]>;
	message?: string;
}

interface FetchConfig extends RequestInit {
	next?: {
		revalidate?: number | false;
		tags?: string[];
	};
}

export const fetchApi = () => {
	const baseUrl =
		process.env.API_CALL_URL || "http://localhost:5000/api2/GetAppForCrm/0.1/";

	return async <T>(endpoint: string, config: FetchConfig = {}): Promise<T> => {
		const defaultConfig: FetchConfig = {
			headers: {
				"Content-Type": "application/json",
				...config.headers,
			},
			credentials: "include",
			cache: config.cache || "force-cache",
			next: config.next,
			...config,
		};

		try {
			const response = await fetch(`${baseUrl}${endpoint}`, defaultConfig);

			if (!response.ok) {
				const data: ApiErrorResponse = await response.json();

				if (response.status === 422) {
					throw new ValidationException(data.errors || {});
				} else if (response.status === 403) {
					throw new AuthenticationException(data.message || "Unauthorized");
				}

				throw new Error(`HTTP error! status: ${response.status}`);
			}

			return await response.json();
		} catch (error) {
			if (error instanceof TypeError && error.message.includes("network")) {
				throw new Error("Network error occurred");
			}
			throw error;
		}
	};
};
