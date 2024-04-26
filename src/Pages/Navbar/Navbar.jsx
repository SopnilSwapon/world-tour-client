import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { LogOut, users } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allSpots'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addTouristSpots'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/myList'>My List</NavLink></li>
    </>
    const handleLogOut = () => {
        LogOut()
        .then(()=> {
            toast('LogOut Successful')
        })
        .catch(error => {
            console.error(error.message)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Word Tour</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold gap-x-4 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    { users? 
                        <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={
                               `
                                ${users?.displayName}
                                ${users?.photoURL}
                               `
                                } alt="Tailwind CSS Navbar component" src={users.photoURL} />
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white"><NavLink to='/login'>LogOut</NavLink></button>

                    </>
                    :
                    <>
                        <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white"><NavLink to='/register'>Register</NavLink></button>
                        <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white"><NavLink to='/login'>Login</NavLink></button>
                    </>
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;