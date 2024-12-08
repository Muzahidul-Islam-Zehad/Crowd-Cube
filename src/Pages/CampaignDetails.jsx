import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
    const loadedData = useLoaderData();

    const {user} = useContext(authContext);

const handleDonateButton = async () => {
    const donatedUser = {
        id: loadedData._id,
        campaignTitle: loadedData.campaignTitle,
        campaignType: loadedData.campaignType,
        thumbnail: loadedData.thumbnail,
        description: loadedData.description,
        minimumDonationAmount: loadedData.minimumDonationAmount,
        deadline: loadedData.deadline,
        name: user.displayName,
        email: user.email,
    };

    try {
        const res = await fetch(`https://assignment10-server-rosy-eight.vercel.app/donateUsers/${user.email}`);
        if (!res.ok) throw new Error("Failed to fetch donation data");
        const data = await res.json();

        const isAdded = data.some((p) => p.id === loadedData._id);
        if (isAdded) {
            Swal.fire({
                title: "Warning",
                text: "You have already donated in this campaign",
                icon: "warning"
              });
            return;
        }

        const postRes = await fetch("https://assignment10-server-rosy-eight.vercel.app/donatedUsers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donatedUser),
        });

        if (!postRes.ok) throw new Error("Failed to submit donation");
        const postData = await postRes.json();

        if (postData.acknowledged) {
            Swal.fire("Donation successful");
        }
    } catch (error) {
        console.error("Error during donation process:", error);
        Swal.fire("An error occurred while processing your donation. Please try again.");
    }
};

    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-10 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                  
                    <img
                        src={loadedData?.thumbnail} 
                        alt="Campaign Thumbnail"
                        className="w-full h-64 object-cover"
                    />

                  
                    <div className="p-6 space-y-6">
                       
                        <h1 className="text-3xl font-bold text-blue-600">{loadedData?.campaignTitle}</h1>

                        <p className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                            {loadedData?.campaignType}
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            {loadedData?.description}
                        </p>

                        <div className="flex justify-between items-center text-gray-600">
                            <span className="text-sm font-medium">Minimum Donation:</span>
                            <span className="text-lg font-semibold">${loadedData?.minimumDonationAmount}</span>
                        </div>

                        <div className="flex justify-between items-center text-gray-600">
                            <span className="text-sm font-medium">Deadline:</span>
                            <span className="text-lg font-semibold">{loadedData?.deadline ? loadedData.deadline : "YYYY-MM-DD" }</span>
                        </div>

                        <button onClick={handleDonateButton} className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CampaignDetails;