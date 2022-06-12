import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-100);
  width: 5%;
  height: 100vh;

  .logo-center {
    margin: 50px auto;
  }

  .link-items {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 30%;
    margin: 80px auto;
  }

  .link-item {
    color: #fff;
    text-decoration: none;
  }
`;

export default Wrapper;
