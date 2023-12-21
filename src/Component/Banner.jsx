import { Link } from 'react-router-dom';
import banner from '../assets/3573382.jpg'
import { FaArrowRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div>

            <div className='flex items-center '>
                <div className='my-6 space-y-7  w-1/2'>
                    <h1 className="font-Jost text-6xl my font-bold text-center ">Organize your work  and life, finally.</h1>
                    <p className="text-xl ">Become focused, organized, and calm with Todoist. The world’s most famous task manager and to-do list app.</p>
                    <Link to={'/login'} className="btn bg-red-500 text-white font-bold hover:text-black">Let’s Explore <FaArrowRight /></Link>
                </div>
                <div className='w-1/2 flex justify-center' >
                    <img src={banner} alt="" className='w-2/3' />
                </div>
            </div>
        </div>
    );
};

export default Banner;