import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, logoutuser } = useContext(authContext);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allCampaign'}>All Campaign</NavLink></li>
        <li><NavLink to={'/addNewCampaign'}>Add New Campaign</NavLink></li>
        <li><NavLink to={`/myCampaign/${user.email}`}>My Campaign</NavLink></li>
        <li><NavLink to={`/myDonation/${user.email}`}>My Donations</NavLink></li>
    </>

    const handleLogOut = () => {
        logoutuser()
            .then()
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="navbar bg-[#f9fafb] shadow-md">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden hover:bg-[#e5e7eb] focus:ring focus:ring-[#2563eb]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-[#111827]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#ffffff] text-[#111827] rounded-box z-[100] mt-3 w-52 p-2 shadow-lg">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-[#2563eb] font-bold hover:bg-[#e5e7eb]">
                        CrowdCube
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-[#111827] font-medium">
                        {links}
                    </ul>
                </div>

                {/* User Dropdown or Auth Buttons */}
                <div className="navbar-end">
                    <div className="join">
                        {user?.email ? (
                            <div className="dropdown dropdown-hover dropdown-left">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 transition-transform duration-300 hover:scale-105">
                                    <img
                                        className="w-12 h-12 rounded-full border-2 border-[#2563eb] shadow-md"
                                        src={user.photoURL}
                                        alt="User"
                                    />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-[#ffffff] text-[#111827] rounded-box z-[1] w-52 p-3 shadow-lg">
                                    <li>
                                        <h1 className="text-center font-semibold">{user.displayName}</h1>
                                    </li>
                                    <li>
                                        <div>
                                            <button
                                                onClick={handleLogOut}
                                                className="btn btn-sm w-full mt-2 bg-[#2563eb] text-white hover:bg-[#1d4ed8]">
                                                Log Out
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <Link to={'/login'}>
                                    <button className="btn join-item bg-[#2563eb] text-white hover:bg-[#1d4ed8]">
                                        Login
                                    </button>
                                </Link>
                                <Link to={'/register'}>
                                    <button className="btn join-item bg-[#2563eb] text-white hover:bg-[#1d4ed8]">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;