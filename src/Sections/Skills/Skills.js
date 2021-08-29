import { lazy, Suspense } from 'react'

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

const SkillsData = lazy(() => import('../../Components/SkillsData/SkillsData'))

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <h2 className="skills__subtitle">Languages</h2>
            <p className="skills__text">
              Languages that I have picked up over the years
            </p>
            <SkillsData name="Java" img={java} score={4} />
            <SkillsData name="JavaScript" img={js} score={4} />
            <SkillsData name="Python" img={python} score={3.5} />
            <SkillsData name="Solidity" img={solidity} score={4} />
            <SkillsData name="C++" img={cpp} score={4} />
            <SkillsData name="C" img={c} score={4} />
          </div>

          <div>
            <h2 className="skills__subtitle">Primary Tech Stack</h2>
            <p className="skills__text">
              Libraries and Frameworks that I prefer and use on a daily basis
            </p>
            <SkillsData name="MongoDB" img={mongo} score={4} />
            <SkillsData name="ExpressJS" img={express} score={4.5} />
            <SkillsData name="ReactJS" img={react} score={4.5} />
            <SkillsData name="NextJS" img={next} score={4.5} />
            <SkillsData name="NodeJS" img={node} score={4.5} />
            <SkillsData name="Ethereum" img={ethereum} score={4.5} />
          </div>

          <div>
            <h2 className="skills__subtitle">Tools and Frameworks</h2>
            <p className="skills__text">
              Tools that I know and use apart from my primary stack
            </p>
            <SkillsData name="PostgreSQL" img={postgres} score={3.5} />
            <SkillsData name="Firebase" img={firebase} score={4.5} />
            <SkillsData name="JQuery" img={jquery} score={3.5} />
            <SkillsData name="Django" img={django} score={4} />
            <SkillsData name="Git and Github" img={git} score={4.5} />
            <SkillsData name="Docker" img={docker} score={3} />
          </div>
        </Suspense>
      </div>
    </section>
  )
}

export default Skills
