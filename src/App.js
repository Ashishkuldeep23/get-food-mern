

import Navbar from "./Components/Navbar/navbar";
import ResturentMain from "./Components/Resturent/ResturentMain";

import Login from "./Components/LoginAndSignin/Login";
import Signin from "./Components/LoginAndSignin/Signin";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<div><Navbar /> <ResturentMain /></div> } />
        <Route path="/logIn" element={<Login />} />
        <Route path="/signIn" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
