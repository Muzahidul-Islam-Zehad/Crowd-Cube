import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddNewCampaign = () => {
    const { user } = useContext(authContext);

    const handleAddNewCampaign = (e) => {
        e.preventDefault();

        const form = e.target;
        const thumbnail = form.thumbnailUrl.value;
        const campaignTitle = form.campaignTitle.value;
        const campaignType = form.campaignType.value;
        const description = form.description.value;
        const minimumDonationAmount = form.minimumDonationAmount.value;
        const deadline = form.deadline.value;
        const email = form.email.value;
        const name = form.name.value;

        const newCampaign = { thumbnail, campaignTitle, campaignType, description, minimumDonationAmount, deadline, email, name };



        fetch('https://assignment10-server-rosy-eight.vercel.app/campaigns', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCampaign)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire("New Campaign Added");
                    form.reset();
                }
            })
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
                    Add New Campaign
                </h2>
                <form onSubmit={handleAddNewCampaign} className="space-y-6">
                    {/* Thumbnail URL */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2" htmlFor="imageUrl">
                            Thumbnail URL
                        </label>
                        <input
                            required
                            name="thumbnailUrl"
                            type="url"
                            id="imageUrl"
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>

                    {/* Campaign Title */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2" htmlFor="title">
                            Campaign Title
                        </label>
                        <input
                            required
                            name="campaignTitle"
                            type="text"
                            id="title"
                            placeholder="Enter campaign title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>

                    {/* Campaign Type */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2" htmlFor="type">
                            Campaign Type
                        </label>
                        <select
                            required
                            name="campaignType"
                            id="type"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        >
                            <option value="">Select Campaign Type</option>
                            <option value="personal">Personal Issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative">Creative Ideas</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            required
                            name="description"
                            id="description"
                            placeholder="Enter campaign description"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        ></textarea>
                    </div>

                    {/* Minimum Donation Amount */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2" htmlFor="minAmount">
                            Minimum Donation Amount
                        </label>
                        <input
                            required
                            name="minimumDonationAmount"
                            type="number"
                            id="minAmount"
                            placeholder="Enter minimum donation amount"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>

                    {/* Deadline */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2" htmlFor="deadline">
                            Deadline
                        </label>
                        <input
                            required
                            name="deadline"
                            type="date"
                            id="deadline"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2" htmlFor="userEmail">
                            User Email (Read Only)
                        </label>
                        <input
                            required
                            name="email"
                            type="email"
                            id="userEmail"
                            value={user.email}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg shadow-sm focus:outline-none"
                        />
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-2" htmlFor="userName">
                            User Name (Read Only)
                        </label>
                        <input
                            required
                            name="name"
                            type="text"
                            id="userName"
                            value={user.displayName}
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg shadow-sm focus:outline-none"
                        />
                    </div>

                    {/* Add Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
                        >
                            Add Campaign
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewCampaign;
