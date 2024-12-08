import { useLoaderData } from "react-router-dom";
import CampaignCard from "../Components/CampaignCard";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProvider";

const AllCampaign = () => {
    const loadedData = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (loadedData) {
            setIsLoading(false);
        }
    }, [loadedData])

    const { campaign, setCampaign } = useContext(authContext);
    setCampaign(loadedData);


    return (
        <>
            {
                isLoading
                    ?
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <span className="loading loading-infinity loading-lg"></span>
                    </div>
                    :
                    <div>
                        <div>
                            <h1 className="text-4xl font-bold text-blue-700 my-6 text-center">All Campaigns</h1 >
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                            {
                                campaign.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default AllCampaign;