import { lazy, Suspense } from 'react'

import './Skills.css'

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
            <SkillsData
              name="Java"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/java_5bxLDyeEY.png?updatedAt=1630247248026"
              score={4}
            />
            <SkillsData
              name="JavaScript"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/js_oZwOHVCZq.png?updatedAt=1630247248010"
              score={4}
            />
            <SkillsData
              name="Python"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/python_nbkYOID51.png?updatedAt=1630247247970"
              score={3.5}
            />
            <SkillsData
              name="Solidity"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/solidity_PmEkw8U-O.svg?updatedAt=1630247247985"
              score={4}
            />
            <SkillsData
              name="C++"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/c___pwQAQFS1l.png?updatedAt=1630247247991"
              score={4}
            />
            <SkillsData
              name="C"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/c_eErCidCNwV.png?updatedAt=1630247247946"
              score={4}
            />
          </div>

          <div>
            <h2 className="skills__subtitle">Primary Tech Stack</h2>
            <p className="skills__text">
              Libraries and Frameworks that I prefer and use on a daily basis
            </p>
            <SkillsData
              name="MongoDB"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/mongo_xioxr84PBz.png?updatedAt=1630247248001"
              score={4}
            />
            <SkillsData
              name="ExpressJS"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/expressjs_KB1AmgF7gO.png?updatedAt=1630247247983"
              score={4.5}
            />
            <SkillsData
              name="ReactJS"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/react_1jHxNn6m-a.png?updatedAt=1630247248053"
              score={4.5}
            />
            <SkillsData
              name="NextJS"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/nextjs_M2d0dj4B3.svg?updatedAt=1630247248050"
              score={4.5}
            />
            <SkillsData
              name="NodeJS"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/node_KTZVQTx_Pu.png?updatedAt=1630247247969"
              score={4.5}
            />
            <SkillsData
              name="Ethereum"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/ethereum_U7pSogacm.svg?updatedAt=1630247247961"
              score={4.5}
            />
          </div>

          <div>
            <h2 className="skills__subtitle">Tools and Frameworks</h2>
            <p className="skills__text">
              Tools that I know and use apart from my primary stack
            </p>
            <SkillsData
              name="PostgreSQL"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/postgresql_s3JCaylzk.png?updatedAt=1630247247972"
              score={3.5}
            />
            <SkillsData
              name="Firebase"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/firebase_xosAW6H4q.png?updatedAt=1630247247956"
              score={4.5}
            />
            <SkillsData
              name="JQuery"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/jquery_TanoqoGdyB.png?updatedAt=1630247247959"
              score={3.5}
            />
            <SkillsData
              name="Django"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/django_LVH6inw6NN.png?updatedAt=1630247247966"
              score={4}
            />
            <SkillsData
              name="Git and Github"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/git_fdnMhxZlSA.png?updatedAt=1630247248024"
              score={4.5}
            />
            <SkillsData
              name="Docker"
              img="https://ik.imagekit.io/kushal/Portfolio/skills/docker_U5w9TryIjn.png?updatedAt=1630247248020"
              score={3}
            />
          </div>
        </Suspense>
      </div>
    </section>
  )
}

export default Skills
