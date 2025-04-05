import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://communion-hub-server-theta.vercel.app",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
