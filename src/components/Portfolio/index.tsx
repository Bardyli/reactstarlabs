import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from "../../data/portfolio.json";

interface PortfolioData {
  portfolio: {
    cover: string;
    title: string;
    description: string;
    url: string;
    github: string;
  }[];
}

const Portfolio: React.FC = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  console.log(portfolioData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const renderPortfolio = (portfolioData: PortfolioData) => {
    return (
      <div className="images-container">
        {portfolioData.portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
                <button
                  className="btn"
                  onClick={() => window.open(port.github)}
                >
                  Github
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
          <p>
            I have uploaded a few demo projects to showcase my skills in Web
            Development. These projects are not production-ready, but they
            demonstrate my ability to build user-friendly and fast-performing
            web applications.
          </p>
        </h1>
        <div>{renderPortfolio(portfolioData)}</div>
      </div>
      <Loader type="pacman" active />
    </>
  );
};

export default Portfolio;
