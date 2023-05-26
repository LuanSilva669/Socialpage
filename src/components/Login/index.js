import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaGithub} from "react-icons/fa";

const containerVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const LoginPage = () => {
  const handleLogin = () => {
    // Lógica de login
  };

  return (
    <div>
    <header className="bg-black py-4">
    <div className="container flex items-center justify-start mx-auto">
      <img src="/hlogo.png" className="h-12 w-auto" alt="Logo" />
    </div>
  </header>
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        className="w-100 h-30  bg-gray-800 rounded-lg shadow-lg p-8"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Sign in</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-white mb-2 block">
              Email or Phone
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-600 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="text-white mb-2 block">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-600 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>
          <button
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-white">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600">
              Join now
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mr-2">
            <FaGoogle className="text-white text-xl mr-2" />
            <span>Sign in with Gmail</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
            <FaFacebook className="text-white text-xl mr-2" />
            <span>Sign in with Facebook</span>
          </button>
        </div>
      </motion.div>
    </div>
    <footer className="bg-black py-4">
        <div className="container flex justify-center mx-auto">
          <FaGithub
            className="text-3xl text-white cursor-pointer hover:text-gray-200"
            onClick={() => window.open("https://github.com/your-username/your-repository")}
          />
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
