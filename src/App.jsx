import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
