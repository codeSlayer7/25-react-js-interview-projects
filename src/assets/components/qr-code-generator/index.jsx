import { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
      }}
    >
      <div>
        {" "}
        <h2>QR Code Generator</h2>
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            placeholder="Enter your value here"
          />
          <button
            disabled={input && input.trim("") !== "" ? false : true}
            onClick={handleGenerateQrCode}
          >
            Generate
          </button>
        </div>
        <div>
          <QRCode
            id="qr-code-value"
            value={qrCode}
            size={400}
            bgColor="#ffff"
          />
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
