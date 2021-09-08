// src/components/ArticleList.js
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

export default function ArticleList() {
  const articleCards = [
    {
      id: 1,
      title: "What is React all about?",
      body: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body: "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ];
  const [articles, set_articles] = useState(articleCards);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data! :D");

      // Getting back data from the net, through the wire, air, blablabal
      const res = await axios.get(
        "http://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res);
    }
    doSomeDataFetching();
  }, []);

  // const [articles, set_articles] = useState(articleCards);
  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articleCards.map((articleCard, index) => (
        <ArticleCard
          key={index}
          title={articleCard.title}
          content={articleCard.body}
        />
      ))}
    </div>
  );
}
