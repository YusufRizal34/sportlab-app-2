import axios from "axios";

const signUp = async (user) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/register`,
    user
  );
  return data;
};

const signIn = async (user) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/login`,
    user
  );
  return data;
};
const signOut = async () => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/logout`
  );
  return data;
};

const authService = {
  signUp,
  signIn,
  signOut,
};

export default authService;
