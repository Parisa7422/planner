import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--grey-50);
  width: 1100px;
  height: 130px;
  border-radius: var(--borderRadius);
  margin-top: 5%;
  display: flex;
  .next-icon {
    margin-left: auto;
  }
  .icon {
    cursor: pointer;
    z-index: 2;
  }

  .inspire-text {
    text-align: center;
    position: absolute;
    text-shadow: 1px 1.2px var(--grey-100);
    color: var(--black);
    letter-spacing: 0.1rem;
    left: 10%;
    top: 9%;
    right: 30%;
    font-size: 1.5em;
  }
`;
export default Wrapper;
