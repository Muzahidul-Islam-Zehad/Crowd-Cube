import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-[100vh] flex flex-col items-center justify-center">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <p className="text-2xl font-medium text-yellow-600 mb-10">Page Not Found</p>
            <Link to={-1}>
                <button className="btn bg-green-500 text-white hover:bg-green-900">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;