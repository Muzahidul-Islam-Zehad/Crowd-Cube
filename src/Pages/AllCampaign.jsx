import { useLoaderData } from "react-router-dom";
import CampaignCard from "../Components/CampaignCard";
import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";

const AllCampaign = () => {
    const loadedData = useLoaderData();
    const {campaign, setCampaign} = useContext(authContext);
    setCampaign(loadedData);
    // console.log(loadedData);
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                campaign.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard> )
            }
        </div>
    );
};

export default AllCampaign;