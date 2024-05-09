import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
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
    )
}

export default Navbar