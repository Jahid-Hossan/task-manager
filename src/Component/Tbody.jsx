import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useTodo from "../hooks/useTodo";
import toast from "react-hot-toast";


const Tbody = ({ todo, idx }) => {
    // console.log(Object.keys(todo).join())
    const axiosPublic = useAxiosPublic()
    const [, refetch] = useTodo()
    const { _id, title, description, priority, deadline, status } = todo
    const date = todo.deadline.split('T')[0]
    console.log(date)

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            axiosPublic.delete(`/todo/${id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.deletedCount) {
                        refetch()
                        toast.success('Todo Deleted Successful')
                    }
                })
                .catch(err => {
                    console.log(err)
                })

        });
    }

    return (
        <>
            <tr className="odd:bg-gray-50">

                <td className="whitespace-nowrap px-2 py-2 text-gray-700">{title}</td>
                <td className="whitespace-nowrap px-2 py-2 text-gray-700">{date}</td>
                <td className="whitespace-nowrap px-2 py-2 text-gray-700">{status}</td>
                <td><button onClick={() => handleDelete(_id)} className="btn"><RiDeleteBin6Line /></button></td>
            </tr>
        </>
    );
};

export default Tbody;