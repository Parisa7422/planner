import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--accent-50);
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .note-box {
    background-color: var(--accent-200);
    color: white;
    width: fit-content;
    height: fit-content;
    padding: 2%;
    border-radius: var(--borderRadius);
  }

  .note-direction {
    margin: 5%;
    display: grid;
    grid-gap: 20px;
  }
`;

export default Wrapper;
