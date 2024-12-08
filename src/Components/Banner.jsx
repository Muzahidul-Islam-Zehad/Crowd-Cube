
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={'https://i.ibb.co.com/vB6PSjJ/banner1.jpg'}
                        className="w-full h-[400px] object-cover" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={'https://i.ibb.co.com/jy126Lt/banner2.jpg'}
                        className="w-full h-[400px] object-cover" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={'https://i.ibb.co.com/L8xfhk6/banner3.jpg'}
                        className="w-full h-[400px] object-cover" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src={'https://i.ibb.co.com/q1hMLW2/banner4.jpg'}
                        className="w-full h-[400px] object-cover" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>

    );
};

export default Banner;