import { useEffect, useState } from "react";

function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if (colorType === "hex") {
      createHexColor();
    } else {
      createRgbColor();
    }
  }, [colorType]);

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function createHexColor() {
    let hexs = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexResult = "#";
    for (let i = 0; i < 6; i++) {
      hexResult += hexs[randomColorUtility(hexs.length)];
    }
    setColor(hexResult);
  }
  function createRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb${r}, ${g}, ${b}`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div >
        <button onClick={() => setColorType("hex")}> Create Hex color</button>
        <button onClick={() => setColorType("rgb")}> Create RGB color</button>
        <button onClick={colorType === "hex" ? createHexColor : createRgbColor}>
          Generate Random Color
        </button>

        <div>
          <h1>{colorType == "rgb" ? "rgb" : "hex"}</h1>
          <h2>{color}</h2>
        </div>
      </div>
    </div>
  );
}

export default RandomColor;
