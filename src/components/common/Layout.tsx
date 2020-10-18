import React, { ReactElement } from "react";
import Header from "./Header";
import styled from "@emotion/styled";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props): ReactElement {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <div>
      <Helmet title={title ? title : data.site.siteMetadata.title} />
      <Header />
      {children}
    </div>
  );
}
