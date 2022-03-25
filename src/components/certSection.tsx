import React, { FC } from "react";
import resumeFile from "../content/resume.json";

// styles
import { Row, Column } from "../styled-components/styled-grid";
import { H3 } from "../styled-components/styled-headers";

interface Props {}

type CertEmbedProps = {
  embedBadgeId: string;
  embedBadgeHost: string;
  embedBadgeSrc: string;
};

const CertEmbed = ({
  embedBadgeId,
  embedBadgeHost,
  embedBadgeSrc,
}: CertEmbedProps): JSX.Element => {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = embedBadgeSrc;
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Column
      id={embedBadgeId}
      data-iframe-width="275"
      data-iframe-height="275"
      data-share-badge-id={embedBadgeId}
      data-share-badge-host={embedBadgeHost}
    />
  );
};

const CertSection: FC<Props> = () => {
  return (
    <div>
      {resumeFile["Certifications"].map((cert) => {
        return (
          <React.Fragment key={cert["certification"]}>
            <Row>
              <Row center>
                <H3>{cert["certification"]}</H3>
              </Row>
              <Row center secondary>
                <strong>
                  <i>{cert["dateAchieved"]}</i>
                </strong>
              </Row>
              <Row center>
                <CertEmbed
                  key={cert["certification"]}
                  embedBadgeSrc={cert["embedBadgeSrc"]}
                  embedBadgeHost={cert["embedBadgeHost"]}
                  embedBadgeId={cert["embedBadgeId"]}
                />
              </Row>
            </Row>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CertSection;
