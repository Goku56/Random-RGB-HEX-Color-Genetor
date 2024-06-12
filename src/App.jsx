import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if (typeofColor === "rgb") handleRgbColor();
    else handleHexColor();
  }, [typeofColor]);

  function handleRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor(`rgb(${r},${g},${b})`);
  }

  function handleHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hex.length);
      hexColor += hex[index];
    }

    setColor(hexColor);
  }

  return (
    <div
      style={{
        width: "99vw",
        height: "98vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeofColor("hex")}>Generate Hex</button>
      <button onClick={() => setTypeofColor("rgb")}>Generate rgb</button>
      <button onClick={typeofColor === "hex" ? handleHexColor : handleRgbColor}>
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          margin: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default App;
