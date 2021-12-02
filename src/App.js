import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";
import Error from "./pages/Error";

import Loading from "./components/Loading";

const APP_KEY = "03fee059554f48ca98ab84e37672279e";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APP_KEY}`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  const [btnArr, setBtnArr] = useState([]);
  const [clicked, setClicked] = useState("");

  const [filteredNews, setFilteredNews] = useState([]);

  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("");

  const getNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setNews(
      data.articles.map((newsOjb, index) => {
        return {
          ...newsOjb,
          id: index + 1,
        };
      })
    );
    const namesArr = data.articles.map((n) => n.source.name);
    const names = new Set([...namesArr]);
    setBtnArr([...names]);

    setIsLoading(false);
    setClicked("ALL");
  };
  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (clicked === "ALL") {
      setFilteredNews([...news]);
    } else {
      setFilteredNews(news.filter((n) => n.source.name === clicked));
    }

    if (text) {
      setFilteredNews(
        news.filter((n) => n.title.toLowerCase() === text.toLowerCase())
      );
    }
  }, [clicked, text]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  news={news}
                  btnArr={btnArr}
                  setClicked={setClicked}
                  setNews={setNews}
                  filteredNews={filteredNews}
                  setFilteredNews={setFilteredNews}
                  setInputText={setInputText}
                  inputText={inputText}
                  setText={setText}
                />
              }
            />
            <Route path="/article/:id" element={<Article news={news} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
