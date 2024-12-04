
const Banner = () => {
    return (
        <div>
            <section className="relative">
                <div className="carousel w-full">
                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <div
                            className="h-[500px] w-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://via.placeholder.com/1920x800')" }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="container mx-auto px-6 py-20 relative z-10 text-center text-white">
                                <h2 className="text-4xl font-bold mb-4">Turn Ideas Into Reality</h2>
                                <p className="text-lg mb-6">
                                    Launch your campaign today and connect with thousands of backers worldwide.
                                </p>
                                <a href="/start-campaign" className="btn btn-secondary hover:bg-accent">
                                    Start a Campaign
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <div
                            className="h-[500px] w-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://via.placeholder.com/1920x800/FF7F50')" }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="container mx-auto px-6 py-20 relative z-10 text-center text-white">
                                <h2 className="text-4xl font-bold mb-4">Support Meaningful Causes</h2>
                                <p className="text-lg mb-6">
                                    Be a part of the change by contributing to campaigns that matter.
                                </p>
                                <a href="/campaigns" className="btn btn-secondary hover:bg-accent">
                                    Explore Campaigns
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <div
                            className="h-[500px] w-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://via.placeholder.com/1920x800/6A5ACD')" }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="container mx-auto px-6 py-20 relative z-10 text-center text-white">
                                <h2 className="text-4xl font-bold mb-4">Achieve Goals Together</h2>
                                <p className="text-lg mb-6">
                                    Join hands with a global community to make your dreams come true.
                                </p>
                                <a href="/join-us" className="btn btn-secondary hover:bg-accent">
                                    Join Us
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;