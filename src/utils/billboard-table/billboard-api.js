import axios from 'axios';

export const billboardRoute = {
  get: 'https://oe-zabuni-api.herokuapp.com/billboard/all',
  create: 'https://oe-zabuni-api.herokuapp.com/billboard/create',
  edit: 'https://oe-zabuni-api.herokuapp.com/billboard/',
  delete: 'https://oe-zabuni-api.herokuapp.com/billboard/',
  general_info: 'https://oe-zabuni-api.herokuapp.com/billboard-general/',
};

const billboardDataApi = {
  get: async (url) => {
    const response = await axios.get(url);
    if (response.data.message) {
      throw new Error('Failed to fetch all billboards');
    }
    return response.data;
  },
  create: async (billboardData) => {
    // console.log('fff', billboardData);
    const response = await axios.post(billboardRoute.create, billboardData);
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
