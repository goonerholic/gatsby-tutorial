import styled from "@emotion/styled";
import { Carousel, Col, Row } from "antd";
import React, { ReactElement } from "react";
import Container from "../common/Container";

interface Props {
  title: string;
  imageSrc: string;
  children: React.ReactNode;
}

export default function InterviewPreview({
  title,
  imageSrc,
  children,
}: Props): ReactElement {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <img src={imageSrc} alt="..." style={{ width: "100%" }} />
          </Col>
          <Col span={16}>{children}</Col>
        </Row>
      </div>
    </Container>
  );
}
