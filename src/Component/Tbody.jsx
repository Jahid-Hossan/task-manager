import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useTodo from "../hooks/useTodo";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useState } from "react";


const Tbody = ({ todo, idx }) => {
    // console.log(Object.keys(todo).join())
    const axiosPublic = useAxiosPublic()
    const [, refetch] = useTodo()
    const { _id, title, description, priority, deadline, status } = todo
    const date = todo.deadline.split('T')[0]
    console.log(date)

    const { register, reset } = useForm();
    const { user, logOut } = useAuth();
    const [id, setId] = useState();


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


    const handleUpdate = async (data) => {
        data.preventDefault()
        console.log(data.taget)
        const bodyData =
        {
            title: data.target.title.value,
            description: data.target.description.value,
            priority: data.target.priority.value,
            deadline: data.target.deadline.value,
            status: data.target.status.value,
        }
        console.log(bodyData)

        console.log(id)

        const res = await axiosPublic.patch(`/todo/${_id}`, bodyData)
        const dataa = res.data;
        console.log(dataa)
        if (res.data.modifiedCount > 0) {
            refetch()
            document.getElementById('my_modal_3').close()
            toast.success('Todo Update successfully')
        }
    }



    return (
        <>
            <div className=" rounded-lg p-5 bg-green-400  shadow-xl">
                <div className="text-left space-y-2">
                    <h2 className="card-title">{title}</h2>
                    <p className="pb-2">{description}</p>
                    <p className="text-white bg-blue-950 rounded-lg px-3 inline py-1.5 ">{status}</p>

                    <div className="card-actions justify-between mt-2">
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-sm bg-red-500 text-white border-none outline-none">Update</button>
                        <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box  text-left">
                                <div>
                                    <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                    <form onSubmit={handleUpdate}>
                                        <div className="mb-4">
                                            <label className="block text-gray-600 text-sm font-semibold mb-2">Title</label>
                                            <input
                                                type="text"
                                                defaultValue={title}
                                                name="title"
                                                className="w-full p-2 border rounded-md"
                                                {...register('title', { required: true })}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-gray-600 text-sm font-semibold mb-2">Description</label>
                                            <textarea
                                                name="description"
                                                defaultValue={description}
                                                className="w-full p-2 border rounded-md"
                                                {...register('description', { required: true })}
                                            />
                                        </div>

                                        <div className='flex gap-5'>

                                            <div className="mb-4 flex-1">
                                                <label className="block text-gray-600 text-sm font-semibold mb-2">Priority</label>
                                                <select
                                                    name="priority"
                                                    defaultValue={priority}
                                                    className="w-full p-2 border rounded-md"
                                                    {...register('priority', { required: true })}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Low">Low</option>
                                                    <option value="Moderate">Moderate</option>
                                                    <option value="High">High</option>
                                                </select>
                                            </div>
                                            <div className="mb-4 flex-1">
                                                <label className="block text-gray-600 text-sm font-semibold mb-2">Time/Date</label>
                                                <input
                                                    type="datetime-local"
                                                    defaultValue={deadline}
                                                    name="deadline"
                                                    className="w-full p-2 border rounded-md"
                                                    {...register('deadline', { required: true })}
                                                />
                                            </div>
                                            <div className="mb-4 flex-1">
                                                <label className="block text-gray-600 text-sm font-semibold mb-2">Status</label>
                                                <select
                                                    name="status"
                                                    defaultValue={status}
                                                    className="w-full p-2 border rounded-md"
                                                    {...register('status', { required: true })}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="On going">On going</option>
                                                    <option value="Completed">Completed</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex justify-between">
                                            <button
                                                type="submit"

                                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </dialog>


                        <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-500 text-white border-none outline-none">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tbody;