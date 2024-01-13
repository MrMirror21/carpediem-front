import { apiClient } from "@/api/ApiClient";

export const getPlaceData = async (option) => {
  try {
    const response = await apiClient.get(`/api/v1/user/my-event`, option);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
