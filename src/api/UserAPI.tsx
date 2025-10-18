import apiClient from './APIClient';

export const sendRegistrationDataToBackend = async (userData: object) => {
  try {
    const response = await apiClient.post("users/", userData);
    return response.data; // backend can return success/failure message
  } catch (error) {
    console.error("Error sending registration data:", error);
    throw error;
  }
};

export const findUser = async(id: string) => {
  try{
    const response = await apiClient.get(`users/find?id=${id}`)
    return response.data;
  } catch (error){
    console.error("Error Finding user", error);
    throw error;
  }
}