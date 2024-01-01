import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import SpaceQuizApp from "./Components/Quizz.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div class="main"></div>
    <h1 className="TheTitle">The Best "SPACE" Quizz ever :D</h1>
    <SpaceQuizApp />
  </React.StrictMode>
);
