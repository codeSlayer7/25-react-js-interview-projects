/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMassege, setErrorMassege] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(getUrl) {
    try {
      const resposne = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await resposne.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMassege(error.Massege);
      setLoading(false);
    }
  }
  useState(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div> Loading...</div>;
  }
  if (errorMassege !== null) {
    return <div>Error happpend {errorMassege}</div>;
  }
  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrevious}
        />

        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                  key={index}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
}

export default ImageSlider;
