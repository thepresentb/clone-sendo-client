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
import { CheckOut } from "./components/CheckOut/CheckOut";

function App() {
  const { authenState } = useSelector((state) => state.user);
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      userApi.refresh(dispatch, accessToken);
    }
    // setTimeout(() => {
    //   setShowPopUp(true);
    // }, 1500);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CheckOut />} />
        {/* <Route path="/" element={<Body />} /> */}
        <Route path="/category" element={<Category />} />
        <Route path="/product_info" element={<Info />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>
      {authenState === "login" ? <Login /> : null}
      {authenState === "register" ? <Register /> : null}
      <Footer />
      {showPopUp ? <PopUp setShowPopUp={setShowPopUp} /> : null}
    </div>
  );
}

const PopUp = ({ setShowPopUp }) => {
  return (
    <div style={{ animation: `fadeIn 0.2s` }}>
      <div className="flex">
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="flex m-auto overflow-x-hidden overflow-y-auto fixed h-modal md:h-fit w-full sm:w-fit top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
        >
          <div
            className="absolute z-50 right-0 top-0 font-bold text-2xl text-slate-100 cursor-pointer"
            onClick={() => setShowPopUp(false)}
          >
            [X]
          </div>
          <img className="w-[400px]" src="https://media3.scdn.vn/img4/2023/05_11/aGw5nUw2owoGxwyqCz7g.png" alt="" />
        </div>
      </div>
      <div className={`opacity-70 fixed inset-0 z-40 bg-black `}></div>
    </div>
  );
};

export default App;
