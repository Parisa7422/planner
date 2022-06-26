import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-100);
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.3);
  width: 4%;
  height: 100vh;

  .logo-center {
    margin: 50px auto;
  }

  .link-items {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 60%;
    line-height: 2;
    margin: auto;
  }

  .link-item {
    color: #fff;
    text-decoration: none;
  }
  .logout-icon {
    margin-top: auto;
    visibility: hidden;
    cursor: pointer;
  }
  .note-icon {
    visibility: hidden;
  }
`;

export default Wrapper;
