import "./App.css";
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a851656a4602487f9f922a8d57d4bac2`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles))
      .catch((error) => console.log(error))
  }, [category]);

  return (
    <div className="App">
      <h1 className="title">The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items}/>
    </div>
  );
}

export default App;
