import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const Navbar = () => {
    const { user, logoutuser, darkMode } = useContext(authContext);
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    const handleLogOut = async () => {
        try {
            await logoutuser();
        } catch (error) {
            console.error("Logout Error: ", error);
        }
    };

    const links = (
        <>
            <li>
                <Link
                    to={'/'}
                    className={`${
                        location.pathname === '/'
                            ? 'bg-[#4A5568] text-white'
                            : 'bg-transparent text-gray-400 hover:bg-[#555555]'
                    } px-3 py-2 rounded-lg transition duration-300`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to={'/allCampaign'}
                    className={`${
                        location.pathname === '/allCampaign'
                            ? 'bg-[#4A5568] text-white'
                            : 'bg-transparent text-gray-400 hover:bg-[#555555]'
                    } px-3 py-2 rounded-lg transition duration-300`}
                >
                    All Campaign
                </Link>
            </li>
            {user?.email && (
                <>
                    <li>
                        <Link
                            to={'/addNewCampaign'}
                            className={`${
                                location.pathname === '/addNewCampaign'
                                    ? 'bg-[#4A5568] text-white'
                                    : 'bg-transparent text-gray-400 hover:bg-[#555555]'
                            } px-3 py-2 rounded-lg transition duration-300`}
                        >
                            Add New Campaign
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/myCampaign/${user.email}`}
                            className={`${
                                location.pathname === `/myCampaign/${user.email}`
                                    ? 'bg-[#4A5568] text-white'
                                    : 'bg-transparent text-gray-400 hover:bg-[#555555]'
                            } px-3 py-2 rounded-lg transition duration-300`}
                        >
                            My Campaign
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/myDonation/${user.email}`}
                            className={`${
                                location.pathname === `/myDonation/${user.email}`
                                    ? 'bg-[#4A5568] text-white'
                                    : 'bg-transparent text-gray-400 hover:bg-[#555555]'
                            } px-3 py-2 rounded-lg transition duration-300`}
                        >
                            My Donations
                        </Link>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div>
            {/* Navbar container */}
            <div className={`navbar ${darkMode ? "bg-[#1a202c]" : "bg-[#f9fafb]"} shadow-md`}>
                {/* Left Section: Dropdown Menu & Website Name */}
                <div className="navbar-start">
                    {/* Dropdown for Mobile */}
                    <button
                        className="btn btn-ghost lg:hidden"
                        onClick={toggleDropdown}
                    >
                        {/* Hamburger Icon */}
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className={`lg:hidden bg-[#1a202c] text-white absolute top-14 left-0 w-full shadow-md z-50`}>
                            <ul className="menu p-4 menu-compact">{links}</ul>
                        </div>
                    )}
                    {/* Website Name */}
                    <Link
                        to="/"
                        className={`btn btn-ghost text-xl font-bold ${
                            darkMode ? "text-white" : "text-[#2563eb]"
                        }`}
                    >
                        CrowdCube
                    </Link>
                </div>

                {/* Center Section: Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 gap-6 text-lg font-medium">
                        {links}
                    </ul>
                </div>

                {/* Right Section: Login/Logout or User Menu */}
                <div className="navbar-end">
                    {user?.email ? (
                        <div className="dropdown dropdown-hover dropdown-left">
                            <div
                                tabIndex={0}
                                role="button"
                                className="m-1 transition-transform duration-300 hover:scale-105"
                            >
                                <img
                                    className="w-12 h-12 rounded-full border-2 border-[#2563eb] shadow-md"
                                    src={user.photoURL}
                                    alt={user.displayName}
                                />
                            </div>
                            <ul
                                tabIndex={0}
                                className={`dropdown-content menu ${
                                    darkMode ? "bg-[#2d3748] text-white" : "bg-white text-black"
                                } rounded-box z-[1] w-52 p-3 shadow-lg`}
                            >
                                <li>
                                    <h1 className="text-center font-semibold">{user.displayName}</h1>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogOut}
                                        className="btn btn-sm w-full mt-2 bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link to="/login">
                                <button className="btn join-item bg-[#2563eb] text-white hover:bg-[#1d4ed8]">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="btn join-item bg-[#2563eb] text-white hover:bg-[#1d4ed8]">
                                    Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
