import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import InterviewPreview from "../components/index/InterviewPreview";
import MainImage from "../components/index/MainImage";

interface Props {}

export default function IndexContainer({}: Props): ReactElement {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { page: { eq: "index" } } }) {
          edges {
            node {
              frontmatter {
                title
                image {
                  
                }
              }
              html
            }
          }
        }
      }
    `,
  );

  console.log(allMarkdownRemark);
  const { frontmatter, html } = allMarkdownRemark.edges[0].node;
  const { title, image } = frontmatter;
  return (
    <div>
      <MainImage imageUrl={image[0]} title={title[0]} />
      <InterviewPreview title={title} image={image} minHeight={minHeight}>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </InterviewPreview>
    </div>
  );
}
