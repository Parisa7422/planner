import styled from "styled-components";

const Wrapper = styled.div`
  width: 62%;
  height: 100%;
  margin-right: auto;
  margin-top: 5%;
  display: flex;
  .days {
    display: flex;
  }
  .day {
    flex-direction: row;
    margin: 0 25% 0 0;
    color: var(--grey-300);
    font-size: 1.2rem;
  }
`;

export default Wrapper;
