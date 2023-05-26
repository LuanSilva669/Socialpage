import React from "react";
import { BsGoogle, BsFacebook } from "react-icons/bs";

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Lógica para o login com o Google
  };

  const handleFacebookLogin = () => {
    // Lógica para o login com o Facebook
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>
        <BsGoogle /> Login com Google
      </button>
      <button onClick={handleFacebookLogin}>
        <BsFacebook /> Login com Facebook
      </button>
    </div>
  );
};

export default LoginPage;
