import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import Componente3 from "./components/Componente3";

function App() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="container">
      <div className="component">
        <Componente1 hasContent={inputText !== ""} />
      </div>
      <Componente2 handleInputChange={handleInputChange} />
      <Componente3 inputText={inputText} />
    </div>
  );
}

export default App;
