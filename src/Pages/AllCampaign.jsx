import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProvider";

const AllCampaign = () => {
    const loadedData = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (loadedData) {
            setIsLoading(false);
        }
    }, [loadedData]);

    const { campaign, setCampaign } = useContext(authContext);
    useEffect(() => {
        if (loadedData) {
            setCampaign([...loadedData]);
        }
    }, [loadedData, setCampaign]);

    const handleSortButton = () => {
        const sortedCampaigns = [...campaign].sort((a, b) => b.minimumDonationAmount - a.minimumDonationAmount);
        setCampaign(sortedCampaigns);
    };
 
    
    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <span className="loading loading-infinity loading-lg"></span>
                </div>
            ) : (
                <div className="w-11/12 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <h1 className="text-4xl font-bold text-blue-700 my-6 text-center">All Campaigns</h1>
                        <button onClick={handleSortButton} className="btn">Sort by Amount</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="table-auto w-full bg-white rounded-lg shadow">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 text-left">#</th>
                                    <th className="px-4 py-2 text-left">Thumbnail</th>
                                    <th className="px-4 py-2 text-left">Title</th>
                                    <th className="px-4 py-2 text-left">Description</th>
                                    <th className="px-4 py-2 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaign.map((camp, idx) => (
                                    <tr key={camp._id} className="border-t">
                                        <td className="px-4 py-2">{idx + 1}</td>
                                        <td className="px-4 py-2">
                                            <img className="w-20 h-20 rounded-lg" src={camp.thumbnail} alt="camp" />
                                        </td>
                                        <td className="px-4 py-2">{camp.campaignTitle}</td>
                                        <td className="px-4 py-2 truncate">{camp.description}</td>
                                        <td className="px-4 py-2 text-center">
                                            <Link to={`/campaignDetails/${camp._id}`}>
                                                <button className="btn btn-primary text-sm">See More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {campaign.length === 0 && (
                        <p className="text-center text-gray-600 mt-6">No campaigns found.</p>
                    )}
                </div>
            )}
        </>
    );
};

export default AllCampaign;
