
const HowItWorks = () => {
    return (
        <div>
            <section className="py-16 bg-gradient-to-b from-white to-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h2>
                    <p className="text-gray-600 mb-12">
                        Start your crowdfunding journey in just three simple steps.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Step 1 */}
                        <div className="w-full md:w-1/3 p-6 bg-white shadow-xl rounded-lg transform transition hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-primary">
                                <i className="fas fa-lightbulb text-5xl text-blue-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Create a Campaign</h3>
                            <p className="text-gray-600">
                                Share your idea, set a goal, and inspire others to support your vision.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="w-full md:w-1/3 p-6 bg-white shadow-xl rounded-lg transform transition hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-secondary">
                                <i className="fas fa-users text-5xl text-pink-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Share with the World</h3>
                            <p className="text-gray-600">
                                Use social media and our tools to reach a global audience.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="w-full md:w-1/3 p-6 bg-white shadow-xl rounded-lg transform transition hover:-translate-y-2 hover:shadow-2xl">
                            <div className="mb-4 text-accent">
                                <i className="fas fa-heart text-5xl text-yellow-500"></i>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Receive Support</h3>
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