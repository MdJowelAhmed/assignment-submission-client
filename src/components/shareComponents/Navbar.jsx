
// import { useContext, useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import { CgProfile } from "react-icons/cg";
// import Aos from 'aos'
// import 'aos/dist/aos.css'

import { NavLink } from "react-router-dom"

const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext)
    // useEffect(() => {
    //     Aos.init()
    // }, [])
    // const [theme, setTheme] = useState('light')

    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localTheme = localStorage.getItem('theme')
    //     document.querySelector('html').setAttribute('data-theme', localTheme)
    // }, [theme])
    // const handleTheme = e => {
    //     if (e.target.checked) {
    //         setTheme("dark")
    //     } else {
    //         setTheme("light")
    //     }
    // }

    // const navLink = <>
    //     <NavLink to='/' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
    //         <button > Home Page</button>
    //     </NavLink>
    //     <NavLink to='/allTourists' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
    //         <button > All Tourists Spot</button>
    //     </NavLink>
    //     <NavLink to='/addTourists' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
    //         <button > Add Tourists Spot</button>
    //     </NavLink>
    //     <NavLink to='/myList' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
    //         <button > My List</button>
    //     </NavLink>
    // </>
    return (
        <div>
            <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
                <div className='flex-1'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src='' alt='' />
                        <span className='font-bold'>SoloSphere</span>
                    </div>
                </div>
                <div className='flex-none'>
                    <ul className=' flex justify-center px-1'>
                        <NavLink to='/' className={({ isActive }) => isActive ? "btn bg-orange-400 text-white mx-3 font-semibold text-xl" : "btn btn-secondary mx-3"}>
                            <button > Home Page</button>
                        </NavLink>

                        <NavLink to='/assignments' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-sm md:text-xl" : "btn btn-secondary mx-3"}>
                            <button >Create Assignments</button>
                        </NavLink>
                        <NavLink to='/create' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-sm md:text-xl" : "btn btn-secondary mx-3"}>
                            <button > Assignments</button>
                        </NavLink>
                        <NavLink to='/pending' className={({ isActive }) => isActive ? "btn btn-primary mx-3 font-semibold text-sm md:text-xl" : "btn btn-secondary mx-3"}>
                            <button >Pending Assignments</button>
                        </NavLink>
                    </ul>

                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full' title=''>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src=''
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <div className='justify-between'>Add Job</div>
                            </li>
                            <li>
                                <div>My Posted Jobs</div>
                            </li>
                            <li>
                                <div>My Bids</div>
                            </li>
                            <li>
                                <div>Bid Requests</div>
                            </li>
                            <li className='mt-2'>
                                <button className='bg-gray-200 block text-center'>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className=" my-6 pb-10" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    navLink
                                }

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold text-blue-700">Dream <span className="text-[#bb1e10]">Tourists</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLink
                            }
                        </ul>
                    </div>
                    <div className="navbar-end flex">

                        <div className="flex items-center gap-2">

                            <div>
                                {
                                    user ? <div className="dropdown dropdown-hover">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL || <CgProfile />} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu  dropdown-content  shadow bg-base-100 rounded-box w-40 ">
                                            <li>
                                                <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>

                                            </li>
                                            <li>
                                                <button onClick={logOut} className="btn">LogOut</button>
                                            </li>
                                        </ul>

                                    </div> : <div>
                                        <Link to='/login'><button className="btn">Login</button></Link>
                                        <Link to='/register'><button className="btn ml-3">Register</button></Link>
                                    </div>
                                }
                            </div>
                            <div>
                                <label className="cursor-pointer grid place-items-center">
                                    <input onChange={handleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                </label>
                            </div>

                        </div>

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar