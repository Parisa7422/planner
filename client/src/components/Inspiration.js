import Wrapper from "../assets/wrappers/InspirationBox";
import nextIcon from "../assets/images/next.png";
import previousIcon from "../assets/images/previous.png";

const Inspiration = () => {
  return (
    <Wrapper>
      <img src={previousIcon} alt="previous icon" />
      <div className="inspire-bg">inspire text</div>
      <img className="next-icon" src={nextIcon} alt="next icon" />
    </Wrapper>
  );
};
export default Inspiration;
