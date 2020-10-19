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

export default function InterviewPreview({
  title,
  image,
  children,
}: Props): ReactElement {
  const props = { title, image, children };

  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <img
              data-sal="slide-right"
              data-sal-easing="ease"
              data-sal-delay="500"
              data-sal-duration="500"
              src={image.src}
              alt="..."
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
          <Col span={16}>{children}</Col>
        </Row>
      </div>
    </Container>
  );
}
