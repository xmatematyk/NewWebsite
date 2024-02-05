"use client"
import React, { useEffect, useState } from "react";
import "./loader.css"

const Loader = () => {
  useEffect(() => {
    import("./main").then((module) => module.default());
  }, []);

  return (
    <div id="preloader" className="line-container">
      <div className="line">
        <div className="lineBefore"></div>
        <div className="lineAfter"></div>
      </div>
    </div>
  );
};

export default Loader;