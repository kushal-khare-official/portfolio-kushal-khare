import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import './SkillsData.css'

const SkillsData = (props) => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    let i = 1
    const temp = []
    while (i <= props.score) {
      temp.push(<FontAwesomeIcon key={i++} icon={faStar} color="#FFD700" />)
    }
    setStars(temp)
  }, [props.score])

  return (
    <div className="skills__data">
      <div className="skills__names">
        <img
          className="skills__icon"
          src={props.img}
          alt={props.name}
          width="32px"
        />
        <span className="skills__name">{props.name}</span>
      </div>
      <div className="skills__bar" style={{ width: '100%' }}></div>
      <div>
        <span className="skills__percentage">
          {stars}
          {props.score % 1 ? (
            <FontAwesomeIcon icon={faStarHalf} color="#FFD700" />
          ) : null}
        </span>
      </div>
    </div>
  )
}

export default SkillsData
