import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  color: #000000;
  z-index: 100;

  nav {
    font-weight: bold;
    a + a {
      margin-left: 2rem;
    }
  }
`;

export default function Header(): ReactElement {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>3billion</h1>
      </Link>
      <nav>
        <Link to="/recruit">Recruit</Link>
        <Link to="/interview">Interview</Link>
      </nav>
    </StyledHeader>
  );
}
