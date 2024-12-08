import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const RegisterPage = () => {
    const { googleLogin, setUser, registerWithEmailAndPassword, updateUserProfile } = useContext(authContext);
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState(null);

    const LoginWithGoogle = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);
                Swal.fire("Registered successfull");
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => { console.log(err.massege) });
    }

    const handleRegistrationForm = (e) => {
        e.preventDefault();
        setErrMsg(null);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const hasUppercase = /(?=.*[A-Z])/;
        const hasLowercase = /(?=.*[a-z])/;

        if (password.length < 6) {
            setErrMsg('Password must be at least 6 characters')
            return;
        } else if (!hasUppercase.test(password)) {
            setErrMsg('Password must have one uppercase letter')
            return;
        } else if (!hasLowercase.test(password)) {
            setErrMsg('Password must have one lowercase letter')
            return;
        }

        const userDatabse = { name, email, photo };
        const updatedData = {
            displayName: name,
            photoURL: photo,
        };

        registerWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user;

                updateUserProfile(updatedData)
                    .then(() => {
                        user.reload()
                            .then(() => {
                                setUser({
                                    displayName: user.displayName,
                                    photoURL: user.photoURL,
                                    email: user.email,
                                });

                                fetch('https://assignment10-server-rosy-eight.vercel.app/users', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(userDatabse),
                                })
                                    .then((res) => res.json())
                                    .then((data) => {
                                        if (data.acknowledged) {
                                            Swal.fire("Registered successfull");
                                            navigate('/'); 
                                        }
                                    })
                                    .catch((err) => console.error('Error saving user:', err));
                            })
                            .catch((err) => console.error('Error reloading user:', err));
                    })
                    .catch((err) => console.error('Error updating user profile:', err));
            })
            .catch((err) => {
                setErrMsg('Email Already Registered.');
                console.error('Error registering user:', err);
            })
    };



    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Create Your Account
                </h2>
                <form onSubmit={handleRegistrationForm} className="space-y-4">
                    
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full mt-2"
                        />
                    </div>

                    
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
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-600">
                            Photo URL
                        </label>
                        <input
                            name="photo"
                            type="url"
                            id="photoURL"
                            placeholder="Enter a photo URL"
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
                        Register
                    </button>
                </form>
                <div className="h-3 my-2 text-center">
                    {
                        errMsg && <p className="text-red-600 text-lg">{errMsg}</p>
                    }
                </div>
                <div className="divider my-6">or</div>

                <button onClick={LoginWithGoogle} className="btn btn-outline w-full hover:bg-gray-100">
                    <span className="text-2xl">
                        <FcGoogle />
                    </span>
                    Sign Up with Google
                </button>

                <p className="text-sm text-center mt-4 text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
