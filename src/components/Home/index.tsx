import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home: React.FC = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["", "E", "r", "v", "i", "n"];
  const jobArray = [
    "a",
    "",
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>I build beautiful and user-friendly websites.</h2>
          <Link to="/contact" className="flat-button">
            Contact me
          </Link>
          <Link to="/portfolio" className="flat-button">
            My Projects
          </Link>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  );
};

export default Home;
