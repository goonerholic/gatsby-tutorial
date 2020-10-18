import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import InterviewPreview from "../components/index/InterviewPreview";

export default function InterviewContainer(): ReactElement {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
                imageSrc {
                    childImageSharp {
                        fluid(maxWidth: 600px) {
                            ...GatsbyImageSharpFluid
                        }
                    }
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
  const { title, imageSrc } = frontmatter;
  return (
    <InterviewPreview title={title} imageSrc={imageSrc}>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </InterviewPreview>
  );
}
