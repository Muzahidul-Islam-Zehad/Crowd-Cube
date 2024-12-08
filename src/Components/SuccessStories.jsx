import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";

const SuccessStories = () => {
    const { darkMode } = useContext(authContext);

    return (
        <div>
            <section
                className={`py-16 ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
                    } transition-colors duration-300`}
            >
                <div className="container mx-auto px-6">
                    <h2
                        className={`text-4xl font-bold text-center mb-6 ${darkMode ? "text-white" : "text-gray-800"
                            }`}
                    >
                        Success Stories
                    </h2>
                    <p
                        className={`text-center mb-12 ${darkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        See how others turned their dreams into reality with CrowdFundPro.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Story 1 */}
                        <div
                            className={`w-full md:w-1/3 p-4 rounded-lg shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl ${darkMode ? "bg-gray-700" : "bg-white"
                                }`}
                        >
                            <img
                                src={"https://i.ibb.co/KW4N1qP/card1.jpg"}
                                alt="Success Story 1"
                                className="w-full rounded-t-lg"
                            />
                            <div className="p-6">
                                <h3
                                    className={`text-2xl font-semibold mb-3 ${darkMode ? "text-gray-100" : "text-gray-800"
                                        }`}
                                >
                                    A Revolutionary Tech Gadget
                                </h3>
                                <p
                                    className={`text-gray-600 ${darkMode ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    Raised $200,000 to develop a groundbreaking wearable device.
                                </p>
                            </div>
                        </div>

                        {/* Story 2 */}
                        <div
                            className={`w-full md:w-1/3 p-4 rounded-lg shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl ${darkMode ? "bg-gray-700" : "bg-white"
                                }`}
                        >
                            <img
                                src={"https://i.ibb.co/F495Rx5/card2.jpg"}
                                alt="Success Story 2"
                                className="w-full rounded-t-lg"
                            />
                            <div className="p-6">
                                <h3
                                    className={`text-2xl font-semibold mb-3 ${darkMode ? "text-gray-100" : "text-gray-800"
                                        }`}
                                >
                                    Community Education Program
                                </h3>
                                <p
                                    className={`text-gray-600 ${darkMode ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    Helped a small town build a library with $50,000 in donations.
                                </p>
                            </div>
                        </div>

                        {/* Story 3 */}
                        <div
                            className={`w-full md:w-1/3 p-4 rounded-lg shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl ${darkMode ? "bg-gray-700" : "bg-white"
                                }`}
                        >
                            <img
                                src={"https://i.ibb.co/44wpL9q/card3.jpg"}
                                alt="Success Story 3"
                                className="w-full rounded-t-lg"
                            />
                            <div className="p-6">
                                <h3
                                    className={`text-2xl font-semibold mb-3 ${darkMode ? "text-gray-100" : "text-gray-800"
                                        }`}
                                >
                                    Medical Fundraiser
                                </h3>
                                <p
                                    className={`text-gray-600 ${darkMode ? "text-gray-300" : "text-gray-600"
                                        }`}
                                >
                                    Supported a family with $100,000 for life-saving treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
