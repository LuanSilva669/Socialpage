import React, { useState } from 'react';
import Head from 'next/head';

// Importe sua logo e atribua um nome significativo ao componente
import CustomLogo from '/hlogo.png';

export default function Home() {
  const [sidebar1Open, setSidebar1Open] = useState(false);
  const [sidebar2Open, setSidebar2Open] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  const toggleSidebar1 = () => {
    setSidebar1Open(!sidebar1Open);
  };

  const toggleSidebar2 = () => {
    setSidebar2Open(!sidebar2Open);
  };

  const handleNewTweetChange = (e) => {
    setNewTweet(e.target.value);
  };

  const handleAddTweet = () => {
    if (newTweet.trim() !== '') {
      setTweets([...tweets, newTweet]);
      setNewTweet('');
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex">
        <div
          id="sidebar1"
          className={`w-1/4 bg-gray-200 ${
            sidebar1Open ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            className="p-2 bg-blue-500 text-white rounded-md"
            onClick={toggleSidebar1}
          >
            Toggle Sidebar 1
          </button>
        </div>

        <div className="flex-1 p-5">
          <div className="flex items-center mb-4">
            {/* Substitua FiTwitter pelo seu componente de logo personalizado */}
            <CustomLogo className="text-3xl text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold">Home</h1>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="What's happening?"
                className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newTweet}
                onChange={handleNewTweetChange}
              />
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleAddTweet}
              >
                Add Tweet
              </button>
            </div>
          </div>
          <ul className="space-y-4">
            {tweets.map((tweet, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 rounded-xl text-white break-words"
              >
                {tweet}
              </li>
            ))}
          </ul>
        </div>

        <div
          id="sidebar2"
          className={`w-1/4 bg-gray-200 ${
            sidebar2Open ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            className="p-2 bg-blue-500 text-white rounded-md"
            onClick={toggleSidebar2}
          >
            Toggle Sidebar 2
          </button>
        </div>
      </div>
    </div>
  );
}
