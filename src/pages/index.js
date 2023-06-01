
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const LoginPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log("Registering user...");
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-fire min-h-screen flex flex-col text-white">
    <title>Dark Society</title>
    <header className="bg-black py-1">
      <div className="container flex justify-between items-center mx-auto relative">
        <div className="flex items-center">
          <Image src="/hlogo.png" alt="Logo" width={60} height={60} />
        </div>
        <button
          className="text-white focus:outline-none flex item"
          onClick={handleMenuClick}
        >
          {!showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2H3zm0 6a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2H3zm0 6a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2H3z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M4.293 7.293a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L11 5.414V17a1 1 0 1 1-2 0V5.414L4.707 7.707a
                1 1 0 0 1-1.414 0z"
              />
            </svg>
          )}
        </button>
        {showMenu && (
          <nav className="bg-black py-5 px-10 absolute top-full right-1 flex flex-col items-center">
            <ul className="container flex flex-col items-center mx-auto">
              <li className="my-2">
                <a
                  href="https://github.com/LuanSilva669" target="_blank"
                  className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </li>
             
              <li className="my-2">
                <a
                  href="https://twitter.com/marlborao666" target="_blank"
                  className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                >
                  <FaTwitter className="mr-2"  />
                 Twitter
                </a>
              </li>
             
            </ul>
          </nav>
        )}
      </div>
    </header>

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-w p-8 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <Image src="/toplogo.png" alt="Logo" height={40} width={200} />
          </div>
          <p className="text-black mb-4 font-space-mono">
          Abandon the old ways and change to the new
          </p>
          <button
            className="bg-firee bg-gray-800 text-white font-space-mono py-2 px-6 rounded-full duration-300 transition-colors  hover:bg-slate-500"
            onClick={handleLoginClick}
          >
            Enjoy
          </button>
          <div className="flex justify-center">
            <button
              className="flex justify-center text-white font-extralight hover:underline mt-4"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-black py-1">
        <div className="container flex justify-center mx-auto">
          <FaGithub
            className="text-3xl text-white cursor-pointer hover:text-gray-200"
            onClick={() =>
              window.open("https://github.com/LuanSilva669/Socialpage")
            }
          />
        </div>
      </footer>

      {/* Modal de Login */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="bg-black rounded-lg shadow-lg p-8 relative">
            <button
              className="absolute top-4 right-4 text-white 
              text-xl cursor-pointer"
              onClick={handleCloseModal}
            >
              x
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 font-space-mono">Login</h2>
            <Image
              src="/toplogo.png"
              alt="Logo"
              width={150}
              height={80}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            />
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="text-white mb-2 block font-space-mono">
                  Email or Phone
                </label>
                <input
                  type="text"
                  id="username"
                  className="border  border-gray-600 rounded-lg py-1 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="text-white mb-2 block font-space-mono">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-600 rounded-lg py-1 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
                />
              </div>
            
            </form>
            <div className="mt-6 text-center">
              <a href="./home">
            <button
            
              type="submit"
              className="bg-gray-500  hover:bg-slate-500  text-white rounded-md  px-1 py-1 transition-colors duration-300 ml-auto font-space-mono w-24"
            >
              login
            </button>
            </a>
              <p className="text-white">
                Dont have an account?{" "}
                <a href="#" className="text-blue-600">
                  Join now
                </a>
              </p>
            </div>
            <div className="flex items-center justify-center mt-6">
         
            <button className="bg-gray-400 hover:bg-slate-500  hover:text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mr-2 transition-colors">
            <FaTwitter className="text-white text-xl mr-2" />
              <span>Sign up with Twitter</span>
            </button>
            <button className="bg-gray-400  hover:bg-slate-500  hover:text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mr-2 transition-colors">
              <FaFacebook className="text-white text-xl mr-2" />
              <span>Sign up with Facebook</span>
            </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Inscrição */}
      {showRegisterModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="bg-black rounded-lg shadow-lg p-8 relative">
            <button
              className="absolute top-4 right-4 text-white text-xl cursor-pointer"
              onClick={handleCloseModal}
            >
              x
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 font-space-mono">Register</h2>
            <Image
              src="/toplogo.png"
              alt="Logo"
              width={150}
              height={80}
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
            />
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="text-white mb-2 block font-space-mono">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="border border-gray-600 rounded-lg py-1 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-white mb-2 block font-space-mono">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-600 rounded-lg py-1 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="text-white mb-2 block font-space-mono">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-600 rounded-lg py-1 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirm-password" className="text-white mb-2 block font-space-mono">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="border border-gray-600 rounded-lg py-1 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-700 text-white"
                />
              </div>
             
            </form>
            <div className="mt- text-center">
              <p className="text-white font-space-mono">
                Already have an account?{" "}
                <a href="#" className="text-blue-600">
                  Sign in
                </a>
              </p>
            </div>
            <div className="flex items-center justify-center mt-6">
          <button className="bg-gray-400  hover:bg-slate-500  hover:text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mr-2 transition-colors">
            <FaTwitter className="text-white text-xl mr-2" />
            <span>Sign up with Twitter</span>
          </button>
          <button className="bg-gray-400  hover:bg-slate-500  hover:text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mr-2 transition-colors">
            <FaFacebook className="text-white text-xl mr-2" />
            <span>Sign up with Facebook</span>
          </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
