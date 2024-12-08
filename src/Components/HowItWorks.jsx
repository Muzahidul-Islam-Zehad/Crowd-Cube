import { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { authContext } from "../Providers/AuthProvider";

const HowItWorks = () => {
    const { darkMode } = useContext(authContext);

    return (
        <div>
            <section
                className={`py-16 ${darkMode ? "bg-gradient-to-b from-gray-800 to-black" : "bg-gradient-to-b from-white to-gray-100"} transition-colors duration-300`}
            >
                <div className="container mx-auto px-6 text-center">
                    <Slide direction="left" duration={1000} triggerOnce>
                        <div className="content">
                            <h2
                                className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-800"} mb-6`}
                            >
                                How It Works
                            </h2>
                        </div>
                    </Slide>

                    <p
                        className={`text-gray-600 ${darkMode ? "text-gray-300" : "text-gray-600"} mb-12`}
                    >
                        Start your crowdfunding journey in just three simple steps.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Card 1 */}
                        <div
                            className={`w-full md:w-1/3 p-6 shadow-xl rounded-lg transform transition hover:-translate-y-2 hover:shadow-2xl ${
                                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                            }`}
                        >
                            <div className="mb-4 text-blue-500">
                                <i className="fas fa-lightbulb text-5xl"></i>
                            </div>
                            <h3
                                className={`text-2xl font-semibold mb-2 ${
                                    darkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                Create a Campaign
                            </h3>
                            <p
                                className={`text-gray-600 ${
                                    darkMode ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                Share your idea, set a goal, and inspire others to support your vision.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div
                            className={`w-full md:w-1/3 p-6 shadow-xl rounded-lg transform transition hover:-translate-y-2 hover:shadow-2xl ${
                                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                            }`}
                        >
                            <div className="mb-4 text-pink-500">
                                <i className="fas fa-users text-5xl"></i>
                            </div>
                            <h3
                                className={`text-2xl font-semibold mb-2 ${
                                    darkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                Share with the World
                            </h3>
                            <p
                                className={`text-gray-600 ${
                                    darkMode ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                Use social media and our tools to reach a global audience.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div
                            className={`w-full md:w-1/3 p-6 shadow-xl rounded-lg transform transition hover:-translate-y-2 hover:shadow-2xl ${
                                darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                            }`}
                        >
                            <div className="mb-4 text-yellow-500">
                                <i className="fas fa-heart text-5xl"></i>
                            </div>
                            <h3
                                className={`text-2xl font-semibold mb-2 ${
                                    darkMode ? "text-white" : "text-gray-800"
                                }`}
                            >
                                Receive Support
                            </h3>
                            <p
                                className={`text-gray-600 ${
                                    darkMode ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                Watch contributions pour in and turn your idea into reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
