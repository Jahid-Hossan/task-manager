import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Nav = () => {

    const { user, logOut } = useAuth();

    console.log(user)

    // const menus = <>
    //     <li>
    //         <NavLink>
    //             Home
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink >
    //             Add Task
    //         </NavLink>
    //     </li>
    // </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Home</li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-red-500">Taskey</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'dashboard'}>Tasks</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full bg-white">
                                <img alt={user?.name} src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <p className="pl-3 font-semibold">{user?.displayName}</p>
                            <li className="hover:bg-slate-300 rounded" ><Link to={'/dashboard'}>Dashboard</Link></li>
                            <li className="hover:bg-slate-300 rounded" ><button onClick={logOut} >Logout</button></li>
                        </ul>
                    </div>
                        :
                        <Link to={'/login'}> <button className="btn border-none btn-md bg-red-500 text-white delay-150 ">Join Us</button> </Link>
                }
            </div>
        </div>
    );
};

export default Nav;