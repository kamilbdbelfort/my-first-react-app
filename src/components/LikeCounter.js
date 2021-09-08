// src/components/LikeCounter.js
import { useState } from "react"; // <- note the added import of useState
import { useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state

  // const increment = () => {
  //   set_numLikes(numLikes + 1);
  //   console.log("Yes, clicked! Current number of likes:", numLikes);
  // };

  console.log("what are there?", numLikes, set_numLikes);

  //   const initialValue = 0;
  //   const [count, setCount] = useState(initialValue);

  //   console.log("count", count);
  // console.log("set count", setCount, output: function);

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, []);

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={(increment) => set_numLikes(numLikes + 1)}>
          Like
        </button>
        <button onClick={(reset) => set_numLikes(numLikes * 0)}>Reset</button>
      </p>
    </div>
  );
}
