import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import RefreshHandler from "./refreshHandler";

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={PrivateRoute(<Home />)} />
      </Routes>
    </>
  );
}

export default App;
