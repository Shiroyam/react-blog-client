import React from "react";
import Profile from "./pages/myProfile/Profile.jsx";
import Menu from "./components/menu/Menu.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./pages/main/Main.jsx";
import Create from "./pages/create/Create.jsx";
import Registration from "./pages/modal/registration/Registration.jsx";
import Authorization from "./pages/modal/аuthorization/Authorization.jsx";
import Post from "./pages/post/Post.jsx";
import { Routes, Route } from "react-router-dom";
import  RequireAuht  from "./hoc/RequireAuht";
import { useSelector } from "react-redux";

function App() {
  const flagAuth = useSelector((state) => state.auth.flagAuth);
  const flagReg = useSelector((state) => state.reg.flagReg);
  return (
    <>
      {flagReg && <Registration />}
      {flagAuth && <Authorization />}
      <Menu />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<Post />} />
        <Route
          path="/createpage/"
          element={
            <RequireAuht>
              <Create />
            </RequireAuht>
          }
        />
        <Route
          path="/createpage/:edit/:id"
          element={
            <RequireAuht>
              <Create />
            </RequireAuht>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuht>
              <Profile />
            </RequireAuht>
          }
        />
      </Routes>
    </>
  );
}

export default App;
