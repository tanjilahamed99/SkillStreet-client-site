import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllNote = () => {
    const axiosPublic = useAxios()
    const { data, refetch } = useQuery({
        queryKey: ['note'],
        queryFn: async () => {
            const res = await axiosPublic.get('/note')
            return res.data
        }
    })
    const note = data?.filter(i => i.trash === false)
    const trash = data?.filter(i => i.trash === true)
    return [note, refetch, trash]
};

export default useAllNote;