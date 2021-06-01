import axios from 'axios';

export const billboardRoute = {
  url: 'http://localhost:5000/publisher/',
};

const billboardDataApi = {
  get: async (url) => {
    const response = await axios.get(url);
    if (response.data.message) {
      throw new Error('Failed to fetch all billboards');
    }
    return response.data;
  },
  create: async (user_id, billboardData) => {
    // console.log('fff', billboardData);
    const response = await axios.post(
      `${billboardRoute.url}${user_id}/billboard/create`,
      billboardData
    );
    if (response.data.message) {
      throw new Error('Failed to create billboard');
    }
    return response.data;
  },
  edit: async (billboardData) => {
    // console.log('edit', billboardData);
    const response = await axios.patch(
      `${billboardRoute.edit}${billboardData._id}`,
      billboardData
    );
    if (response.data.message) {
      throw new Error('Failed to update billboard');
    }
    return response.data;
  },
  delete: async (billboardId) => {
    const response = await axios.delete(
      `${billboardRoute.delete}${billboardId}`
    );
    if (response.data.message) {
      throw new Error('Failed to delete billboard');
    }
    return response.data;
  },
  billboard_general_get: async (url) => {
    const response = await axios.get(url);
    if (response.data.message) {
      throw new Error('Failed to fetch billboard general info');
    }
    return response.data;
  },
};

export default billboardDataApi;
