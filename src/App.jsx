import { useState } from "react";

import Accrdian from "./assets/components/accordian";
import RandomColor from "./assets/components/random-color";
import RatingStars from "./assets/components/rating";
import ImageSlider from "./assets/components/image-slider";
import LoadMoreData from "./assets/components/load-more-data";
import TreeView from "./assets/components/tree-view";
import sideMenu from "./assets/components/tree-view/data";
import QRCOdeGenerator from "./assets/components/qr-code-generator";
import LightDarkMode from "./assets/components/light-dark-mode";
import ScrollIndicator from "./assets/components/scroll-indicator";
import TabTest from "./assets/components/custom-tabs/tab-test";
import ModalTest from "./assets/components/custom-modal-popup/test-modal";
import GithubProfileFinder from "./assets/components/github-profile-finder";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accrdian/> */}
      {/* <RandomColor /> */}
      {/* <RatingStars numOfStarts={10} /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={10}
        page={'1'}
      /> */}

      {/* <LoadMoreData url={"https://dummyjson.com/products"} /> */}

      {/* <TreeView menu={sideMenu} /> */}
      {/* <QRCOdeGenerator /> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      <GithubProfileFinder />
    </>
  );
}

export default App;
