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
  width: 14vw;
  height: 3.5vw;
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
            <Form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <Row center>
                <FormRow center>
                  <Column span={3}>
                    <Label htmlFor="name" style={{ marginLeft: "35%" }}>
                      Name
                    </Label>
                  </Column>
                  <Column span={7}>
                    <Input type="text" name="name" id="name" required />
                  </Column>
                </FormRow>
                <FormRow center>
                  <Column span={3}>
                    <Label htmlFor="email" style={{ marginLeft: "35%" }}>
                      Email
                    </Label>
                  </Column>
                  <Column span={7}>
                    <Input type="email" name="email" id="email" required />
                  </Column>
                </FormRow>
                <FormRow center>
                  <Column span={3}>
                    <Label htmlFor="subject" style={{ marginLeft: "35%" }}>
                      Subject
                    </Label>
                  </Column>
                  <Column span={7}>
                    <Input type="text" name="subject" id="subject" required />
                  </Column>
                </FormRow>
                <FormRow center>
                  <Column span={3}>
                    <Label htmlFor="message" style={{ marginLeft: "35%" }}>
                      Message
                    </Label>
                  </Column>
                  <Column span={7}>
                    <TextArea name="message" id="message" rows={5} required />
                  </Column>
                </FormRow>
                <FormRow center>
                  <Column span={3}>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                  </Column>
                  <Column span={7}>
                    <FormRow>
                      <Button type="submit" name="submit">
                        Send
                      </Button>
                      <ClearButton
                        type="reset"
                        value="Clear"
                        style={{ marginLeft: "auto" }}
                        name="clear"
                      />
                    </FormRow>
                  </Column>
                </FormRow>
              </Row>
            </Form>
          </Row>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default ContactPage;
