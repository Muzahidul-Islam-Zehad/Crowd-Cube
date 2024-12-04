import { useLoaderData } from "react-router-dom";

const UpdateCampaign = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);

    const handleUpdateCampaign = (e) =>{
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.photo.value;
        const campaignTitle = form.title.value;
        const campaignType = form.type.value;
        const description = form.description.value;
        const minimumDonationAmount = form.amount.value;
        const deadline = form.deadline.value;

        const updateCampaign = { thumbnail, campaignTitle, campaignType, description, minimumDonationAmount, deadline };

        fetch(`http://localhost:5000/campaigns/${loadedData._id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(updateCampaign)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-10 px-6 flex justify-center items-center">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Update Campaign</h2>
                <form onSubmit={handleUpdateCampaign} className="space-y-6">
                    {/* Thumbnail */}
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

                    {/* Campaign Title */}
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

                    {/* Campaign Type */}
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

                    {/* Description */}
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

                    {/* Minimum Donation Amount */}
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

                    {/* Deadline */}
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

                    {/* Update Button */}
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
