import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                        Welcome Back!
                    </h2>
                    <form className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full mt-2"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full mt-2"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full hover:bg-blue-700 transition-all"
                        >
                            Login
                        </button>
                    </form>

                    <div className="divider my-6">or</div>

                    {/* Google Login */}
                    <button className="btn btn-outline w-full hover:bg-gray-100">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                            alt="Google Icon"
                            className="w-5 h-5 mr-2"
                        />
                        Continue with Google
                    </button>

                    {/* Redirect to Register Page */}
                    <p className="text-sm text-center mt-4 text-gray-600">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;