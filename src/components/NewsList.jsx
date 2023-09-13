import React from "react";

export default function NewsList({
  darkMode,
  title,
  description,
  imgUrl,
  url,
  author,
  date,
}) {
  return (
    <div
      className={`card bg-${darkMode ? "black" : "light"} text-${
        darkMode ? "light" : "dark"
      }`}
    >
      <img
        className="card-img-top"
        src={
          !imgUrl
            ? "https://c.ndtvimg.com/2023-08/4i3j55io_mob-robbery-at-topanga-nordstrom-sparks-outrage_625x300_15_August_23.jpg"
            : imgUrl
        }
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small style={{ color: darkMode ? "white" : "black" }}>
            By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
          </small>
        </p>
        <a href={url} className="btn btn-sm btn-dark">
          Read More &raquo;
        </a>
      </div>
    </div>
  );
}
