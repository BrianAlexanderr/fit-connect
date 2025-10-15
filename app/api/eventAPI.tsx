import apiClient from './APIClient';

export const getAllEvents = async () => {
  try {
    const response = await apiClient.get('events/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};
