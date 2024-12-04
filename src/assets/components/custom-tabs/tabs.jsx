import { useState } from "react";

function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentIndex] = useState(0);
  function handleOnClick(getCurrentIndex) {
    setCurrentIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => {
          return (
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active" : ""
              }`}
              onClick={() => handleOnClick(index)}
              key={tabItem.label}
            >
              <span className="label">{tabItem.label}</span>{" "}
            </div>
          );
        })}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
