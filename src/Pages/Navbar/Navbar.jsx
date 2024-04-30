import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './darkMode.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    const { LogOut, users } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allTouristsSpots'>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addTouristSpots'>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/myList'>My List</NavLink></li>
    </>
    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast('LogOut Successful')
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div className={`Navbar ${theme}`}>
            <div className="navbar bg-[#2F4F4F] max-w-6xl mx-auto fixed z-10 rounded-lg mb-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="badge badge-outline badge-primary p-5 text-2xl flex gap-x-0 font-bold
                    "><span className="text-purple-500">Word</span><span className=" gap-x-0 text-pink-300">Tour</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold gap-x-4 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {users ?
                        <>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <a
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={users?.displayName}
                                        data-tooltip-place="top"
                                    >
                                   <img alt="Tailwind CSS Navbar component" src={users.photoURL} />
                                    </a>
                                    
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
                <div>
                    <label onClickCapture={toggleTheme} className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;