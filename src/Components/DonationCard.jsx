import PropTypes from "prop-types";

const DonationCard = ({ donate }) => {
    return (
        <div className="flex bg-white border-2 border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out my-6">
            {/* Left Side: Image */}
            <div className="flex-shrink-0">
                <img
                    src={donate.thumbnail}
                    alt="Campaign Thumbnail"
                    className="w-52 h-52 object-cover rounded-lg shadow-sm"
                />
            </div>

            {/* Right Side: Details */}
            <div className="flex-grow p-4 flex flex-col justify-between">
                <div>
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors duration-200 ease-in-out">
                        {donate.campaignTitle}
                    </h2>

                    {/* Campaign Info */}
                    <p className="text-sm text-gray-600 mb-1 font-medium">
                        <strong>Type:</strong> {donate.campaignType}
                    </p>
                    <p className="text-sm text-gray-600 mb-1 font-medium">
                        <strong>Description:</strong> {donate.description}
                    </p>
                    <p className="text-sm text-gray-600 mb-1 font-medium">
                        <strong>Min. Donation:</strong> ${donate.minimumDonationAmount}
                    </p>
                    <p className="text-sm text-gray-600 mb-1 font-medium">
                        <strong>Deadline:</strong> {donate.deadline}
                    </p>
                </div>
            </div>
        </div>


    );
};

DonationCard.propTypes = {
    donate: PropTypes.object,
}

export default DonationCard;
