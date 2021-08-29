import { lazy, Suspense } from 'react'

import './Certificates.css'
import cybus from '../../static/Certificates/Cybus.jpg'
import dps from '../../static/Certificates/DPS-ITFest.jpg'
import excellence from '../../static/Certificates/Excellence.jpg'
import hackathon from '../../static/Certificates/Hackathon2K21.png'
import techvista from '../../static/Certificates/TechVista.jpg'
import wro from '../../static/Certificates/WRO-Nationals.jpg'
import jmun from '../../static/Certificates/JMUN.jpg'

const Cards = lazy(() => import('../../Components/Cards/Cards'))

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="card-list">
        <Suspense fallback={<div>Loading...</div>}>
          <Cards
            description="Certificate of Participation in the India Nationls of World Robotics Olympiad 2016 coducted by India STEM Foundation"
            title="World Robotics Olympiad 2016"
            img={wro}
          />
          <Cards
            description="Certificate for serving as Head of Web Design at Sixth Chapter of Jaipuria Model United Nations 2017 by Seth MR Jaipuria School, Lucknow"
            title="Jaipuria Model United Nations 2018"
            img={jmun}
          />
          <Cards
            description="Certificate of Merit for achieving 3rd place in debugging event of Cybus, a fest conducted by La Martinier Girls' College, Lucknow"
            title="Cybus"
            img={cybus}
          />
          <Cards
            description="Certificate for serving as Coordinator of Weave-a-Web, a web designing event at Techvista 2018 conducted by Seth MR Jaipuria School, Lucknow"
            title="Techvista 2018"
            img={techvista}
          />
          <Cards
            description="Certificate of Merit for achieving 1st place in web designing event of De-Crew IT Fest conducted by Delhi Public School, Lucknow"
            title="De-Crew IT Fest 2018"
            img={dps}
          />
          <Cards
            description="Certificate of Excellence for my consistent achievements in Web Designing and Development by Seth MR Jaipuria School, Lucknow"
            title="Certificate of Excellence"
            img={excellence}
          />
          <Cards
            description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
            title="Hackathon 2K21"
            img={hackathon}
          />
        </Suspense>
      </div>
    </section>
  )
}

export default Certificates
