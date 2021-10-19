import './About.css'

const About = () => {
  return (
    <section className="about section " id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img
            src="https://ik.imagekit.io/kushal/Portfolio/IMG_20210922_134602_d1xffURBW.jpg?updatedAt=1634632424392"
            alt="Kushal Khare"
          />
        </div>

        <div>
          <h2 className="about__subtitle">I am Kushal Khare</h2>
          <p className="about__text">
            A motivated programmer with background in Web and Blockchain
            Technologies and an enthusiasm for Open Source software. Expertise
            includes JavaScript and Python development tools. Team-oriented and
            hardworking with good verbal and written communication skills
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
