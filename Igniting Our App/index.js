import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const introduction = React.createElement(
  "p",
  { className: "blue" },
  "Here i am once again !",
);
const parentDiv = React.createElement(
  "div",
  { className: "parent bg-chocolate" },
  introduction,
);

root.render(parentDiv);
