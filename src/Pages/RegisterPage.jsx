import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const RegisterPage = () => {
    const { googleLogin, setUser, registerWithEmailAndPassword } = useContext(authContext);
    const navigate = useNavigate();

    const LoginWithGoogle = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);
            })
            .catch(err => { console.log(err.massege) });
    }

    const handleRegistrationForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const hasUppercase = /(?=.*[A-Z])/;
        const hasLowercase = /(?=.*[a-z])/;

        if(password.length < 6)
        {
            alert('password must be atleast 6 character');
            return;
        }
        else if(!hasUppercase.test(password))
        {
            alert('password must have one uppercase letter');
            return;
        }
        else if(!hasLowercase.test(password))
        {
            alert('password must have one lowercase letter');
            return;
        }

        const userDatabse = { name, email, photo };

        registerWithEmailAndPassword(email, password)
            .then(result => {
                
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userDatabse)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (result.user && data.acknowledged) {
                            alert('register successful');
                            navigate('/');
                        }
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Create Your Account
                </h2>
                <form onSubmit={handleRegistrationForm} className="space-y-4">
                    {/* Name Field */}
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

                    {/* Email Field */}
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

                    {/* Photo URL Field */}
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

                    {/* Password Field */}
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

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full hover:bg-blue-700 transition-all"
                    >
                        Register
                    </button>
                </form>

                <div className="divider my-6">or</div>

                {/* Google Sign-In Button */}
                <button onClick={LoginWithGoogle} className="btn btn-outline w-full hover:bg-gray-100">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        alt="Google Icon"
                        className="w-5 h-5 mr-2"
                    />
                    Sign Up with Google
                </button>

                {/* Redirect to Login Page */}
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
