import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Header.css'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="/" className="nav__logo">
            Portfo<span>lio.</span>
          </a>
        </div>

        <div className={'nav__menu' + (navOpen ? ' show' : '')}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#certificates" className="nav__link">
                Certificates
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon icon={faBars} size="xs" />
        </div>
      </nav>
    </header>
  )
}

export default Header
