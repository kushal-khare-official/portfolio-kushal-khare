import { lazy, Suspense } from 'react'

import './Certificates.css'

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
            img="https://ik.imagekit.io/kushal/Portfolio/Certificates/WRO-Nationals_L2yfuwUEE.jpg?updatedAt=1630247248105"
          />
          <Cards
            description="Certificate for serving as Head of Web Design at Sixth Chapter of Jaipuria Model United Nations 2017 by Seth MR Jaipuria School, Lucknow"
            title="Jaipuria Model United Nations 2018"
            img="https://ik.imagekit.io/kushal/Portfolio/Certificates/JMUN_CQkicabN4U.jpg?updatedAt=1630247248117"
          />
          <Cards
            description="Certificate of Merit for achieving 3rd place in debugging event of Cybus, a fest conducted by La Martinier Girls' College, Lucknow"
            title="Cybus"
            img="https://ik.imagekit.io/kushal/Portfolio/Certificates/Cybus_QRJXd3mCiP.jpg?updatedAt=1630247248101"
          />
          <Cards
            description="Certificate for serving as Coordinator of Weave-a-Web, a web designing event at Techvista 2018 conducted by Seth MR Jaipuria School, Lucknow"
            title="Techvista 2018"
            img="https://ik.imagekit.io/kushal/Portfolio/Certificates/TechVista_2TT1dNX3J.jpg?updatedAt=1630247248021"
          />
          <Cards
            description="Certificate of Merit for achieving 1st place in web designing event of De-Crew IT Fest conducted by Delhi Public School, Lucknow"
            title="De-Crew IT Fest 2018"
            img="https://ik.imagekit.io/kushal/Portfolio/Certificates/DPS-ITFest_9FjVKS41V.jpg?updatedAt=1630247248036"
          />
          <Cards
            description="Certificate of Excellence for my consistent achievements in Web Designing and Development by Seth MR Jaipuria School, Lucknow"
            title="Certificate of Excellence"
            img="https://ik.imagekit.io/kushal/Portfolio/Certificates/Excellence_wlODd4ry4.jpg?updatedAt=1630247248056"
          />
          <Cards
            description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
            title="Hackathon 2K21"
            img="https://ik.imagekit.io/kushal/Portfolio/Certificates/Hackathon2K21_-Ux6pUXNQX_.png?updatedAt=1630247247987"
          />
        </Suspense>
      </div>
    </section>
  )
}

export default Certificates
