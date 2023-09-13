import React, { useState } from "react";
import NewsList from "./NewsList";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Button from "./Button";
import Loading from "../images/loading-fast.gif";
import Error from "../images/error.gif";

export default function NewsContainer({ category, darkMode }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, setTotalResults] = useState(null);

  const apiKey = "aaf74429314947e9b5b2fbd450a62ffe";
  const pageSize = 6;

  const newsUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${pageNumber}&pageSize=${pageSize}`;
  const {
    data: newsData,
    isLoading,
    isError,
  } = useQuery(["news", pageNumber, category], async () => {
    const response = await axios.get(newsUrl);
    setTotalResults(response.data.totalResults);
    return response.data.articles;
  });

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  if (isLoading) {
    return (
      <div className="text-center">
        <img src={Loading} />;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center">
        <img src={Error} alt="" />
        <h3 style={{ color: "red", fontFamily: "revert-layer" }}>
          &#9888; Error! something went wrong
        </h3>
      </div>
    );
  }

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <h1 className="text-center my-3" style={{ fontFamily: "-moz-initial" }}>
        Top {category} Headlines Of the Day
      </h1>
      <div className="row my-3">
        {newsData.map((news) => {
          return (
            <div className="col-md-4 my-3" key={news.url}>
              <NewsList
                darkMode={darkMode}
                title={news.title}
                description={news.description}
                imgUrl={news.urlToImage}
                url={news.url}
                author={news.author}
                date={news.publishedAt}
              />
            </div>
          );
        })}
      </div>
      <Button
        darkMode={darkMode}
        nextPage={nextPage}
        prevPage={prevPage}
        pageNumber={pageNumber}
        totalResults={totalResults}
        pageSize={pageSize}
      />
    </div>
  );
}
