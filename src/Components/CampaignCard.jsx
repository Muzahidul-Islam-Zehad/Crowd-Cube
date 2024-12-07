import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CampaignCard = ({ campaign }) => {

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {/* Each card container with flex-grow */}
            <div className="flex-grow max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
                {/* Thumbnail Section */}
                <img
                    src={campaign.thumbnail} // Replace with dynamic image URL
                    alt="Campaign Thumbnail"
                    className="w-full h-48 object-cover"
                />

                {/* Content Section - Flex Grow to take remaining space */}
                <div className="flex-1 p-4 space-y-3 flex flex-col justify-between">
                    {/* Campaign Title */}
                    <h2 className="text-2xl font-bold text-blue-600 truncate">{campaign.campaignTitle}</h2>

                    {/* Campaign Type */}
                    <p className="text-sm font-medium text-gray-600 bg-blue-50 inline-block px-3 py-1 rounded-full">
                        {campaign.campaignType}
                    </p>

                    {/* Description */}
                    <p className="text-gray-700 line-clamp-3 leading-snug">
                        {campaign.description}
                    </p>
                </div>

                {/* Action Button - Always at the bottom */}
                <div className="p-4">
                    <Link to={`/campaignDetails/${campaign._id}`}>
                        <button className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            See More
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.object
}

export default CampaignCard;