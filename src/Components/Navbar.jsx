import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, logoutuser } = useContext(authContext);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allCampaign'}>All Campaign</NavLink></li>
        <li><NavLink to={'/addNewCampaign'}>Add New Campaign</NavLink></li>
        <li><NavLink to={'/myCampaign'}>My Campaign</NavLink></li>
        <li><NavLink to={'/myDonation'}>My Donations</NavLink></li>
    </>

    const handleLogOut = () =>{
        logoutuser()
        .then()
        .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Crowdcube</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="join">
                        {
                            user?.email ?
                                <div>
                                    <button onClick={handleLogOut} className="btn join-item">Log Out</button>
                                </div>

                                :
                                <div>
                                    <Link to={'/login'}>
                                        <button className="btn join-item">Login</button>
                                    </Link>
                                    <Link to={'/register'}>
                                        <button className="btn join-item">Register</button>
                                    </Link>
                                </div>
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;