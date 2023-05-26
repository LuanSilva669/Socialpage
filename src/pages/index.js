import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md text-center">
        <h1 className="text-4xl font-bold mb-4">Minha Homepage</h1>
        <p className="text-gray-600">
          Bem-vindo à minha homepage usando o Tailwind CSS e o Next.js!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" >
          Clique aqui
        </button>
      </div>
    </div>
  );
};

export default HomePage;