import React from "react";
import { Layout } from "../components/layout";
import { Row } from "../styled-components/styled-grid";

import { H2 } from "../styled-components/styled-headers";
import { StyledSection } from "../styled-components/styled-section";

const SuccessPage = () => {
  return (
    <Layout>
      <main>
        <StyledSection>
          <Row center style={{ padding: " 25vh 0" }}>
            <H2>
              Thank you for contacting me, I will get back to you shortly!
            </H2>
          </Row>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default SuccessPage;
