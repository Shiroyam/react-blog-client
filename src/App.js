import React from "react";
import Profile from "./pages/myProfile/Profile.jsx";
import Menu from "./components/menu/Menu.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./pages/main/Main.jsx";
import Create from "./pages/create/Create.jsx";
import Registration from "./pages/modal/registration/Registration.jsx";
import Authorization from "./pages/modal/аuthorization/Authorization.jsx";
import Post from "./pages/post/post.jsx";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const flag = useSelector((state) => state.reg.flag);

  return (
    <>
      <Menu />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/createpage" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {flag && <Authorization />}
    </>
  );
}

export default App;
