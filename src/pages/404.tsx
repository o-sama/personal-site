import * as React from "react";
import { StyledLink } from "../styled-components/styled-link";
import { Row, Column } from "../styled-components/styled-grid";
import { StyledSection } from "../styled-components/styled-section";
import { H1 } from "../styled-components/styled-headers";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <StyledSection>
        <Row center>
          <Column>
            <Row>
              <h1>Page not found</h1>
            </Row>
            <Row center>
              <p>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">
                  😔
                </span>{" "}
                I couldn’t find what you were looking for.
                <br />
                {process.env.NODE_ENV === "development" ? (
                  <>
                    <br />
                    Try creating a page in <code>src/pages/</code>.
                    <br />
                  </>
                ) : null}
                <br />
                <StyledLink to="/">Go home</StyledLink>.
              </p>
            </Row>
          </Column>
        </Row>
      </StyledSection>
    </main>
  );
};

export default NotFoundPage;
