import React, { useState, useEffect } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  

  return (
    <div className="bg-fire min-h-screen flex flex-col text-white">
      <title>Dark Society | Home</title>
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
                    href="https://github.com/LuanSilva669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="https://twitter.com/marlborao666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                  >
                    <FaTwitter className="mr-2" />
                    Twitter
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <div className="flex-grow flex justify-center items-center ">
  <div className="flex flex-col justify-center items-center bg-black">
    <div className="max-w-3xl w-full px-96 p-6 justify-start">
      
    </div>
  </div>
</div>

<footer className="bg-black py-1">
      <div className="container flex justify-center mx-auto">
        <div className="container flex justify-center mx-auto">
          <FaGithub
            className="text-3xl text-white cursor-pointer hover:text-gray-200"
            onClick={() =>
              window.open("https://github.com/LuanSilva669/Socialpage")
            }
          />
        </div>
        </div>    
      </footer>

    </div>
  );
};

export default HomePage;
