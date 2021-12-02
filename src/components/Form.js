import React from "react";

const Form = ({ setInputText, inputText, setText }) => {
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const searchTextHandler = (e) => {
    e.preventDefault();
    setText(inputText);

    setInputText("");
  };

  return (
    <form className="search">
      <input
        value={inputText}
        type="text"
        onChange={textHandler}
        placeholder="article title"
      />
      <button
        className="btn input-btn"
        type="submit"
        onClick={searchTextHandler}
      >
        search
      </button>
    </form>
  );
};

export default Form;
