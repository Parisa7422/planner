import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  background-color: var(--white);
  width: 15%;
  height: 100vh;
  .profile {
    margin: 25% 25% 25%;
    height: 15%;
    background-color: antiquewhite;
    border-radius: 50%;
    text-align: center;
  }
  .sidebar-items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin: auto;
    padding: 10% 0 45%;
    width: 70%;
    position: relative;
  }
`;

export default Wrapper;
