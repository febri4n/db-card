import mail from "../assets/Mail.svg";
import linkedin from "../assets/Linkedin.svg";

export default function InfoCard() {
  return(
    <div className="info-card ">
        <div className="profile">
          <h3>Laura Smith</h3>
          <span>Frontend Developer</span>
          <p>laurasmith.website</p>
        </div>

        <div className="buttons">
          <button className="btn btn-email">
            <img src={mail} alt="email button" />
            <span>Email</span>
          </button>
          <button className="btn btn-linkedin">
            <img src={linkedin} alt="linkedin button" />
            <span>LinkedIn</span>
          </button>
        </div>

        <div className="content-card">
          <span>About</span>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <span>Interests</span>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
  )
}