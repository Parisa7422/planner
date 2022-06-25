import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .input-container {
    height: 30%;
  }
  .create-note {
    padding: 0;
    border: 1px solid var(--secondary-200);
    border-radius: var(--borderRadius);
    height: fit-content;
    width: 20%;
    position: relative;
    background-color: var(--white);
    margin: auto;
    margin-top: 3%;
  }
  .create-note input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--secondary-100);
    padding: 5% 5%;
    font-size: 1.2em;
  }

  .create-note input::placeholder {
    color: var(--secondary-100);
  }

  .note-textarea::placeholder {
    color: var(--secondary-200);
    font-size: 0.9em;
  }

  .note-textarea {
    width: 100%;
    padding: 5%;
    border: none;
    background: transparent;
    outline: none;
    resize: none;
    color: var(--secondary-200);
    font-size: 1.2em;
  }
  .note-box {
    background-color: var(--accent-200);
    color: white;
    padding: 5% 7% 5% 5%;

    border-radius: var(--borderRadius);
    position: relative;
  }

  .note-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    justify-content: center;
    align-items: baseline;
    overflow: hidden;
    overflow-y: scroll;
    height: 65%;
    grid-column-gap: 4%;
    grid-row-gap: 2%;
    margin: 3%;
    padding: 0 1%;
    margin-top: 0;

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
