import styled from "@emotion/styled";
import React, { ReactElement } from "react";

interface Props {
  children?: React.ReactNode;
}

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 400px;
  background-color: black;
  margin-top: 4rem;
`;

export default function Footer({ children }: Props): ReactElement {
  return <StyledFooter>{children}</StyledFooter>;
}
