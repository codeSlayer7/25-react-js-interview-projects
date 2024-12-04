import { useEffect, useState } from "react";
import "./styles.css";

function ScrollIndicator({ url }) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMassege, setErrorMassege] = useState("");
  const [scrollPrecentage, setScrollPrecentage] = useState(0);
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const result = await fetch(getUrl);
      const data = await result.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMassege(error.massege);
    }
  }
  useEffect(() => {
    if (url) fetchData(url);
  }, [url]);

  function handleScroolPrecentage() {
    // console.log(document.body.scrollTop, "body scroolTop");
    // console.log(document.documentElement.scrollTop, "scroll top");
    // console.log(document.documentElement.scrollHeight, "scroll heigt");
    // console.log(document.documentElement.clientHeight, "client height");

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPrecentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroolPrecentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  console.log(scrollPrecentage, "scroll-procentage");
  if (errorMassege) {
    return <div>Error occured {errorMassege}</div>;
  }
  if (loading) {
    return <div> Loading data...</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h3
          style={{ fontSize: "34px", textAlign: "center", padding: "20px 0px" }}
        >
          Custom Scroll Indicator
        </h3>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPrecentage}%` }}
          ></div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "15vh",
        }}
      >
        {data && data.length > 0
          ? data.map((profuctItem, index) => (
              <p key={index}>{profuctItem.title}</p>
            ))
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
