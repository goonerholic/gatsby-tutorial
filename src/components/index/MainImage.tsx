import styled from "@emotion/styled";
import React, { ReactElement } from "react";

interface Props {
  image: string;
  title: string;
}

const StyledMainImage = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props: { image: any }) => props.image.src}) no-repeat;
    background-size: cover;
    opacity: 0.6;
  }

  .text-area {
    position: relative;
    left: 20%;
    top: 60%;
    width: 50%;
    color: white;
    opacity: 1;

    h1 {
      color: white;
      font-size: 2rem;
    }

    @media only screen and (max-width: 768px) {
      .text-area {
        left: 5%auto;
      }
    }
  }
`;

export default function MainImage({ image, title }: Props): ReactElement {
  return (
    <StyledMainImage image={image}>
      <div className="bg-image"></div>
      <div className="text-area">
        <h1>{title}</h1>
      </div>
    </StyledMainImage>
  );
}
