import React from "react";
import Menu from "./components/menu/Menu.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./pages/main/Main.jsx";
import Create from "./pages/create/Create.jsx";
import Registration from "./pages/modal/registration/Registration.jsx";
import Authorization from "./pages/modal/аuthorization/Authorization.jsx";
import axios from "axios";
import { Routes, Route, Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { instance } from "./config/axios";

// async function post() {
//   instance
//   .post("http://localhost:5656/auth/register", {
//       "fullName": "Dima Pypkin",
//       "email": "wdawdwadaD@dawdawdaw.ru",
//       "password": "123456789"
//   })
//   await axios.get(`http://localhost:5656/users`);
//   await axios.get(`http://localhost:5656/posts`);
//     await axios.post(
//       `http://localhost:5656/posts`,
//       {
//         title: "Заголовок статьи",
//         text: "........",
//       },
//       {
//         headers: {
//           Authorization: localStorage.getItem("token"),
//         },
//       }
//     );
// }

function App() {
  async function reg() {
    await instance
      .post("/auth/login", {
        email: "test@test.ru",
        password: "Qwerty123",
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
      });
  }

  async function prov() {
    try {
      await instance.get("/auth/me");
      console.log(localStorage.getItem("token"));
    } catch (error) {
      console.log(error);
    }
  }
  async function create() {
    try {
      await instance.post("/posts", {
        title: "Amet molestie tincidunt id nascetur sit purus turpis",
        text: "........",
        description:"Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur...",
        photoUrl:"..."
      });
    } catch (error) {
      console.log(error);
    }
  }
  const flag = useSelector((state) => state.reg.flag);
  return (
    <> 
      <Menu></Menu>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/createpage" element={<Create/>}/>
      </Routes>
      { flag && <Authorization></Authorization>}
      
    </>
  );
}

export default App;
