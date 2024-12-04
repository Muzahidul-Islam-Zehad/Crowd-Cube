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
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: '/addNewCampaign',
                element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>,
            },
            {
                path: '/myCampaign/:email',
                element: <MyCampaign></MyCampaign>,
                loader: ({params}) => fetch(`http://localhost:5000/campaigns/myDonation/${params.email}`)
            },
            {
                path: '/myDonation/:email',
                element: <PrivateRoute><MyDonation></MyDonation></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/donateUsers/${params.email}`)
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
                loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            },
            {
                path:'/myCampaign/updateCampaign/:id',
                element:<PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            }
        ],
    },
]);

export default router;