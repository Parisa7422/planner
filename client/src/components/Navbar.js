import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/NavigationBar";
import { Link } from "react-router-dom";
import note from "../assets/images/Note-icon.svg";
import calender from "../assets/images/calendar-icon.svg";
import about from "../assets/images/Note-icon.svg";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="logo-center">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="link-items">
        <Link className="link-item" to="/notes">
          <img src={note} alt="icon" />
        </Link>
        <Link className="link-item" to="/contact-us">
          <img src={calender} alt="icon" />
        </Link>
        <Link className="link-item" to="/about-us">
          <img src={about} alt="icon" />
        </Link>
      </div>
    </Wrapper>
  );
};
export default Navbar;
