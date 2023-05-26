import React, { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-fire min-h-screen flex flex-col text-white">
      <title>HomePage</title>
      
      <header className="bg-black py-4">
        <div className="container flex items-center justify-start mx-auto">
          <img src="/hlogo.png" className="h-12 w-auto" alt="Logo" />
        </div>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-black p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/toplogo.png" className="h-12 w-auto" alt="Logo" />
          </div>
          <h1 className="text-3xl font-bold font-space-mono text-white tracking-wider mb-4"></h1>
          <p className="text-gray-400 mb-4 font-space-mono">
            Unveil the obscure secrets of our social network
            <p>Connect with lost souls and share moments</p>
          </p>
          <button
            className="bg-firee bg-gray-800 text-white font-space-mono py-2 px-6 rounded-full duration-300 transition-colors hover:bg-red-500"
            onClick={handleLoginClick}
          >
            sacrifice yourself
          </button>

          <a href="#" className="text-white font-extralight hover:underline block mt-4">
            Awaken the Evil
          </a>
        </div>
      </div>
      <footer className="bg-black py-4">
        <div className="container flex justify-center mx-auto">
          <FaGithub
            className="text-3xl text-white cursor-pointer hover:text-gray-200"
            onClick={() => window.open("https://github.com/your-username/your-repository")}
          />
        </div>
      </footer>

      {/* Modal de Login */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="bg-black rounded-lg shadow-lg p-8 relative">
            <button
              className="absolute top-4 right-4 text-white text-xl cursor-pointer"
              onClick={handleCloseModal}
            >
              x
            </button>
            <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
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
                type="submit"
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
                <FaFacebook className="text-white text-xl mr-2" />
                <span>Sign in with Gmail</span>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
                <FaFacebook className="text-white text-xl mr-2" />
                <span>Sign in with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
