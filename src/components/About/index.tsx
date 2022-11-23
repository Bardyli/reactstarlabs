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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nam! Ut, fugiat tenetur? Hic ea pariatur esse deleniti magni iure!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus pariatur rem cupiditate quo porro optio fugiat reiciendis dolorum esse nihil.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores aliquam nesciunt laboriosam labore hic odio nisi recusandae non expedita.
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