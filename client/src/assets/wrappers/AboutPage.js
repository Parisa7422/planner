import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 8% 15%;
  background-color: var(--accent-50);
  width: calc(100% - 50px);
  height: 100%;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;

  .about-text {
    color: var(--black);
    line-height: 2;
    font-size: 1.2em;
  }

  .bold-text {
    color: var(--secondary-100);
  }
  @media (max-width: 1024px) {
    font-size: 0.88em;
  }
  @media (max-width: 740px) {
    padding: 3% 8%;
  }
  @media (max-width: 500px) {
    padding: 6% 8%;
    .about-text {
      line-height: normal;
    }
  }

  @media (max-width: 300px) {
    font-size: 0.7em;
  }
`;

export default Wrapper;
