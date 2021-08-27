import Cards from '../../Components/Cards/Cards'

import './Certificates.css'
import cybus from '../../static/Certificates/Cybus.jpg'
import dps from '../../static/Certificates/DPS-ITFest.jpg'
import excellence from '../../static/Certificates/Excellence.jpg'
import hackathon from '../../static/Certificates/Hackathon2K21.png'
import techvista from '../../static/Certificates/TechVista.jpg'
import wro from '../../static/Certificates/WRO-Nationals.jpg'
import jmun from '../../static/Certificates/JMUN.jpg'

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="card-list">
        <Cards
          description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
          title="Hackathon 2K21"
          img={cybus}
        />
        <Cards
          description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
          title="Hackathon 2K21"
          img={dps}
        />
        <Cards
          description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
          title="Hackathon 2K21"
          img={excellence}
        />
        <Cards
          description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
          title="Hackathon 2K21"
          img={jmun}
        />
        <Cards
          description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
          title="Hackathon 2K21"
          img={techvista}
        />
        <Cards
          description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
          title="Hackathon 2K21"
          img={wro}
        />
        <Cards
          description="Certificate of Appreciation for being amongst top 10 teams among 600 participating teams in Full stack Theme at Hackathon 2K21 conducted by IIIT Pune"
          title="Hackathon 2K21"
          img={hackathon}
        />
      </div>
    </section>
  )
}

export default Certificates
