import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";
import { useContext, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { authContext } from "../Providers/AuthProvider";

const RunningCampaign = () => {
    const { darkMode } = useContext(authContext); // Access the darkMode context
    const loadedData = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (loadedData) {
            setIsLoading(false);
        }
    }, [loadedData]);

    const runningCampaign = loadedData.filter(c => {
        const today = new Date();
        const deadline = new Date(c.deadline);

        return deadline > today;
    });

    return (
        <>
            {isLoading ? (
                // Loading state with theme adjustments
                <div
                    className={`flex items-center justify-center min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"
                        } transition-colors duration-300`}
                >
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            ) : (
                <div
                    className={`min-h-screen py-10 ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
                        } transition-colors duration-300`}
                >
                    <div className="container mx-auto px-4">
                        <h1
                            className={`text-4xl font-bold text-center mb-8 ${darkMode ? "text-teal-400" : "text-teal-600"
                                } transition-colors duration-300`}
                        >
                            <Typewriter
                                words={["Running Campaigns", "Donate Now"]}
                                loop={false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {runningCampaign.map((campaign, idx) => {
                                if (idx < 6) {
                                    return (
                                        <CampaignCard
                                            key={campaign._id}
                                            campaign={campaign}
                                            darkMode={darkMode} // Pass darkMode to CampaignCard
                                        />
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RunningCampaign;
