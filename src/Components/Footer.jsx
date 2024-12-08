import { useContext } from "react";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const Footer = () => {
    const { darkMode } = useContext(authContext); // Access darkMode from context

    return (
        <footer className={`${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"} transition-colors duration-300`}>
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-wrap justify-between gap-8">
                    {/* About Section */}
                    <div className="w-full md:w-1/3">
                        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                            CrowdCube
                        </h2>
                        <p className={`text-gray-600 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                            Your platform to bring innovative ideas, creative projects, and meaningful
                            causes to life through the power of collective support.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full md:w-1/3">
                        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                            Quick Links
                        </h3>
                        <ul>
                            <li className="mb-2">
                                <Link
                                    to="#"
                                    className={`hover:${darkMode ? "text-blue-300" : "text-blue-600"} transition-colors`}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="#"
                                    className={`hover:${darkMode ? "text-blue-300" : "text-blue-600"} transition-colors`}
                                >
                                    Explore Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className={`hover:${darkMode ? "text-blue-300" : "text-blue-600"} transition-colors`}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="w-full md:w-1/3">
                        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <Link
                                to="https://facebook.com"
                                className={`text-2xl hover:${darkMode ? "text-blue-400" : "text-blue-600"} transition-colors`}
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                to="https://twitter.com"
                                className={`text-2xl hover:${darkMode ? "text-blue-400" : "text-blue-600"} transition-colors`}
                            >
                                <FaTwitterSquare />
                            </Link>
                            <Link
                                to="https://instagram.com"
                                className={`text-2xl hover:${darkMode ? "text-pink-400" : "text-pink-500"} transition-colors`}
                            >
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t transition-colors duration-300" style={{ borderColor: darkMode ? "#555" : "#ddd" }}></div>

                {/* Footer Bottom Section */}
                <div className="flex flex-wrap justify-between items-center">
                    <p className={`text-gray-600 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        &copy; {new Date().getFullYear()} CrowdCube. All Rights Reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            to="#"
                            className={`hover:${darkMode ? "text-blue-300" : "text-blue-600"} transition-colors`}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            to="#"
                            className={`hover:${darkMode ? "text-blue-300" : "text-blue-600"} transition-colors`}
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
