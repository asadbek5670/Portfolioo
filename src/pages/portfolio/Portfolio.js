
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import html from "../../images/html.png"
import css from "../../images/css.png"
import js from "../../images/js.jpg"
import react from "../../images/react.png"
import node from "../../images/node.png"
import vercel from "../../images/vercel.jpg"
import github from "../../images/github.jpg"
import taili from "../../images/taili.jpg"

const Portfolio = () => {
  const location = useLocation();




  return (
    <>
      <section className="portfolio container">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={react} alt="" />
        <img src={node} alt="" />
        <img src={taili} alt="" />
        <img src={github} alt="" />
        <img src={vercel} alt="" />

      </section>
    </>
  );
};

export default Portfolio;
