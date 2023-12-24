import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useTodo from "../hooks/useTodo";

const Dashboard = () => {
    const { register, reset } = useForm();
    const { user, logOut } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [, refetch] = useTodo();
    // console.log(user)

    const handleLogOut = () => {
        logOut();
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
            status: 'On going'
        }
        console.log(bodyData)

        const res = await axiosPublic.post('/todo', bodyData)
        const dataa = res.data;
        console.log(dataa)
        if (dataa.insertedId) {
            refetch()
            document.getElementById('my_modal_5').close()
            toast.success('Todo Added successfully')
        }
    }


    return (
        <div className=" lg:flex">
            <div className="h-full p-3 space-y-2 lg:w-60 bg-slate-100 dark:bg-gray-900 min-h-screen dark:text-gray-100">
                <div className="flex items-center p-2 space-x-4">
                    <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                    </div>
                </div>
                <div className="divide-y dark:divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li>
                            <Link to='dashboard' className="flex items-center p-2 space-x-3 rounded-md">
                                <FaTasks className="w-5 h-5" />

                                <span>Tasks</span>
                            </Link>
                        </li>

                        <div>
                            <div className="flex justify-center ">
                                <div>
                                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-red-500 text-white btn-sm">Add Todo</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box  text-left">
                                            <div>
                                                <button onClick={() => document.getElementById('my_modal_5').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                                <form onSubmit={handleUpdate}>
                                                    <div className="mb-4">
                                                        <label className="block text-gray-600 text-sm font-semibold mb-2">Title</label>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            className="w-full p-2 border rounded-md"
                                                            {...register('title', { required: true })}
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label className="block text-gray-600 text-sm font-semibold mb-2">Description</label>
                                                        <textarea
                                                            name="description"
                                                            className="w-full p-2 border rounded-md"
                                                            {...register('description', { required: true })}
                                                        />
                                                    </div>

                                                    <div className='flex gap-5'>

                                                        <div className="mb-4 flex-1">
                                                            <label className="block text-gray-600 text-sm font-semibold mb-2">Priority</label>
                                                            <select
                                                                name="priority"
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
                                                                name="deadline"
                                                                className="w-full p-2 border rounded-md"
                                                                {...register('deadline', { required: true })}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between">
                                                        <button
                                                            type="submit"
                                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <Link to={'/'} className="flex items-center p-2 space-x-3 rounded-md">
                                <FaHome className="w-5 h-5" />

                                <span>Home</span>
                            </Link>
                        </li>
                        {/* sdkla */}
                        <li>
                            <a rel="noopener noreferrer" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                    <rect width="32" height="64" x="256" y="232"></rect>
                                </svg>
                                <button onClick={handleLogOut} >Logout</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                style={{
                    minHeight: 'calc(100vw - 240px)',
                }} className=" w-full " >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;