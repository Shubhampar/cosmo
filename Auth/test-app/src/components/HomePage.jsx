import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { authenticated, logout } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
