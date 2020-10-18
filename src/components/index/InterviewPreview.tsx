import styled from "@emotion/styled";
import { Carousel, Col, Row } from "antd";
import React, { ReactElement } from "react";
import Container from "../common/Container";
import Img from "gatsby-image";

interface Props {
  title: string;
  image: any;
  children: React.ReactNode;
  minHeight: string;
}

const StyledContainer = styled(Container)`
  min-height: ${({ minHeight }: { minHeight: string }) => minHeight};
`;

export default function InterviewPreview({
  title,
  image,
  children,
  minHeight,
}: Props): ReactElement {
  const props = { title, image, children, minHeight };
  console.log(typeof minHeight);
  return (
    <StyledContainer minHeight={minHeight}>
      <h1>{title}</h1>
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Img fluid={image} />
          </Col>
          <Col span={16}>{children}</Col>
        </Row>
      </div>
    </StyledContainer>
  );
}
