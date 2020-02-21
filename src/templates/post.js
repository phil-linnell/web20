import React from "react";

const Post = ({ data }) => {
  const { title, content } = data.contentfulPost;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Post;

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      content
    }
  }
`;