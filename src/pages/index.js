import React from "react";
import { css } from 'linaria';

import Layout from "../components/layout";

const cssWrapper = css`
  p {
    color: rebeccapurple
  }
`;

export default () => (
  <Layout>
    <div className={cssWrapper}>
      <h1>Web 20</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <h2>Heading 2</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </Layout>
);