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
            <h1 className="text-4xl font-bold text-blue-700 my-6 text-center">My Donation</h1 >
           {
                myDonation?.map(donate => <DonationCard key={donate._id} donate={donate}></DonationCard>)
           }
        </div>
    );
};

export default MyDonation;