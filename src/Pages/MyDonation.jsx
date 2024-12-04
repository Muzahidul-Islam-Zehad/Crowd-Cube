import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import DonationCard from "../Components/DonationCard";

const MyDonation = () => {
    const loadedData = useLoaderData();
    const {myDonation, setMyDonation} = useContext(authContext);
    setMyDonation(loadedData);
    return (
        <div>
           {
                myDonation?.map(donate => <DonationCard key={donate._id} donate={donate}></DonationCard>)
           }
        </div>
    );
};

export default MyDonation;