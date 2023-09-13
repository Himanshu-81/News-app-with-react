import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer({ darkMode }) {
  const linksColor = `${darkMode ? "light" : "dark"}`;

  return (
    <footer
      className={"text-center mt-5"}
      style={{ backgroundColor: darkMode ? "black" : "grey" }}
    >
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className={`btn btn-link btn-floating btn-lg text-${linksColor} m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className={`btn btn-link btn-floating btn-lg text-${linksColor} m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className={`btn btn-link btn-floating btn-lg text-${linksColor} m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            className={`btn btn-link btn-floating btn-lg text-${linksColor} m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className={`btn btn-link btn-floating btn-lg text-${linksColor} m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className={`btn btn-link btn-floating btn-lg text-${linksColor} m-1`}
            href="#!"
            role="button"
            data-mdb-ripple-color="light"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div
        className={`text-center text-${linksColor} p-3`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright: NewsGeek
      </div>
    </footer>
  );
}
