import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllCampaign from "../Pages/AllCampaign";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonation from "../Pages/MyDonation";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CampaignDetails from "../Pages/CampaignDetails";
import UpdateCampaign from "../Pages/UpdateCampaign";

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
                element: <AllCampaign></AllCampaign>,
                loader: () => fetch('https://assignment10-server-rosy-eight.vercel.app/campaigns')
            },
            {
                path: '/addNewCampaign',
                element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>,
            },
            {
                path: '/myCampaign/:email',
                element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-server-rosy-eight.vercel.app/campaigns/myDonation/${params.email}`)
            },
            {
                path: '/myDonation/:email',
                element: <PrivateRoute><MyDonation></MyDonation></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-server-rosy-eight.vercel.app/donateUsers/${params.email}`)
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/campaignDetails/:id',
                element: <PrivateRoute><CampaignDetails></CampaignDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-server-rosy-eight.vercel.app/campaigns/${params.id}`)
            },
            {
                path:'/myCampaign/updateCampaign/:id',
                element:<PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-server-rosy-eight.vercel.app/campaigns/${params.id}`)
            }
        ],
    },
]);

export default router;