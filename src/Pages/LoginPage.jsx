import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const LoginPage = () => {
    const { googleLogin, setUser, loginWithEmailAndPassword } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [errMsg, setErrMsg] = useState(null);

    const LoginWithGoogle = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);
                Swal.fire("Login successfull");
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => { console.log(err.massege) });
    }

    const handleLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrMsg(null);

        loginWithEmailAndPassword(email, password)
            .then(result => {
                setUser(result.user);
                Swal.fire("Login successfull");
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                setErrMsg(err);
            })

    }

    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                        Welcome Back!
                    </h2>
                    <form onSubmit={handleLoginForm} className="space-y-4">
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full mt-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full mt-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full hover:bg-blue-700 transition-all"
                        >
                            Login
                        </button>
                    </form>

                    <div className="h-3 my-2 text-center">
                        {
                            errMsg && <p className="text-red-600 text-lg">Invalid Email or Password</p>
                        }
                    </div>

                    <div className="divider my-6">or</div>

                    <button onClick={LoginWithGoogle} className="btn btn-outline w-full hover:bg-gray-100">
                        <span className="text-2xl">
                            <FcGoogle />
                        </span>
                        Continue with Google
                    </button>

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