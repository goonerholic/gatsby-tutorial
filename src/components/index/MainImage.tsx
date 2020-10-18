import styled from "@emotion/styled";
import React, { ReactElement } from "react";

interface Props {
  imageUrl: string;
  title: string;
}

const StyledMainImage = styled.section`
  width: 100%;
  height: 100vh;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props: { imageUrl: string }) => props.imageUrl})
      no-repeat;
    background-size: cover;
    opacity: 0.6;
  }

  .text-area {
    position: relative;
    left: 20%;
    top: 80%;
    width: 50%;
    color: #000000;
    opacity: 1;
  }
`;

export default function MainImage({ imageUrl, title }: Props): ReactElement {
  return (
    <StyledMainImage imageUrl={imageUrl}>
      <div className="bg-image"></div>
      <div className="text-area">
        <h1>{title}</h1>
      </div>
    </StyledMainImage>
  );
}
