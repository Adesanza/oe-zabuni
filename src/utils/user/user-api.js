import axios from 'axios';

// let loginRoute = "http://localhost:5000/user/login";
let loginRoute = 'https://oe-zabuni-api.herokuapp.com/user/login';
let registerRoute = 'http://localhost:5000/user/register';

// if(process.env.NODE_ENV === "production"){
//     loginRoute = "https://oe-zabuni-api.herokuapp.com/user/login"
//     registerRoute = "https://oe-zabuni-api.herokuapp.com/user/login"
// }

const databaseRoute = {
  login: loginRoute,
  register: registerRoute,
};

const userApi = {
  logUserIn: async (loginDetails) => {
    const response = await axios.post(databaseRoute.login, {
      ...loginDetails,
    });
    console.log('login', response.data);
    if (response.data.message) {
      throw new Error('Wrong email or password');
    }
    return response.data;
  },
  registerUser: async (registerDetails) => {
    const response = await axios.post(databaseRoute.register, {
      ...registerDetails,
    });
    console.log('register', response.data);
    if (response.data.message) {
      throw new Error('Email is already taken');
    }
    return response.data;
  },
};

export default userApi;
