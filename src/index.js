import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Page";
import { GlobalStyle } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <Home />
  </>
);
