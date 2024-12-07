import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CampaignCard = ({ campaign }) => {

    return (
        <div>
            <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* Thumbnail */}
                <img
                    src={campaign.thumbnail} // Replace with dynamic image URL
                    alt="Campaign Thumbnail"
                    className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-5 space-y-4">
                    {/* Campaign Title */}
                    <h2 className="text-2xl font-bold text-blue-600">{campaign.campaignTitle}</h2>

                    {/* Campaign Type */}
                    <p className="text-sm font-medium text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-full">
                        {campaign.campaignType}
                    </p>

                    {/* Description */}
                    <p className="text-gray-700 line-clamp-3">
                        {campaign.description}
                    </p>

                    {/* Action Button */}
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