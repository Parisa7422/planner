import styled from "styled-components";

const Wrapper = styled.div`
  background-color: beige;
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
  }
  .inspire-text {
    text-align: center;
    position: absolute;
    left: 10%;
    top: 10%;
    right: 30%;
    font-size: 1.5em;
  }
`;
export default Wrapper;
