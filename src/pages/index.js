import React from "react";
import { graphql, Link } from "gatsby";
import { css } from 'linaria';

import Layout from "../components/layout";

const cssWrapper = css`
  h2 {
    color: #666
  }
`;

export default ({ data }) => {
  const posts = data.allContentfulPost.edges.map(x => x.node);

  return (
    <Layout>
      <div className={cssWrapper}>
        <h1>Web 20</h1>
        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <li><Link to={`/${post.slug}`}>{post.title}</Link></li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;