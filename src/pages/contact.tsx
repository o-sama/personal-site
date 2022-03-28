import React from "react";
import { Layout } from "../components/layout";
import styled from "styled-components";

// styles
import { StyledSection } from "../styled-components/styled-section";
import { H1 } from "../styled-components/styled-headers";
import { Row, Column } from "../styled-components/styled-grid";
import { Button } from "../styled-components/styled-button";
import { Label, Input, Form, TextArea } from "../styled-components/styled-form";
import { breakpoints } from "../styled-components/themes";

const ClearButton = styled(Input)`
  width: 20vw;
  height: 5vw;
  align-self: center;
  border-radius: 2.6vw;
  border-style: outset;
  border-color: ${(props) => props.theme["button"]["borderColor"]};
  background: ${(props) => props.theme["button"]["backgroundColor"]["regular"]};
  color: ${(props) => props.theme["text"]["secondary"]};

  :hover {
    transform: translateZ(0);
    background: ${(props) => props.theme["button"]["backgroundColor"]["hover"]};
    color: ${(props) => props.theme["text"]["primary"]};
    transition: all
      ${(props) =>
        `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  }

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["secondary"]};
    width: 18vw;
    height: 4.5vw;
    border-radius: 2.4vw;
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["secondary"]};
    width: 16vw;
    height: 4vw;
    border-radius: 2.2vw;
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["secondary"]};
    width: 14vw;
    height: 3.5vw;
    border-radius: 2vw;
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["secondary"]};
    width: 12vw;
    height: 3vw;
    border-radius: 1.8vw;
  }
`;

const FormRow = styled(Row)`
  padding: 0.75vw 0;
`;

const ContactPage = () => {
  return (
    <Layout>
      <main style={{ paddingTop: "10vh" }}>
        <title>Contact</title>

        <StyledSection>
          <H1>Get in Touch!</H1>
          <Form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            style={{ margin: "0 auto" }}
          >
            <Row center>
              <Column minSpan={12}>
                <FormRow center>
                  <Column minSpan={2}>
                    <Label htmlFor="name">Name</Label>
                  </Column>
                  <Column minSpan={8}>
                    <Input type="text" name="name" id="name" required />
                  </Column>
                </FormRow>
                <FormRow center>
                  <Column minSpan={2}>
                    <Label htmlFor="email">Email</Label>
                  </Column>
                  <Column minSpan={8}>
                    <Input type="email" name="email" id="email" required />
                  </Column>
                </FormRow>
                <FormRow center>
                  <Column minSpan={2}>
                    <Label htmlFor="subject">Subject</Label>
                  </Column>
                  <Column minSpan={8}>
                    <Input type="text" name="subject" id="subject" required />
                  </Column>
                </FormRow>
                <FormRow center>
                  <Column minSpan={2}>
                    <Label htmlFor="message">Message</Label>
                  </Column>
                  <Column minSpan={8}>
                    <TextArea name="message" id="message" rows={5} required />
                  </Column>
                </FormRow>
                <FormRow center>
                  <Column minSpan={2}>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                  </Column>
                  <Column minSpan={8}>
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
              </Column>
            </Row>
          </Form>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default ContactPage;
