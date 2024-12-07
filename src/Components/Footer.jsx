
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800">
            <div className="container mx-auto px-6 py-10">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between gap-8">
                    {/* Logo & Description */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4 text-primary">CrowdFundPro</h2>
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
                                <a
                                    href="/about"
                                    className="hover:text-accent transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/projects"
                                    className="hover:text-accent transition-colors"
                                >
                                    Explore Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-accent transition-colors"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <i className="fab fa-facebook-f text-2xl"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                className="text-gray-600 hover:text-blue-400 transition-colors"
                            >
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                className="text-gray-600 hover:text-pink-500 transition-colors"
                            >
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-300"></div>

                {/* Bottom Section */}
                <div className="flex flex-wrap justify-between items-center">
                    <p className="text-gray-600">
                        &copy; {new Date().getFullYear()} CrowdFundPro. All Rights Reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="/terms"
                            className="hover:text-accent transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="/privacy"
                            className="hover:text-accent transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
