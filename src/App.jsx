import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NewsContainer from "./components/NewsContainer";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div
      className={`text-${darkMode ? "light" : "black"}`}
      style={{ backgroundColor: darkMode ? "#212121" : "lightgrey" }}
    >
      <QueryClientProvider client={client}>
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route
              path="/"
              element={<NewsContainer darkMode={darkMode} category="general" />}
            />
            <Route
              path="/sports"
              element={<NewsContainer category="sports" darkMode={darkMode} />}
            />
            <Route
              path="/business"
              element={
                <NewsContainer category="business" darkMode={darkMode} />
              }
            />
            <Route
              path="/technical"
              element={
                <NewsContainer category="technology" darkMode={darkMode} />
              }
            />
            <Route
              path="/health"
              element={<NewsContainer category="health" darkMode={darkMode} />}
            />
            <Route
              path="/entertainment"
              element={
                <NewsContainer category="entertainment" darkMode={darkMode} />
              }
            />
            <Route
              path="/science"
              element={<NewsContainer category="science" darkMode={darkMode} />}
            />
          </Routes>
          <Footer darkMode={darkMode} />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
