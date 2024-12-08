import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
import SuccessStories from "../Components/SuccessStories";
import { authContext } from "../Providers/AuthProvider";

const Home = () => {

    const {darkMode, setDarkMode}= useContext(authContext);
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Optional: Save the user's preference to localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("homeDarkMode");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, [setDarkMode]);

  useEffect(() => {
    localStorage.setItem("homeDarkMode", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Theme toggle button */}
      <div className="p-4 flex justify-end dark:bg-gray-900">
        <button
          className="btn btn-primary"
          onClick={toggleDarkMode}
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        {/* UI Components */}
        <Banner/>
        <div>
          <Outlet />
        </div>
        <HowItWorks />
        <SuccessStories />
      </div>
    </div>
  );
};

export default Home;
