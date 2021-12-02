import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import defaultImg from "../assets/defaultImg.jpg";
import moment from "moment";

const Article = ({ news }) => {
  const { id } = useParams();

  const [singleNews, setSingleNews] = useState({});

  const newNews = news.find((n) => n.id == parseInt(id));

  useEffect(() => {
    setSingleNews({
      ...newNews,
    });
  }, []);

  const { urlToImage, description, title, source, publishedAt, url } =
    singleNews;

  const publisher = source && source.name;
  const date = moment(publishedAt).format("MMMM Do YYYY, h:mm a");
  return (
    <div className="s-container">
      <Link to="/">
        <h1 className="logo s-logo">Home</h1>
      </Link>
      <div className="single-news">
        <div className="s-img-title">
          <img
            className="s-img"
            src={urlToImage || defaultImg}
            alt={description}
          />
          <h1>{title}</h1>
        </div>
        <div className="desc-date">
          <h2>{publisher || "publisher: "}</h2>
          <h2>{description}</h2>
          <h4>{date}</h4>
        </div>

        <div className="s-links">
          <a
            className="original-link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {`${publisher} page`}
          </a>

          <Link className="home-link" to="/">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;
