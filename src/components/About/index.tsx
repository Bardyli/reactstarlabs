import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

import "./index.scss";

const About: React.FC = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Front-end developer with over 2 years of professional experience in ReactJS,
            NextJS, NodeJS, Git, MongoDB, CSS, and HTML. Proven ability to
            optimize code, improve page speed, and implement SEO best practices.
            Ambitious and self-motivated, with a passion for learning and
            solving challenging problems.
          </p>
          <p>
            Successfully built and delivered user-friendly and fast-performing
            websites for private clients.
          </p>
          <p>
            Eager to take on new challenges and learn new technologies, with a
            long-term goal of becoming a lead developer.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#303030" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  );
};

export default About;
