import apiClient from "./APIClient";

export const getAllTrainings = async () => {
    try {
        const response = await apiClient.get('trainings/all');
        return response.data
    } catch(error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};