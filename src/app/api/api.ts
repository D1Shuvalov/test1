import axios from 'axios';
import {API_URL, SITES_ENDPOINT, TESTS_ENDPOINT} from "./apiPaths/apiPaths";

export const getTests = async () => {
  const response = await axios.get(`${API_URL}${TESTS_ENDPOINT}`);
  return response.data;
};

export const getSites = async () => {
  const response = await axios.get(`${API_URL}${SITES_ENDPOINT}`);
  return response.data;
};

export const getTestById = async (id:string) => {
  const response = await axios.get(`${API_URL}${TESTS_ENDPOINT}/${id}`);
  return response.data;
};
