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
    padding: 5%;
    border-radius: var(--borderRadius);
    position: relative;
  }

  .note-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    justify-content: center;
    align-items: baseline;
    grid-column-gap: 4%;
    grid-row-gap: 10%;
    margin: 5%;
    background-color: brown;
    /* display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 5%;
    align-items: flex-start;
    justify-content: space-between; */
  }
  .note-content,
  .note-content:focus {
    background: transparent;
    border: none;
    outline: none;
  }
`;

export default Wrapper;
