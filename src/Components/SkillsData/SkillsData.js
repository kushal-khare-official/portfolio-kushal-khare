import './SkillsData.css'

const SkillsData = (props) => {
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
      <div className="skills__bar" style={{ width: props.percentage }}></div>
      <div>
        <span className="skills__percentage">{props.percentage}</span>
      </div>
    </div>
  )
}

export default SkillsData
