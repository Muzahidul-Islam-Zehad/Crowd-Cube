
const SuccessStories = () => {
    return (
        <div>
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-6">Success Stories</h2>
                    <p className="text-center text-gray-200 mb-12">
                        See how others turned their dreams into reality with CrowdFundPro.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Story 1 */}
                        <div className="w-full md:w-1/3 p-4 bg-white text-gray-800 rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Success Story 1"
                                className="w-full rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    A Revolutionary Tech Gadget
                                </h3>
                                <p>
                                    Raised $200,000 to develop a groundbreaking wearable device.
                                </p>
                            </div>
                        </div>

                        {/* Story 2 */}
                        <div className="w-full md:w-1/3 p-4 bg-white text-gray-800 rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Success Story 2"
                                className="w-full rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    Community Education Program
                                </h3>
                                <p>
                                    Helped a small town build a library with $50,000 in donations.
                                </p>
                            </div>
                        </div>

                        {/* Story 3 */}
                        <div className="w-full md:w-1/3 p-4 bg-white text-gray-800 rounded-lg shadow-lg">
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Success Story 3"
                                className="w-full rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Medical Fundraiser</h3>
                                <p>
                                    Supported a family with $100,000 for life-saving treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;