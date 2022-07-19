import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faNodeJs,} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                As a Front-End Web Developer, the Technologies I use are HTML, CSS, Javascript, React.js, with also skills of Back-End like Express.js and Node.js. 
                </p>
                <p>
                I love coding and learning design patterns through working with different frameworks. Coding for a while has taught me that it does not matter what the technology I will work with is because I will simply pick it up and learn it.
                </p>
                <p>
                You can visit my <a href='https://www.linkedin.com/in/ervin-behxheti-9aa851244/' target='_blank' rel="noreferrer" >LinkedIn</a> Profile for extra information, and also you can checkout my cv <a href='https://resume.ervinbehxheti.me' target='_blank' rel="noreferrer">here</a>.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color='#215732' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About