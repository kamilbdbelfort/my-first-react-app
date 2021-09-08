// src/components/LikeButton.js
import { useState } from "react";

export default function LikeButton() {
  const initialValue = 1;
  const [countClicks, setLikeButton] = useState(initialValue);
  const buttonUnliked = "Like this";
  const buttonLiked = "You've liked this. Click to unlike";
  let buttonValue = "Like this";

  function buttonClicked(countClicks) {
    console.log(countClicks);
    if (countClicks === 1) {
      console.log("step 0", countClicks);
      buttonValue = buttonUnliked;
    } else if (countClicks > 1) {
      console.log("step 1", countClicks);
      if (countClicks === 1 || countClicks % 2 !== 0) {
        console.log("step 2", countClicks);
        buttonValue = buttonUnliked;
      } else {
        console.log("step 3", countClicks);
        buttonValue = buttonLiked;
      }
    }
  }

  buttonClicked(countClicks);

  return (
    <div>
      <p>
        <button onClick={(buttonClicked) => setLikeButton(countClicks + 1)}>
          {buttonValue}
        </button>
      </p>
    </div>
  );
}
