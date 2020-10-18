import styled from "@emotion/styled";
import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

const StyledContainer = styled.section`
  width: 998px;
  margin: 0 auto;
  margin-top: 4rem;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start; */
`;

export default function Container({ children }: Props): ReactElement {
  return <StyledContainer>{children}</StyledContainer>;
}
