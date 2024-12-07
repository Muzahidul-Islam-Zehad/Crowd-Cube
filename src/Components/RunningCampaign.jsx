import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";
import { useEffect, useState } from "react";

const RunningCampaign = () => {
    const loadedData = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (loadedData) {
            setIsLoading(false);
        }
    }, [loadedData])

    const runningCampaign = loadedData.filter(c => {
        const today = new Date();
        const deadline = new Date(c.deadline);

        return deadline > today;
    });


    return (

        <>
            {
                isLoading
                    ?
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <span className="loading loading-infinity loading-lg"></span>
                    </div>
                    :
                    <div className="bg-gray-50 min-h-screen py-10">
                        <div className="container mx-auto px-4">
                            <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">
                                Running Campaigns
                            </h1>
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {runningCampaign.map((campaign, idx) => {
                                    if (idx < 6) {
                                        return (
                                            <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>
                                        );
                                    }
                                    return null; // Return null to explicitly handle else condition
                                })}
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default RunningCampaign;
