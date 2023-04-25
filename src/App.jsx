import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Category } from "./components/Category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
