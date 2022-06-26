import styled from "styled-components";

const Wrapper = styled.div`
  width: 60%;
  height: 350px;
  margin-right: auto;
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(7, 40px);
  grid-template-rows: 60px repeat(5, 40px);
  gap: 6%;
  row-gap: 4%;
  text-align: center;
  .day {
    color: var(--grey-300);
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .days {
    background-color: var(--white);
    border: 1px solid var(--grey-300);
    color: var(--grey-300);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .select {
    background-color: var(--secondary-100);
    border: none;
    color: var(--white);
  }
`;

export default Wrapper;
