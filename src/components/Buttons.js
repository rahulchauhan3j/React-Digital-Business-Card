import email from "../images/emailIcon.png";
import linkedIn from "../images/linkedinIcon.png";

function Buttons() {
  return (
    <div className="ButtonDiv">
      <button type="button" className="EmailButton">
        <img src={email}></img>
        <a className="EmailText">Email</a>
      </button>
      <button type="button" className="LinkedInButton">
        <img src={linkedIn} className="LinkedInButtonImage"></img>
        <a className="LinkedInText">LinkedIn</a>
      </button>
    </div>
  );
}

export default Buttons;
