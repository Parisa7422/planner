import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  .center-items {
    margin: auto;
    width: 75%;
    height: 100vh;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }
`;

export default Wrapper;
