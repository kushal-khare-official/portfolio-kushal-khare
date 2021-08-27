import SkillsData from '../../Components/SkillsData/SkillsData'

import './Skills.css'
import cpp from '../../static/skills/c++.png'
import c from '../../static/skills/c.png'
import git from '../../static/skills/git.png'
import firebase from '../../static/skills/firebase.png'
import js from '../../static/skills/js.png'
import jquery from '../../static/skills/jquery.png'
import mongo from '../../static/skills/mongo.png'
import postgres from '../../static/skills/postgresql.png'
import express from '../../static/skills/expressjs.png'
import react from '../../static/skills/react.png'
import node from '../../static/skills/node.png'
import django from '../../static/skills/django.png'
import solidity from '../../static/skills/solidity.svg'
import python from '../../static/skills/python.png'
import java from '../../static/skills/java.png'
import next from '../../static/skills/nextjs.svg'
import docker from '../../static/skills/docker.png'
import ethereum from '../../static/skills/ethereum.svg'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Languages</h2>
          <p className="skills__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            optio id vero amet, alias architecto consectetur error eum eaque
            sit.
          </p>
          <SkillsData name="Java" img={java} percentage="95%" />
          <SkillsData name="JavaScript" img={js} percentage="95%" />
          <SkillsData name="Python" img={python} percentage="95%" />
          <SkillsData name="Solidity" img={solidity} percentage="95%" />
          <SkillsData name="C++" img={cpp} percentage="95%" />
          <SkillsData name="C" img={c} percentage="95%" />
        </div>

        <div>
          <h2 className="skills__subtitle">Primary Tech Stack</h2>
          <p className="skills__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            optio id vero amet, alias architecto consectetur error eum eaque
            sit.
          </p>
          <SkillsData name="MongoDB" img={mongo} percentage="95%" />
          <SkillsData name="ExpressJS" img={express} percentage="95%" />
          <SkillsData name="ReactJS" img={react} percentage="95%" />
          <SkillsData name="NextJS" img={next} percentage="95%" />
          <SkillsData name="NodeJS" img={node} percentage="95%" />
          <SkillsData name="Django" img={django} percentage="95%" />
        </div>

        <div>
          <h2 className="skills__subtitle">Tools and Frameworks</h2>
          <p className="skills__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            optio id vero amet, alias architecto consectetur error eum eaque
            sit.
          </p>
          <SkillsData name="PostgreSQL" img={postgres} percentage="95%" />
          <SkillsData name="Firebase" img={firebase} percentage="95%" />
          <SkillsData name="JQuery" img={jquery} percentage="95%" />
          <SkillsData name="Git and Github" img={git} percentage="95%" />
          <SkillsData name="Docker" img={docker} percentage="95%" />
          <SkillsData name="Ethereum" img={ethereum} percentage="95%" />
        </div>
      </div>
    </section>
  )
}

export default Skills
