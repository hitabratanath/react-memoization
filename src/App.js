import { useCallback, useState } from "react";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleIncClick = useCallback(() => {
    setValue(value + 1);
  }, [value]);
  const arr = [1, 2, 3];
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={handleIncClick}>INC</button>
      <input type="text" value={input} onChange={handleInputChange} />
      <Child value={value} incCounter={handleIncClick} arr={arr} />
    </div>
  );
}
