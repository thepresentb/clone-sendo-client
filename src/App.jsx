import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Category } from "./components/Category/Category";
import { Info } from "./components/Info/Info";
import { useDispatch, useSelector } from "react-redux";
import { userApi } from "./redux/apiRequest/user.api";
import { Login } from "./components/Authen/Login";
import { Register } from "./components/Authen/Register";
import { Bag } from "./components/Bag/Bag";

function App() {
  const { authenState } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      userApi.refresh(dispatch, accessToken);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product_info" element={<Info />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
      {authenState === "login" ? <Login /> : null}
      {authenState === "register" ? <Register /> : null}
      <Footer />
    </div>
  );
}

export default App;
