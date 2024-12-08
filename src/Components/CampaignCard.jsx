import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const CampaignCard = ({ campaign }) => {
    const { darkMode } = useContext(authContext); // Access darkMode from context

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {/* Dynamic background based on darkMode */}
            <div
                className={`flex-grow max-w-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
                    }`}
            >
                {/* Campaign Thumbnail */}
                <img
                    src={campaign.thumbnail}
                    alt="Campaign Thumbnail"
                    className="w-full h-48 object-cover"
                />

                {/* Content Section */}
                <div className="flex-1 p-4 space-y-3 flex flex-col justify-between">
                    {/* Campaign Title */}
                    <h2
                        className={`text-2xl font-bold truncate ${darkMode ? "text-blue-400" : "text-blue-600"
                            } transition-colors duration-300`}
                    >
                        {campaign.campaignTitle}
                    </h2>

                    {/* Campaign Type */}
                    <p
                        className={`text-sm font-medium inline-block px-3 py-1 rounded-full ${darkMode ? "bg-gray-600 text-gray-200" : "bg-blue-50 text-blue-600"
                            } transition-colors duration-300`}
                    >
                        {campaign.campaignType}
                    </p>

                    {/* Campaign Description */}
                    <p
                        className={`text-gray-700 line-clamp-3 leading-snug ${darkMode ? "text-gray-200" : "text-gray-700"
                            } transition-colors duration-300`}
                    >
                        {campaign.description}
                    </p>
                </div>

                {/* Action Section */}
                <div className="p-4">
                    <Link to={`/campaignDetails/${campaign._id}`}>
                        <button
                            className={`w-full py-2 text-white font-medium rounded-lg flex items-center justify-center transition-colors duration-300 ${darkMode
                                    ? "bg-blue-700 hover:bg-blue-800"
                                    : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            See More
                            <div className="ml-2 flex items-center justify-center w-6 h-6"></div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

CampaignCard.propTypes = {
    campaign: PropTypes.object,
};

export default CampaignCard;
