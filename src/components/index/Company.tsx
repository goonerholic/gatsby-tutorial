import styled from "@emotion/styled";
import { Col, Row } from "antd";
import React, { ReactElement } from "react";
import Container from "../common/Container";

interface Props {
  title: string;
  image: any;
  children: React.ReactNode;
}

const StyledImg = styled.img`
  width: 100%;
`;

export default function Company({
  title,
  image,
  children,
}: Props): ReactElement {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <Row>
          <Col span={24}>
            <StyledImg src={image.src} alt="..." />
          </Col>
        </Row>
        <Row>
          <Col span={24}>{children}</Col>
        </Row>
      </div>
    </Container>
  );
}
