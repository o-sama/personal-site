import React from "react";
import { Layout } from "../components/layout";
import styled from "styled-components";

// styles
import { StyledSection } from "../styled-components/styled-section";
import { H1, H2, H3 } from "../styled-components/styled-headers";
import { Row, Column } from "../styled-components/styled-grid";
import { Button } from "../styled-components/styled-button";
import { Label, Input, Form, TextArea } from "../styled-components/styled-form";

const ClearButton = styled(Input)`
  width: 16vw;
  height: 4vw;
  align-self: center;
  border-radius: 2vw;
  border-color: ${(props) => props.theme.secondaryText};
  background: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.secondaryText};
`;

const ContactPage = () => {
  return (
    <Layout>
      <main style={{ height: "50vh", paddingTop: "15vh" }}>
        <title>Contact</title>
        <H1>Contact</H1>
        <StyledSection>
          <Row container center>
            <Form method="post" action="https://formspree.io/f/mnqwzkle">
              <Row center>
                {" "}
                <Column span={5}>
                  <Label htmlFor="name">Name</Label>
                </Column>
                <Column span={7}>
                  <Input type="text" name="name" id="name" required />
                </Column>
              </Row>
              <Row center>
                <Column span={5}>
                  <Label htmlFor="email">Email</Label>
                </Column>

                <Column span={7}>
                  <Input type="email" name="email" id="email" required />
                </Column>
              </Row>
              <Row center>
                <Column span={5}>
                  <Label htmlFor="subject">Subject</Label>
                </Column>

                <Column span={7}>
                  <Input type="text" name="subject" id="subject" required />
                </Column>
              </Row>
              <Row center>
                <Column span={5}>
                  <Label htmlFor="message">Message</Label>
                </Column>
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <Column span={7}>
                  <TextArea name="message" id="message" rows={5} required />
                </Column>
              </Row>
              <Row center style={{ paddingTop: "3vh" }}>
                <Column span={6}>
                  <Button type="submit">Send</Button>
                </Column>
                <Column span={6}>
                  <ClearButton type="reset" value="Clear" />
                </Column>
              </Row>
            </Form>
          </Row>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default ContactPage;
