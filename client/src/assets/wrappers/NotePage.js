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
    padding: 2%;
    border-radius: var(--borderRadius);
    align-self: center;
    min-height: 10%;
    width: 30%;
    margin-bottom: 2%;
  }

  .note-direction {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 5%;
    align-items: baseline;
    justify-content: space-around;

    /* margin: 3%;
    display: grid;
    grid-gap: 5%;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(50px, auto);
    background-color: aliceblue;
    align-items: center; */
  }
`;

export default Wrapper;
