import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Slider from "./Slider.js";
import reportWebVitals from "./reportWebVitals";
import ScrollMagicPractice from "./ScrollMagicPractice.js";
import Header from "./Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <ScrollMagicPractice />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
