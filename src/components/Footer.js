import facebookIcon from "../images/facebookIcon.png";
import githubIcon from "../images/gitHubIcon.png";
import instagramIcon from "../images/instagramIcon.png";
import twitterIcon from "../images/twitterIcon.png";

function Footer() {
  return (
    <footer>
      <img src={twitterIcon}></img>
      <img src={facebookIcon}></img>
      <img src={instagramIcon}></img>
      <img src={githubIcon}></img>
    </footer>
  );
}

export default Footer;
