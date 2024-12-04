import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

 
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false)

  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal</button>
      {showModalPopup && (
        <Modal
          header={
            <div>
              <h2>Customized prop from parent</h2>{" "}
            </div>
          }
          onClose={onClose}
          showModalPopup={showModalPopup}
        />
      )}
    </div>
  );
}

export default ModalTest;
