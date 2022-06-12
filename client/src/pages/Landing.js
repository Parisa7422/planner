import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="background-img">
      <div className="header-position">
        <h1>
          Lorem ipsum dolor <br />
          sit amet, consetetur <br /> sadipscing elitr.
        </h1>
        <Link to="/register" className="btn-login btn">
          log in
        </Link>
      </div>
    </div>
  );
};
export default Landing;
