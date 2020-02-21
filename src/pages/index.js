import React from "react";
import { graphql } from "gatsby";
import { css } from 'linaria';

import Layout from "../components/layout";

const cssWrapper = css`
  h2 {
    color: #666
  }
`;

export default ({ data }) => {
  const pages = data.allContentfulPage.edges.map(x => x.node);

  return (
    <Layout>
      <div className={cssWrapper}>
        <h1>Web 20</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <h2>Heading 2</h2>
        {pages.map(page => (
          <div>{page.name}</div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulPage {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;