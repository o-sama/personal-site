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
  border-style: outset;
  border-color: ${(props) => props.theme.secondaryText};
  background: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.secondaryText};

  :hover {
    background: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.mainText};
    transition: all ease-in-out 0.35s;
  }
`;

const FormRow = styled(Row)`
  padding: 0.75vw 0;
`;

const ContactPage = () => {
  return (
    <Layout>
      <main style={{ height: "50vh", paddingTop: "15vh" }}>
        <title>Contact</title>
        <H1 style={{ marginTop: "-5%", marginBottom: "5%", fontSize: "4vw" }}>
          Get in Touch!
        </H1>
        <StyledSection>
          <Row container center>
            <Form method="post" action="https://formspree.io/f/mnqwzkle">
              <Row center>
                <Column span={4}>
                  <FormRow>
                    <Label htmlFor="name">Name</Label>
                  </FormRow>
                  <FormRow>
                    <Label htmlFor="email">Email</Label>
                  </FormRow>
                  <FormRow>
                    <Label htmlFor="subject">Subject</Label>
                  </FormRow>
                  <FormRow>
                    <Label htmlFor="message">Message</Label>
                  </FormRow>
                  {/* <FormRow>
                    <Label />
                  </FormRow> */}
                  {/* min-height: 2.5vw; */}
                </Column>
                <Column span={8}>
                  <FormRow>
                    <Input type="text" name="name" id="name" required />
                  </FormRow>
                  <FormRow>
                    <Input type="email" name="email" id="email" required />
                  </FormRow>
                  <FormRow>
                    <Input type="text" name="subject" id="subject" required />
                  </FormRow>
                  <FormRow>
                    <input
                      type="text"
                      name="_gotcha"
                      style={{ display: "none" }}
                    />
                    <TextArea name="message" id="message" rows={5} required />
                  </FormRow>
                  <FormRow>
                    <Button type="submit">Send</Button>
                    <ClearButton
                      type="reset"
                      value="Clear"
                      style={{ marginLeft: "auto" }}
                    />
                  </FormRow>
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
