import React, { useContext, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (authenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <form onSubmit={handleLogin}></form>
      <h2>Login Page</h2>
      
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button onClick={login}>Login</button>
      <form/>
    </div>
  );
};
export default LoginPage;