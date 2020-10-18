import React, { ReactElement } from "react";
import Header from "./Header";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
