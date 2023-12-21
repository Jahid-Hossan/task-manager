import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Register = () => {

    const { emailSignUp, handleUpdateUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // const imageFile = { image: data.image[0] }
        // console.log(data.image)

        // const image_hosting_key = import.meta.env.VITE_image_hosting_api_key;
        // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        // console.log(res.data.data.display_url)
        // const img = res.data.data.display_url;

        // if (res.data.success) {
        emailSignUp(data.email, data.password)
            .then(res => {
                const name = data.name;
                const image = data.image;
                handleUpdateUser(name, image)
                    .then(res => {
                        console.log(res)
                        navigate('/');
                    })
            })
            .catch((err) => {
                console.log(err)
            });
        // }
    }



    return (
        <div>
            <section className="py-10 bg-gray-50 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Create free account</h2>
                        <div className="text-center mt-5">
                            <p className="text-base text-gray-600">Already have an account? <Link to={'/login'} className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Login here</Link></p>
                        </div>

                    </div>

                    <div className="relative max-w-md mx-auto mt-5 md:mt-10">
                        <div className="overflow-hidden bg-white rounded-md shadow-md">
                            <div className="px-4 py-6 sm:px-8 sm:py-7">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="space-y-5 text-left">
                                        <div>
                                            <label className="text-base font-medium text-gray-900"> First & Last name </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>

                                                <input
                                                    {...register("name", { required: true })}
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                                {errors.name && <span className="text-red-600">Name is required</span>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Email address </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="email"
                                                    {...register("email", { required: true })}
                                                    placeholder="Enter email to get started"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                                {errors.email && <span className="text-red-600">Email is required</span>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Password </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path

                                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                        />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="password"
                                                    {...register("password", {
                                                        required: true,
                                                        minLength: 6,
                                                        maxLength: 20,
                                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                    })}
                                                    placeholder="Enter your password"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                            </div>

                                        </div>



                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Your image </label>
                                            <input
                                                {...register('image', { required: true })}
                                                type="text"
                                                placeholder="Enter your image url"
                                                className="block mt-2.5 w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            <br />

                                            {errors.image && <span className="text-red-600">Image is required</span>}
                                        </div>


                                        <div>
                                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold bg-red-500 text-white transition-all duration-200 bg-btn-clr border border-transparent rounded-md focus:outline-none hover:bg-navy focus:bg-blue-700">
                                                {"Create account"}
                                            </button>
                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Register;