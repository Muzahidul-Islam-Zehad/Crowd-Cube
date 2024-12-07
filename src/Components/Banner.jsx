
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
                            <div className="absolute inset-0 bg-gradient-to-b from-[#ffffffdd] via-[#f9fafb] to-[#ffffff]"></div>
                            <div className="container mx-auto px-6 py-20 relative z-10 text-center">
                                <h2 className="text-4xl font-bold mb-4 text-[#1f2937]">Turn Ideas Into Reality</h2>
                                <p className="text-lg mb-6 text-[#4b5563]">
                                    Launch your campaign today and connect with thousands of backers worldwide.
                                </p>
                                <a
                                    href="/start-campaign"
                                    className="btn bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-md rounded-full px-6 py-3"
                                >
                                    Start a Campaign
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-[#f3f4f6] text-[#1f2937] hover:bg-[#e5e7eb]">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-[#f3f4f6] text-[#1f2937] hover:bg-[#e5e7eb]">❯</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <div
                            className="h-[500px] w-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://via.placeholder.com/1920x800/FF7F50')" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[#ffffffdd] via-[#f9fafb] to-[#ffffff]"></div>
                            <div className="container mx-auto px-6 py-20 relative z-10 text-center">
                                <h2 className="text-4xl font-bold mb-4 text-[#1f2937]">Support Meaningful Causes</h2>
                                <p className="text-lg mb-6 text-[#4b5563]">
                                    Be a part of the change by contributing to campaigns that matter.
                                </p>
                                <a
                                    href="/campaigns"
                                    className="btn bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-md rounded-full px-6 py-3"
                                >
                                    Explore Campaigns
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-[#f3f4f6] text-[#1f2937] hover:bg-[#e5e7eb]">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-[#f3f4f6] text-[#1f2937] hover:bg-[#e5e7eb]">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <div
                            className="h-[500px] w-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://via.placeholder.com/1920x800/6A5ACD')" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[#ffffffdd] via-[#f9fafb] to-[#ffffff]"></div>
                            <div className="container mx-auto px-6 py-20 relative z-10 text-center">
                                <h2 className="text-4xl font-bold mb-4 text-[#1f2937]">Achieve Goals Together</h2>
                                <p className="text-lg mb-6 text-[#4b5563]">
                                    Join hands with a global community to make your dreams come true.
                                </p>
                                <a
                                    href="/join-us"
                                    className="btn bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-md rounded-full px-6 py-3"
                                >
                                    Join Us
                                </a>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-[#f3f4f6] text-[#1f2937] hover:bg-[#e5e7eb]">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-[#f3f4f6] text-[#1f2937] hover:bg-[#e5e7eb]">❯</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Banner;