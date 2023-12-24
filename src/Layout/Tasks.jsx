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
                        <div className="min-w-full p-4  divide-y-2 divide-gray-200 bg-white text-sm">

                            <div className="divide-y divide-gray-200 ">
                                {
                                    data.map((todo, idx) => <Tbody key={todo._id} todo={todo} idx={idx} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="  min-h-screen border-x-2">
                        <h2 className="bg-red-500 text-white ">On Going</h2>
                        <div className="min-w-full p-4 divide-y-2  divide-gray-200  text-sm">


                            <div className="divide-y divide-gray-200">
                                {
                                    onGoing.map((todo, idx) => <Tbody key={todo._id} todo={todo} idx={idx} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className="">
                        <h2 className="bg-red-500 text-white ">Completed</h2>
                        <div className="min-w-full divide-y-2 p-4 divide-gray-200 bg-white text-sm">


                            <div className="divide-y divide-gray-200">
                                {
                                    completed?.map((todo, idx) => <Tbody key={todo._id} todo={todo} idx={idx} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;