import apiClient from './APIClient';

export const getAllComunity = async () => {
  try {
    const response = await apiClient.get('groups/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};