import twitter from "../assets/TwitterIcon.svg";
import facebook from "../assets/FacebookIcon.svg";
import instagram from "../assets/InstagramIcon.svg";
import github from "../assets/GitHubIcon.svg";

export default function SocialCard() {
  return(
    <div className="footer-card">
        <div className="footer-icons">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={github} alt="" />
        </div>
    </div>
  )
}