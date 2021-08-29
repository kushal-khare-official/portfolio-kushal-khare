import { lazy, Suspense } from 'react'
import './Projects.css'
import jaipuria from '../../static/img/jaipuria.png'
import techvista from '../../static/img/techvista.png'
import technovation from '../../static/img/technovation.png'

const Cards2 = lazy(() => import('../../Components/Cards2/Cards2'))

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects__container">
        <Suspense fallback={<div>Loading...</div>}>
          <Cards2
            title="Jaipuria Model Untied Nations"
            description="A Website utilising JQuery and Bootstrap to give information about various events and enables users to register for the committee of their choice at Jaipuria Model United Nations 2017"
            date="May, 2018"
            link="https://the-jmun.web.app/"
            logo={jaipuria}
            bg="white"
            bs
            jquery
            firebase
          />
          <Cards2
            title="TechVista"
            description="A website to conduct Seth MR Jaipuria School's TechFest, TechVista. It gives information about the various events in the fest and conducts an online quiz for prelims of the Fest."
            date="August, 2018"
            link="https://tech--vista.web.app/"
            logo={techvista}
            bg="white"
            angular
            firebase
          />
          <Cards2
            title="Technovation"
            description="A Website based on MERN Stack to conduct IERT's Annual TechFest, Technovation. It gives information about various events and enables users to register in events of their choice."
            date="August, 2020"
            link="https://tech-novation.web.app/"
            logo={technovation}
            bg="black"
            mongo
            react
            node
          />
        </Suspense>
      </div>
    </section>
  )
}

export default Projects
