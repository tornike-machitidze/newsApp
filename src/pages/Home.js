import React from "react";
import NewsCart from "../components/NewsCart";

import MainHeader from "../components/MainHeader";

const Home = ({
  news,
  setNews,
  btnArr,
  setClicked,
  filteredNews,
  setFilteredNews,
  setInputText,
  inputText,
  setText,
}) => {
  return (
    <div className="main-container">
      <MainHeader
        setNews={setNews}
        btnArr={btnArr}
        setClicked={setClicked}
        news={news}
        setFilteredNews={setFilteredNews}
        setInputText={setInputText}
        inputText={inputText}
        setText={setText}
      />
      <ul className="news-cart-container">
        {filteredNews.map((n) => {
          return (
            <>
              <NewsCart key={n.id} id={n.id} news={n} />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
