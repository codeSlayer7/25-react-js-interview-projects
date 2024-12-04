import { useState } from "react";
import { data } from "./data";
import "./styles.css";
function Accrdian() {
  const [selected, setSelected] = useState(null);
  const [enableMiltiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // useEffect(() => {}, [selected]);

  function handleSingeSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMiltiple = [...multiple];
    const findIndexOfCurrentId = copyMiltiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMiltiple.push(getCurrentId);
    } else {
      console.log(getCurrentId, "false area");
      copyMiltiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copyMiltiple);
  }

  console.log(multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMiltiSelection)}>
        {!enableMiltiSelection
          ? "Enable Multi Selection"
          : "Unable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                onClick={
                  enableMiltiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingeSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMiltiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content"> {item.answer} </div>
                  )
                : selected === item.id && (
                    <div className="content"> {item.answer} </div>
                  )}
            </div>
          ))
        ) : (
          <div> Not data found!</div>
        )}
      </div>
    </div>
  );
}

export default Accrdian;
