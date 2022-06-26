import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  background-color: var(--white);
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.3);
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
    padding: 20% 0 95%;
    width: 70%;
    position: relative;
  }
`;

export default Wrapper;
