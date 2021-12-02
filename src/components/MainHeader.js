import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const MainHeader = ({
  news,
  setNews,
  btnArr,
  setClicked,
  setFilteredNews,
  setInputText,
  inputText,
  setText,
}) => {
  const textHandler = () => {
    setText("");
    setFilteredNews(news);
  };
  return (
    <header>
      <Link to="/" onClick={textHandler}>
        <h1 className="logo">Home</h1>
      </Link>
      <Navbar
        btnArr={btnArr}
        setClicked={setClicked}
        setNews={setNews}
        news={news}
        setText={setText}
      />
      <Form
        news={news}
        setFilteredNews={setFilteredNews}
        setInputText={setInputText}
        inputText={inputText}
        setText={setText}
      />
    </header>
  );
};

export default MainHeader;
