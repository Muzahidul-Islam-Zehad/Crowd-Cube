
const HowItWorks = () => {
    return (
        <div>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
                    <p className="text-gray-600 mb-12">
                        Start your crowdfunding journey in just three simple steps.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Step 1 */}
                        <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
                            <div className="mb-4 text-primary">
                                <i className="fas fa-lightbulb text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Create a Campaign</h3>
                            <p className="text-gray-600">
                                Share your idea, set a goal, and inspire others to support your vision.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
                            <div className="mb-4 text-secondary">
                                <i className="fas fa-users text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Share with the World</h3>
                            <p className="text-gray-600">
                                Use social media and our tools to reach a global audience.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="w-full md:w-1/3 p-4 bg-white shadow-lg rounded-lg">
                            <div className="mb-4 text-accent">
                                <i className="fas fa-heart text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Receive Support</h3>
                            <p className="text-gray-600">
                                Watch contributions pour in and turn your idea into reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;