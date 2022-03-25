import * as React from "react";
import { Layout } from "../components/layout";
import { me } from "../icons";
import indexData from "../content/index.json";

// styles
import styled from "styled-components";
import { Column, Row } from "../styled-components/styled-grid";
import { StyledList, StyledListItem } from "../styled-components/styled-list";
import { StyledSection } from "../styled-components/styled-section";
import { H1, H2 } from "../styled-components/styled-headers";

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const Image = styled.img`
  height: 15vw;
  width: 15vw;

  border: 5px solid ${(props) => props.theme.foregroundElements};
  border-radius: 50%;
`;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <Row>
          <Column span={9}>
            <StyledSection style={{ height: "100%" }}>
              <H1 style={{ paddingBottom: "3vh" }}>About Me</H1>
              {indexData["About"].map((p) => (
                <Row container style={{ marginBottom: "3vh" }}>
                  {p.map((s) => s)}
                </Row>
              ))}
            </StyledSection>
          </Column>
          <Column
            span={3}
            style={{
              height: "100%",
              zIndex: "10",
            }}
          >
            <StyledSection style={{ height: "100%" }}>
              <Row
                center
                style={{
                  marginTop: "10%",
                }}
              >
                <Image src={me} />
              </Row>
              <Row container center>
                <H2>What I like</H2>
                <StyledList style={{ marginLeft: "-7.5%" }}>
                  {indexData["Interests"].map((e, i) => (
                    <StyledListItem key={i}>{e}</StyledListItem>
                  ))}
                </StyledList>
              </Row>
            </StyledSection>
          </Column>
        </Row>

        {/* <h1 style={styles.headingStyles}>
          Congratulations
          <br />
          <span style={styles.headingAccentStyles}>
            — you just made a Gatsby site!{" "}
          </span>
          🎉🎉🎉
        </h1>
        <p style={styles.paragraphStyles}>
          Resume!
          <StyledLink style={styles.linkStyle} to="/resume">
            Go to my first Markdown blog post
          </StyledLink>
        </p>
        <p style={styles.paragraphStyles}>
          Edit <code style={styles.codeStyles}>src/pages/index.tsx</code> to see
          this page update in real-time. 😎
        </p>
        <ul style={styles.listStyles}>
          <li style={styles.docLinkStyle}>
            <a
              style={styles.linkStyle}
              href={`${styles.docLink.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {styles.docLink.text}
            </a>
          </li>
          {links.map((link) => (
            <li
              key={link.url}
              style={{ ...styles.listItemStyles, color: link.color }}
            >
              <span>
                <a
                  style={styles.linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={styles.badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={styles.descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        /> */}
      </main>
    </Layout>
  );
};

export default IndexPage;
