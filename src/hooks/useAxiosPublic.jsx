import axios from "axios";

const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://task-manager-server-coral-xi.vercel.app',
    });

    return instance;
};



export default useAxiosPublic;