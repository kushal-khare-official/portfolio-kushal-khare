import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './ScrollUp.css'

const ScrollUp = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollTop(window.scrollY))
    return () => {
      window.removeEventListener('scroll', () => setScrollTop(window.scrollY))
    }
  }, [])

  return (
    <div className={'scroll-up-btn' + (scrollTop > 500 ? ' show' : '')}>
      <a href="#home">
        <FontAwesomeIcon icon={faAngleUp} />
      </a>
    </div>
  )
}

export default ScrollUp
