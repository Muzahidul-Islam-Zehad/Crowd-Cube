import { Outlet, } from "react-router-dom";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import SuccessStories from "../Components/SuccessStories";

const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <div className="border-4 p-5">
                <Outlet></Outlet>
            </div>
            <HowItWorks></HowItWorks>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;