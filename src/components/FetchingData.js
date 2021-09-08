// src/components/FetchingData.js

import { useState, useEffect } from "react";
import axios from "axios";

// step 1: fetch data
// step 2: console.log what you got back
// step 3: put the data in the state
// step 4: map and display

export default function FetchingData() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      console.log("response", response.data);
      setImage(response.data); //IMPORTANT put data in the state
    }
    fetchData(); //IMPORTANT call the function
  }, []);

  //   console.log("image", image);

  return (
    <div>
      {image.map((c) => (
        <img key={c.id} style={{ maxWidth: "100%" }} src={c.url} />
      ))}
    </div>
  );
}
