import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800">
            <div className="container mx-auto px-6 py-10">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between gap-8">
                    {/* Logo & Description */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4 text-primary">CrowdCube</h2>
                        <p className="text-gray-600">
                            Your platform to bring innovative ideas, creative projects, and meaningful
                            causes to life through the power of collective support.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <Link
                                    className="hover:text-accent transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    className="hover:text-accent transition-colors"
                                >
                                    Explore Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-accent transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link
                                to="https://facebook.com"
                                className="text-2xl text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                to="https://twitter.com"
                                className="text-2xl text-gray-600 hover:text-blue-400 transition-colors"
                            >
                                <FaTwitterSquare />
                            </Link>
                            <Link
                                to="https://instagram.com"
                                className="text-2xl text-gray-600 hover:text-pink-500 transition-colors"
                            >
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-300"></div>

                {/* Bottom Section */}
                <div className="flex flex-wrap justify-between items-center">
                    <p className="text-gray-600">
                        &copy; {new Date().getFullYear()} CrowdCube. All Rights Reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            className="hover:text-accent transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            className="hover:text-accent transition-colors"
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
