import React, { ReactElement, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  z-index: 100;
  font-size: 1.5rem;

  &.scrolled {
    background-color: #ffffff;
    opacity: 1;
    transition: background-color 0.2s ease-in;
    color: black;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.2);
  }

  nav {
    font-weight: bold;
    a + a {
      margin-left: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Header(): ReactElement {
  const header = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      header.current.classList.add("scrolled");
    } else {
      header.current.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledHeader ref={header}>
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
