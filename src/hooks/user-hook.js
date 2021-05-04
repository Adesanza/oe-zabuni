import { useDispatch } from 'react-redux';
import { logUserOut, setUserData } from '../redux/user/userReducer';

const useUserData = () => {
  const dispatch = useDispatch();
  return {
    getUser: () => {
      let userInfo =
        JSON.parse(window.sessionStorage.getItem('zabuni_user')) || null;
      dispatch(setUserData(userInfo));
      return userInfo;
    },
    setUser: (userData) => {
      window.sessionStorage.setItem('zabuni_user', JSON.stringify(userData));
      dispatch(setUserData(userData));
    },
    logUserOut: () => {
      window.sessionStorage.removeItem('zabuni_user');
      dispatch(logUserOut());
    },
  };
};

export { useUserData };
