import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import Company from "../components/index/Company";
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
                order
                title
                page
                image {
                  childImageSharp {
                    fluid {
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

  const nodes = allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.page === "index")
    .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
    .map(({ node }) => ({ ...node.frontmatter, html: node.html }));

  console.log(nodes);

  return (
    <div>
      <MainImage
        image={nodes[0].image.childImageSharp.fluid}
        title={nodes[0].title}
      />
      <Company
        title={nodes[1].title}
        image={nodes[1].image.childImageSharp.fluid}
      >
        <div dangerouslySetInnerHTML={{ __html: nodes[1].html }}></div>
      </Company>
      <InterviewPreview
        title={nodes[2].title}
        image={nodes[2].image.childImageSharp.fluid}
        minHeight={nodes[2].minHeight}
      >
        <div dangerouslySetInnerHTML={{ __html: nodes[2].html }}></div>
      </InterviewPreview>
    </div>
  );
}
