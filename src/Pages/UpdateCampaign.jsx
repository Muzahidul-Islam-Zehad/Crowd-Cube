import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
    const loadedData = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateCampaign = (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.photo.value;
        const campaignTitle = form.title.value;
        const campaignType = form.type.value;
        const description = form.description.value;
        const minimumDonationAmount = form.amount.value;
        const deadline = form.deadline.value;

        const updateCampaign = { thumbnail, campaignTitle, campaignType, description, minimumDonationAmount, deadline };

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment10-server-rosy-eight.vercel.app/campaigns/${loadedData._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(updateCampaign)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your file has been updated.",
                                icon: "success"
                            });
                            navigate(`/myCampaign/${loadedData.email}`);
                        }
                    })
            }
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-10 px-6 flex justify-center items-center">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Update Campaign</h2>
                <form onSubmit={handleUpdateCampaign} className="space-y-6">
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thumbnail (Image URL)
                        </label>
                        <input
                            name="photo"
                            defaultValue={loadedData?.thumbnail}
                            type="text"
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                   
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Campaign Title
                        </label>
                        <input
                            name="title"
                            defaultValue={loadedData?.campaignTitle}
                            type="text"
                            placeholder="Enter campaign title"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                   
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Campaign Type
                        </label>
                        <select
                            name="type"
                            defaultValue={loadedData?.campaignType}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="personal issue">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative ideas">Creative Ideas</option>
                        </select>
                    </div>

                   
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            defaultValue={loadedData?.description}
                            rows="4"
                            placeholder="Write campaign description"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Minimum Donation Amount
                        </label>
                        <input
                            name="amount"
                            defaultValue={loadedData?.minimumDonationAmount}
                            type="number"
                            placeholder="Enter minimum donation amount"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Deadline
                        </label>
                        <input
                            name="deadline"
                            defaultValue={loadedData?.deadline}
                            type="date"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg font-medium shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            Update Campaign
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCampaign;
