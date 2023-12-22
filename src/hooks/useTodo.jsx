import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useTodo = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();


    const { data = [], refetch } = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/todo?email=${user?.email}`)
            return res.data
        }
    })

    return [data, refetch]
};

export default useTodo;