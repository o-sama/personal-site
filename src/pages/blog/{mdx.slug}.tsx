import React from "react";
import { graphql } from "gatsby";
import BlogPost from "../../components/blogPost";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post: React.FC = (props: any) => {
  const post = props.data;
  return (
    <BlogPost>
      <MDXRenderer>{post["mdx"]["body"]}</MDXRenderer>
    </BlogPost>
  );
};

export const query = graphql`
  query PostBySlug($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
    }
  }
`;

// frontmatter {
//         date
//         title
//       }

export default Post;
