import axios from "axios";

export default function useLogin() {
  const login = async (email: string) => {
    return await axios
      .get(`${import.meta.env.VITE_API_URL}/authentification?email=${email}`)
      .then((res) => res.data);
  };
  const signup = async (email: string) => {
    return await axios
      .post(`${import.meta.env.VITE_API_URL}/authentification`, email)
      .then((res) => res.data);
  };

  return { login, signup };
}
