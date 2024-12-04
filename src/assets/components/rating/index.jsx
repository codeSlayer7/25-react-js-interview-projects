import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

function RatingStars({ numOfStarts = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentId) {
    setRating(getCurrentId);
  }
  function handleMouseMove(getCurrentId) {
    setHover(getCurrentId);
    console.log(getCurrentId);
    
  }

  function handleMouseLeave(getCurrentId) {
    setHover(rating);
  }
  return (
    <>
      {[...Array(numOfStarts)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (rating || hover) ? "active" : "inactive"}
            key={index}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(index)}
            size={40}
          />
        );
      })}
    </>
  );
}

export default RatingStars;
