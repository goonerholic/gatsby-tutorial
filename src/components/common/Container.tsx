import styled from "@emotion/styled";
import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

const StyledContainer = styled.section`
  width: 998px;
  margin: 0 auto;
  margin-top: 4rem;
  height: calc(100vh - 10rem);
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

export default function Container({ children }: Props): ReactElement {
  return (
    <StyledContainer
      data-sal="slide-up"
      data-sal-easing="ease"
      data-sal-delay="300"
      data-sal-duration="500"
    >
      {children}
    </StyledContainer>
  );
}
