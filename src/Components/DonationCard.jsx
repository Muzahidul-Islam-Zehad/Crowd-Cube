import PropTypes from "prop-types";

const DonationCard = ({ donate }) => {
    return (
        <div className="flex bg-white border-2 border-gray-300 p-4 rounded-lg overflow-hidden my-6">
            {/* Left Side: Image */}
            <div className="flex-shrink-0">
                <img
                    src={donate.thumbnail}
                    alt="Campaign Thumbnail"
                    className="w-52 h-52 object-cover"
                />
            </div>

            {/* Right Side: Details */}
            <div className="flex-grow p-4">
                <h2 className="text-xl font-bold text-green-700">
                    {donate.campaignTitle}
                </h2>
                <p className="text-gray-600 mt-2">
                    <strong>Type:</strong> {donate.campaignType}
                </p>
                <p className="text-gray-600 mt-1">
                    <strong>Description:</strong> {donate.description}
                </p>
                <p className="text-gray-600 mt-1">
                    <strong>Min. Donation:</strong> ${donate.minimumDonationAmount}
                </p>
                <p className="text-gray-600 mt-1">
                    <strong>Deadline:</strong> {donate.deadline}
                </p>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donate: PropTypes.object,
}

export default DonationCard;
