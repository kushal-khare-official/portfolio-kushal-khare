import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">You can also connect to me via:</p>
      <div className="footer__social">
        <a
          href="https://www.facebook.com/kushalCodes/"
          target="_blank"
          rel="noreferrer"
          className="footer__icon"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://www.instagram.com/kushalcodes/"
          target="_blank"
          rel="noreferrer"
          className="footer__icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://twitter.com/KushalCodes"
          target="_blank"
          rel="noreferrer"
          className="footer__icon"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="mailto:kushalkhare.official@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="footer__icon"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  )
}
export default Footer
