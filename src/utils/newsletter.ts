import axios from "axios";

export const subscribeToNewsletter = async (email: string): Promise<string> => {
    try {
        const response = await axios.post<{ message: string }>(
            "/api/subscribe",
            { email }
        );
        return response.data.message;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || error.message);
    }
};
