import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const About: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }
  }, [])

  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
            </h1>
            <p>
                I'm a very ambitious Front-End Developer looking for a role in established IT Company with the opportunity to work with the latest technologies on challenging and diverse projects.
            </p>
            <p>
                I'm quietly confident, naturally curious, disciplined, consistent and perpetually working on improving my skills, one problem at a time or five (I solve them all) !!
            </p>
            <p>
                I Love Teamwork and Communicating, as a Self Taught I realized the importance of working together to solve problems.
            </p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faNodeJs} color="#303030" />
                </div>
            </div>
        </div>
    </div>
    <Loader type='pacman' active />
    </>
  );
};

export default About;