import { useLoaderData } from "react-router-dom";
import CampaignCard from "../Components/CampaignCard";

const AllCampaign = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData);
    return (
        <div>
            {
                loadedData.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard> )
            }
        </div>
    );
};

export default AllCampaign;