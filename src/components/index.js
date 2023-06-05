import React, { useState, } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import SpotifyWebApi from 'spotify-web-api-js';


const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Lógica para reproduzir a música
  };

  const handlePause = () => {
    setIsPlaying(false);
    // Lógica para pausar a música
  };

  const handleStop = () => {
    setIsPlaying(false);
    // Lógica para parar a música
  };
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
      <div className="flex-grow flex justify-center items-center">
      <div className="bg-black rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 5a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1H3zm6 0a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1H9zm10 0a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1h-4z" />
            </svg>
            <div className="text-white text-xl font-bold">Spotify</div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ${isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handlePlay}
              disabled={isPlaying}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button
              className={`bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded ${!isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handlePause}
              disabled={!isPlaying}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
            <button
              className={`bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ${!isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleStop}
              disabled={!isPlaying}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h12v12H6z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center space-x-4">
            <img className="w-24 h-24 rounded-lg" src="/album.jpg" alt="Album Cover" />
            <div>
              <div className="text-white font-bold text-2xl">Song Title</div>
              <div className="text-gray-400">Artist Name</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white hover:bg-gray-200 text-black px-3 py-1 rounded">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3a1 1 0 00-1 1v12a1 1 0 002 0V4a1 1 0 00-1-1zm5 0a1 1 0 00-1 1v12a1 1 0 002 0V4a1 1 0 00-1-1zm-10 0a1 1 0 00-1 1v12a1 1 0 002 0V4a1 1 0 00-1-1z" />
              </svg>
            </button>
            <button className="bg-white hover:bg-gray-200 text-black px-3 py-1 rounded">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.586 3.586a2 2 0 012.828 0L14 6.243V4a2 2 0 112 0v12a2 2 0 11-2 0v-2.243l-2.586 2.657a2 2 0 01-2.828 0L6 15.757V18a2 2 0 11-2 0V4a2 2 0 112 0v2.243l2.586-2.657zM5 6.243L7.757 9l-2.586 2.657L5 12.757V6.243zm6 0l2.757 2.757-2.586 2.657L11 12.757V6.243z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="bg-white rounded-full w-full h-2"></div>
          <div className="bg-gray-300 rounded-full w-3/4 h-2"></div>
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
