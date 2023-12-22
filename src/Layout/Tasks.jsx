import { useForm } from "react-hook-form";
import Tbody from "../Component/Tbody";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useTodo from "../hooks/useTodo";

const Tasks = () => {

    const [data] = useTodo()

    const onGoing = data.filter(a => a.status === 'On going')
    const completed = data.filter(a => a.status === 'Completed')
    console.log(onGoing)

    console.log(data)

    return (
        <div>

            <div className=" grid  grid-cols-1 lg:grid-cols-3">
                <div>

                    <div className=" ">
                        <h2 className="bg-red-500 text-white ">Todo List</h2>
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>

                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900 ">Title</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Date</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Status</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {
                                    data.map((todo, idx) => <Tbody key={todo._id} todo={todo} idx={idx} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>

                    <div className="  min-h-screen border-x-2">
                        <h2 className="bg-red-500 text-white ">On Going</h2>
                        <table className="min-w-full divide-y-2  divide-gray-200  text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>

                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Title</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Date</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Status</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {
                                    onGoing.map((todo, idx) => <Tbody key={todo._id} todo={todo} idx={idx} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>

                    <div className="">
                        <h2 className="bg-red-500 text-white ">Completed</h2>
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="ltr:text-left rtl:text-right">
                                <tr>

                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Title</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Date</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Status</th>
                                    <th className="whitespace-nowrap  py-2 font-medium text-gray-900">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {
                                    completed?.map((todo, idx) => <Tbody key={todo._id} todo={todo} idx={idx} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;