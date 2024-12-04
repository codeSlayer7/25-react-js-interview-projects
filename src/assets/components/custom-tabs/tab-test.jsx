import Tabs from "./tabs";
import "./tabs.css";

function ExampleComonent() {
  return <h5>This is content 3</h5>;
}

function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },

    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    { label: "Tab 3", content: <ExampleComonent /> },
  ];

  function handleChange(getCurrentTabIndex) {
    console.log(getCurrentTabIndex, "here i got index in upper layer");
  }
  return <Tabs  
  tabsContent={tabs} onChange={handleChange} />;
}

export default TabTest;
