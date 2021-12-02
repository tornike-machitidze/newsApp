import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import moment from "moment";

import defaultImg from "../assets/defaultImg.jpg";

const NewsCart = ({ news }) => {
  const { id, urlToImage, description, title, source, publishedAt, url } = news;
  const publisher = source && source.name;
  const date = moment(publishedAt).format("MMMM Do YYYY, h:mm a");
  return (
    <li key={id} className="cart">
      <div className="img-container">
        <img
          className="cart-img"
          src={urlToImage || defaultImg}
          alt={description || "img"}
        />
      </div>
      <div className="cart-text">
        <h2>{title || "title"}</h2>
        <p>{publisher || "publisher: "}</p>
        <p>{description || "description"}</p>
        <p>{date || "2021"}</p>
        <Link className="read-more" to={`/article/${id}`}>
          Read More
        </Link>
      </div>
    </li>
  );
};

// NewsCart.propTypes = {
//   urlToImage: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   source: PropTypes.object.isRequired,
// };

export default NewsCart;
