import { NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faSuitcase, faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                to="/">
                <FontAwesomeIcon 
                    icon={faHome} 
                    color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon 
                    icon={faSuitcase} 
                    color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="about-link" to="/about">
                <FontAwesomeIcon 
                    icon={faUser} 
                    color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="contact-link" 
                to="/contact">
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    color='#4d4d4e' />
            </NavLink>
            <a
                exact="true" 
                activeclassname="active" 
                className="resume-link" 
                href='https://resume.ervinbehxheti.me'
                target='_blank'
                rel="noreferrer">
                <FontAwesomeIcon 
                    icon={faAddressCard} 
                    color='#4d4d4e' />
            </a>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.linkedin.com/in/ervin-behxheti-9aa851244/'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://github.com/Bardyli'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.instagram.com/ervinbehxheti'
                >
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.facebook.com/ervin.behxhetii/'
                >
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
