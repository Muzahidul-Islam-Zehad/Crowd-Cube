
const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container mx-auto px-6 py-10">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between">
                    {/* Logo & Description */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">CrowdFundPro</h2>
                        <p>
                            Your platform to bring innovative ideas, creative projects, and
                            meaningful causes to life through the power of collective support.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/3 mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-secondary transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className="hover:text-secondary transition-colors"
                                >
                                    Explore Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-secondary transition-colors"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="w-full md:w-1/3 mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                className="btn btn-circle btn-secondary hover:bg-accent"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                className="btn btn-circle btn-secondary hover:bg-accent"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                className="btn btn-circle btn-secondary hover:bg-accent"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-white opacity-50"></div>

                {/* Bottom Section */}
                <div className="flex flex-wrap justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} CrowdFundPro. All Rights Reserved.</p>
                    <div className="flex space-x-4">
                        <a
                            href="/terms"
                            className="hover:text-secondary transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="/privacy"
                            className="hover:text-secondary transition-colors"
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
