import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar: React.FC = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo'></img>
        <img className='sub-logo' src={LogoSubtitle} alt='ervin'></img>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink to='/' onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink to='/about' className='about-link' onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink to='/contact' className='contact-link' onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        <NavLink to='/portfolio' className='portfolio-link' onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size='3x'
          className='close-icon'
        />
      </nav>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ervin-behxheti-9aa851244/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/Bardyli'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='hamburger-icon'
      />
    </div>
  )
}

export default Sidebar