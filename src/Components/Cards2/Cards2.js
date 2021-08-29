import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './Cards2.css'

const Cards2 = (props) => {
  return (
    <div className="profile-card js-profile-card">
      <div className="profile-card__img" style={{ backgroundColor: props.bg }}>
        <img src={props.logo} alt="profile card" />
      </div>

      <div className="profile-card__cnt js-profile-cnt">
        <h1 className="profile-card__name">{props.title}</h1>
        <p className="profile-card__txt">{props.description}</p>
        <p className="profile-card-loc">{props.date}</p>
        <div className="profile-card-social">
          {props.bs ? (
            <span className="profile-card-social__item behance">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/bs_EfATLbmnpQ.png?updatedAt=1630247247952"
                  height="50px"
                  alt="bootstrap"
                />
              </span>
            </span>
          ) : null}
          {props.jquery ? (
            <span className="profile-card-social__item link">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/jquery_TanoqoGdyB.png?updatedAt=1630247247959"
                  height="50px"
                  alt="jquery"
                />
              </span>
            </span>
          ) : null}
          {props.mongo ? (
            <span className="profile-card-social__item github">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/mongo_xioxr84PBz.png?updatedAt=1630247248001"
                  height="50px"
                  alt="mongo"
                />
              </span>
            </span>
          ) : null}
          {props.express ? (
            <span className="profile-card-social__item link">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/expressjs_KB1AmgF7gO.png?updatedAt=1630247247983"
                  height="50px"
                  alt="expressJS"
                />
              </span>
            </span>
          ) : null}
          {props.react ? (
            <span className="profile-card-social__item instagram">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/react_1jHxNn6m-a.png?updatedAt=1630247248053"
                  height="50px"
                  alt="reactJS"
                />
              </span>
            </span>
          ) : null}
          {props.node ? (
            <span className="profile-card-social__item twitter">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/node_KTZVQTx_Pu.png?updatedAt=1630247247969"
                  height="50px"
                  alt="nodeJS"
                />
              </span>
            </span>
          ) : null}
          {props.solidity ? (
            <span className="profile-card-social__item github">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/ethereum_U7pSogacm.svg?updatedAt=1630247247961"
                  height="50px"
                  alt="Solidity"
                />
              </span>
            </span>
          ) : null}
          {props.angular ? (
            <span className="profile-card-social__item link">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/angular_xHqdFrKVT.png?updatedAt=1630247247994"
                  height="50px"
                  alt="Angular"
                />
              </span>
            </span>
          ) : null}

          {props.firebase ? (
            <span className="profile-card-social__item codepen">
              <span className="icon-font">
                <img
                  className="icon"
                  src="https://ik.imagekit.io/kushal/Portfolio/skills/firebase_xosAW6H4q.png?updatedAt=1630247247956"
                  height="50px"
                  alt="Firebase"
                />
              </span>
            </span>
          ) : null}
        </div>

        <div className="profile-card-ctr">
          <button className="profile-card__button button--secondary">
            Source Code
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ marginLeft: '8px', fontSize: '18px' }}
            />
          </button>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="profile-card__button button--blue"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards2
