import { useEffect } from 'react'
import Typed from 'react-typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Kute from 'kute.js'

import './Home.css'

const Home = () => {
  useEffect(() => {
    const tween = Kute.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 3000, yoyo: true, easing: 'linear' },
    )
    tween.start()
  }, [])
  return (
    <section className="home bd-grid" id="home">
      <div className="home__social">
        <a
          href="https://www.linkedin.com/in/kushalcodes/"
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/kushal-khare-official"
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <div className="home__img">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="500"
            height="500"
          >
            <path
              id="blob1"
              d="M470.012 99.6096C504.165 153.148 501.888 208.471 497.638 260.344C493.388 312.216 487.012 360.758 452.859 404.54C418.706 448.322 356.776 487.465 282.094 497.459C207.565 507.333 120.285 488.179 65.6401 444.396C10.9953 400.495 -11.0144 332.085 5.22723 276.405C21.4689 220.725 76.1136 177.895 130.758 124.356C185.403 70.818 240.048 6.57201 302.738 0.504335C365.276 -5.68231 435.859 46.0714 470.012 99.6096Z"
              fill="#4070F4"
            />
          </mask>
          <g mask="url(#mask0)">
            <rect x="0" width="700" height="500" fill="url(#pattern0)" />
          </g>
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0" transform="scale(0.0023)" />
            </pattern>
            <image
              id="image0"
              width="375"
              x="-50px"
              xlinkHref="https://ik.imagekit.io/kushal/Portfolio/portfolio_ak6NGDReI2.jpg?updatedAt=1630247518740"
            />
          </defs>
          <g style={{ visibility: 'hidden' }}>
            <path
              id="blob2"
              d="M396.98 72.4954C452.362 118.112 499.376 193.848 499.991 270.607C500.73 347.22 455.316 424.856 399.934 457.753C344.551 490.65 279.2 478.807 208.556 485.24C137.913 491.673 61.9774 516.09 27.8864 483.193C-6.08155 450.296 1.79511 360.086 1.30282 269.145C0.933601 178.35 -7.92758 87.1162 26.1634 41.4994C60.2544 -4.11746 137.051 -3.82504 207.449 3.92398C277.846 11.673 341.597 27.0248 396.98 72.4954Z"
              fill="white"
            />
          </g>
        </svg>
      </div>

      <div className="home__data">
        <h1 className="home__title">
          Hi,
          <br />I am <span className="home__title-color">Kushal</span>
          ,<br />I do{' '}
          <span className="home__title-color">
            <Typed
              strings={['Web', 'Android', 'Blockchain']}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </span>
          <br /> Development
        </h1>

        <a
          href="https://ik.imagekit.io/kushal/Portfolio/Resume-Kushal_Khare_ltZg_jbKI1.pdf?updatedAt=1630247247896"
          className="button"
          download="Resume-Kushal Khare"
          target="_blank"
          rel="noreferrer"
        >
          Resume
          <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '1rem' }} />
        </a>
      </div>
    </section>
  )
}

export default Home
