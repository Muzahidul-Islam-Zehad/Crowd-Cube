import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
    const loadedData = useLoaderData();
    const { myCamp, setMyCamp } = useContext(authContext);

    React.useEffect(() => {
        setMyCamp(loadedData);
    }, [loadedData, setMyCamp]);

    const handleDeleteCampaign = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                  
                fetch(`https://assignment10-server-rosy-eight.vercel.app/campaigns/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {

                            const updatedCampaigns = myCamp.filter((campaign) => campaign._id !== id);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                            setMyCamp(updatedCampaigns);
                        }
                    })
                    .catch((error) => console.error("Error deleting campaign:", error));
            }
        });
    };

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
                        My Campaigns
                    </h1>
                    <div className="overflow-x-auto rounded-lg shadow-lg">
                        <table className="table-auto w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-blue-600 text-white text-lg">
                                    <th className="px-6 py-4 text-left">#</th>
                                    <th className="px-6 py-4 text-left">Thumbnail</th>
                                    <th className="px-6 py-4 text-left">Campaign Title</th>
                                    <th className="px-6 py-4 text-left">Type</th>
                                    <th className="px-6 py-4 text-left">Minimum Donation</th>
                                    <th className="px-6 py-4 text-left">Deadline</th>
                                    <th className="px-6 py-4 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {myCamp?.map((row, idx) => (
                                    <tr key={row._id} className="hover:bg-gray-100">
                                        <td className="px-6 py-4 text-gray-800 text-sm">{idx + 1}</td>
                                        <td className="px-6 py-4">
                                            <img
                                                src={row.thumbnail}
                                                alt="Campaign Thumbnail"
                                                className="w-16 h-16 object-cover rounded-md shadow-sm"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-gray-800 text-sm">{row.campaignTitle}</td>
                                        <td className="px-6 py-4 text-gray-800 text-sm">{row.campaignType}</td>
                                        <td className="px-6 py-4 text-gray-800 text-sm">
                                            ${row.minimumDonationAmount}
                                        </td>
                                        <td className="px-6 py-4 text-gray-800 text-sm">{row.deadline}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex gap-2 justify-center">
                                                <Link to={`/myCampaign/updateCampaign/${row._id}`}><button className="btn btn-sm btn-primary">Update</button></Link>

                                                <button
                                                    onClick={() => handleDeleteCampaign(row._id)}
                                                    className="btn btn-sm btn-error"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCampaign;
