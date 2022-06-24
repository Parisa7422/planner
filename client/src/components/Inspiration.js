import Wrapper from "../assets/wrappers/InspirationBox";
import nextIcon from "../assets/images/next.png";
import previousIcon from "../assets/images/previous.png";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";

const Inspiration = () => {
  const { quotes, getAllQuotes, totalQuotes } = useAppContext();

  useEffect(() => {
    getAllQuotes();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * totalQuotes);
    return randomIndex;
  };

  const random = getRandomQuote();

  return (
    <Wrapper>
      <img className="icon" src={previousIcon} alt="previous icon" />
      <div className="inspire-bg"></div>
      {quotes.map((quote, index) => {
        return (
          index === random && (
            <h4 key={quote._id} className="inspire-text">
              {quote.text}
            </h4>
          )
        );
      })}
      <img className="next-icon icon" src={nextIcon} alt="next icon" />
    </Wrapper>
  );
};
export default Inspiration;
