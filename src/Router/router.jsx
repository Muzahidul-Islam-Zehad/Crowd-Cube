import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllCampaign from "../Pages/AllCampaign";
import AddNewCampaign from "../Pages/AddNewCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonation from "../Pages/MyDonation";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
            },
            {
                path: '/myCampaign',
                element: <MyCampaign></MyCampaign>
            },
            {
                path: '/myDonation',
                element: <MyDonation></MyDonation>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            }
        ],
    },
]);

export default router;