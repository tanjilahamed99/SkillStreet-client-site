import axios from "axios";

const instance = axios.create({
    baseURL: 'https://server-site-ochre.vercel.app'
})

const useAxios = () => {
    return instance
};

export default useAxios;