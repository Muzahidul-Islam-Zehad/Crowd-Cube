import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllCampaign from "../Pages/AllCampaign";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonation from "../Pages/MyDonation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/allCampaign',
                element: <AllCampaign></AllCampaign>
            },
            {
                path: '/addNewCampaign',
                element: <AddNewCampaign></AddNewCampaign>
            },
            {
                path: '/myCampaign',
                element: <MyCampaign></MyCampaign>
            },
            {
                path: '/myDonation',
                element: <MyDonation></MyDonation>
            }
        ],
    },
]);

export default router;