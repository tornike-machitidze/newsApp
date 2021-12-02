import React from "react";

const Navbar = ({ btnArr, setClicked, setText }) => {
  const handleNews = (e) => {
    e.preventDefault();
    setClicked(e.target.value);
    setText("");
  };

  return (
    <nav>
      <div className="source">
        <h2>NEWS</h2>
      </div>
      <ul className="sources-menu">
        <li>
          <button
            className="btn source-btn all"
            onClick={handleNews}
            value="ALL"
          >
            ALL
          </button>
        </li>
        {btnArr.map((name) => {
          return (
            <li key={Math.random()}>
              <button
                onClick={handleNews}
                value={name}
                className="btn source-btn"
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
