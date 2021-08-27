import './Cards2.css'
import angular from '../../static/skills/angular.png'
import firebase from '../../static/skills/firebase.png'
import js from '../../static/skills/js.png'
import bs from '../../static/skills/bs.png'
import jquery from '../../static/skills/jquery.png'
import mongo from '../../static/skills/mongo.png'
import react from '../../static/skills/react.png'
import node from '../../static/skills/node.png'
import django from '../../static/skills/django.png'
import solidity from '../../static/skills/solidity.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
                <img className="icon" src={bs} height="50px" alt="bootstrap" />
              </span>
            </span>
          ) : null}
          {props.jquery ? (
            <span className="profile-card-social__item link">
              <span className="icon-font">
                <img className="icon" src={jquery} height="50px" alt="jquery" />
              </span>
            </span>
          ) : null}
          {props.mongo ? (
            <span className="profile-card-social__item github">
              <span className="icon-font">
                <img className="icon" src={mongo} height="50px" alt="mongo" />
              </span>
            </span>
          ) : null}
          {props.react ? (
            <span className="profile-card-social__item instagram">
              <span className="icon-font">
                <img className="icon" src={react} height="50px" alt="reactJS" />
              </span>
            </span>
          ) : null}
          {props.node ? (
            <span className="profile-card-social__item twitter">
              <span className="icon-font">
                <img className="icon" src={node} height="50px" alt="nodeJS" />
              </span>
            </span>
          ) : null}
          {props.django ? (
            <span className="profile-card-social__item facebook">
              <span className="icon-font">
                <img className="icon" src={django} height="50px" alt="Django" />
              </span>
            </span>
          ) : null}
          {props.solidity ? (
            <span className="profile-card-social__item github">
              <span className="icon-font">
                <img
                  className="icon"
                  src={solidity}
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
                  src={angular}
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
                  src={firebase}
                  height="50px"
                  alt="Firebase"
                />
              </span>
            </span>
          ) : null}
          {props.js ? (
            <span className="profile-card-social__item instagram">
              <span className="icon-font">
                <img className="icon" src={js} height="50px" alt="javascript" />
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
