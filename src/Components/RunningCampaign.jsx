import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";

const RunningCampaign = () => {
    const loadedData = useLoaderData();

    const runningCampaign = loadedData.filter(c => {
        const today = new Date();
        const deadline = new Date(c.deadline);

        return deadline > today;
    });

    console.log(runningCampaign);

    return (
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
    );
};

export default RunningCampaign;
