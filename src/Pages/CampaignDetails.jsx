import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
    const loadedData = useLoaderData();

    const { user } = useContext(authContext);

    const handleDonateButton = () => {

        const today = new Date();
        const deadline = new Date(loadedData.deadline);

        if (today > deadline) {
            Swal.fire({
                title: "OPPS!!",
                text: "Deadline is over!!",
                icon: "warning"
            });

            return;
        }


        const donatedUser = {
            id: loadedData._id,
            campaignTitle: loadedData.campaignTitle,
            campaignType: loadedData.campaignType,
            thumbnail: loadedData.thumbnail,
            description: loadedData.description,
            minimumDonationAmount: loadedData.minimumDonationAmount,
            deadline: loadedData.deadline,
            name: user.displayName,
            email: user.email
        }
        fetch('https://assignment10-server-rosy-eight.vercel.app/donatedUsers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donatedUser)

        })
            .then(res => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire("Donation successfull");
                }
            })
    }
    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-10 px-4">
                {/* Container */}
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Image Section */}
                    <img
                        src={loadedData?.thumbnail}
                        alt="Campaign Thumbnail"
                        className="w-full h-64 object-cover"
                    />

                    {/* Content Section */}
                    <div className="p-6 space-y-6">
                        {/* Campaign Title */}
                        <h1 className="text-3xl font-bold text-blue-600">{loadedData?.campaignTitle}</h1>

                        {/* Campaign Type */}
                        <p className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                            {loadedData?.campaignType}
                        </p>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed">
                            {loadedData?.description}
                        </p>

                        {/* Minimum Donation */}
                        <div className="flex justify-between items-center text-gray-600">
                            <span className="text-sm font-medium">Minimum Donation:</span>
                            <span className="text-lg font-semibold">${loadedData?.minimumDonationAmount}</span>
                        </div>

                        {/* Deadline */}
                        <div className="flex justify-between items-center text-gray-600">
                            <span className="text-sm font-medium">Deadline:</span>
                            <span className="text-lg font-semibold">{loadedData?.deadline ? loadedData.deadline : "YYYY-MM-DD"}</span>
                        </div>

                        {/* Action Button */}
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