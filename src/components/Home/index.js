import React, { useState } from "react";
import { FaGithub, FaTwitter, FaHeart, FaRetweet, FaComment, FaHome, FaHashtag, FaBell, FaEnvelope, FaList } from "react-icons/fa";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    if (tweetText.trim() !== "") {
      const newTweet = {
        id: new Date().getTime(),
        text: tweetText,
        likes: 0,
      };
      setTweets([newTweet, ...tweets]);
      setTweetText("");
    }
  };

  const handleLikeClick = (tweetId) => {
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === tweetId) {
        return { ...tweet, likes: tweet.likes + 1 };
      }
      return tweet;
    });
    setTweets(updatedTweets);
  };

  const handleRetweetClick = (tweetId) => {
    // handle retweet logic
  };

  const handleCommentClick = (tweetId) => {
    // handle comment logic
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
              <ul className="container flex flex-col items-start mx-auto">
                <li className="my-2">
                  <a
                    href="https://github.com/LuanSilva669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                  >
                    <FaHome className="mr-2" />
                    Home
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="https://twitter.com/marlborao666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                  >
                    <FaBell className="mr-2" />
                    Notifications
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="https://twitter.com/marlborao666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                  >
                    <FaHashtag className="mr-2" />
                    Explorer
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="https://twitter.com/marlborao666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                  >
                    <FaEnvelope className="mr-2" />
                    Message
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="https://twitter.com/marlborao666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors duration-300 py-2 px-4 rounded flex items-center"
                  >
                    <FaList className="mr-2" />
                    Lists
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <div className="flex-grow flex justify-center  items-center ">
      <Carousel
  showThumbs={false}
  infiniteLoop={false}
  autoPlay={false}
  interval={5000}
>
  <div className="bg-black text-white item-start px-20 h-max py-20 rounded-lg shadow-lg top-96 font-space-mono">
    <div>
      <div className=" w-4/12  p-8 rounded-lg shadow-lg font-space-mono">
        <div className="flex align-middle flex-grow items-center mb-4 w-max">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold w-max ">Luan Silva</h2>
            <p className="text-gray-400">@marlborao666</p>
          </div>
        </div>
        <form className="flex flex-col justify-between mb-6" onSubmit={handleTweetSubmit}>
          <textarea
            className="border text-black border-gray-300  rounded-md py-0.5 px-80 w-max mb-2 "
            rows="3"
            placeholder="What's happening?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          ></textarea>
          {tweetText.length > 10 && (
            <p className="text-gray-400 text-sm mb-2">
              {140 - tweetText.length} characters remaining
            </p>
          )}
          <button
            type="submit"
            className="bg-gray-500 hover:bg-red-500 text-white rounded-md px-4 py-2 transition-colors duration-300 ml-auto w-24"
          >
            Tweet
          </button>
        </form>
        <div className="overflow-y-auto max-h-20 h-max w-96 space-y- scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {tweets.map((tweet) => (
            <div className="flex flex-col items-start space-x-10" key={tweet.id}>
              <div className="flex items-center">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  width={10}
                  height={10}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">Luan Silva</h3>
                  <p className="text-gray-400">{tweet.text}</p>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <button
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 focus:outline-none mr-4"
                  onClick={() => handleRetweetClick(tweet.id)}
                >
                  <FaRetweet className="mr-1" />
                  {tweet.retweets}
                </button>
                <button
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 focus:outline-none mr-4"
                  onClick={() => handleCommentClick(tweet.id)}
                >
                  <FaComment className="mr-1" />
                  {tweet.comments}
                </button>
                <button
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 focus:outline-none"
                  onClick={() => handleLikeClick(tweet.id)}
                >
                  <FaHeart className="mr-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  <div className="bg-black text-white w-11/12 p-8 rounded-lg shadow-lg font-space-mono">
    {/* Conteúdo do segundo container */}
  </div>
</Carousel>



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
    </div>
  );
};

export default HomePage;
