function Modal({ id, header, body, footer, onClose }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className={"modal-content"}>
        <div className="header">
          <span
            onClick={() => {
              onClose();
            }}
            className="close-modal-icon"
          >
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is Body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <h2>This is Footer</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
