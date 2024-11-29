import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import TeamPage from "../src/pages/TeamPage";
import RefreshHandler from "./RefreshHandler";

function App() {
  const [count, setCount] = useState(0);
  const [Authenticated, setAuthenticated] = useState(false);

  const PrivateRoute = (element) => {
    return Authenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/" element={PrivateRoute(<Home />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={PrivateRoute(<Home />)} />
        <Route path="/TeamPage" element={<TeamPage />} />
      </Routes>
    </>
  );
}

export default App;
