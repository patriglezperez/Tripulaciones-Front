import React from "react";
import Login from "./components/Login";
import "./styles.scss";

export default function app() {
  return (
    <main className="main-container">
      <div className="main-container__header"></div>
      <div className="main-container__content">
        <Login />
      </div>
      <div className="main-container__footer"></div>
    </main>
  );
}
