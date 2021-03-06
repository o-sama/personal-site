import React, { FC, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useTheme } from "styled-components";

// styles
import { Row, Column } from "../styled-components/styled-grid";
import styled from "styled-components";
import {
  TimelineDiv,
  TimelineNode,
  TimelineText,
} from "../styled-components/styled-timeline";

interface Props {
  headers: string[];
}

const TimelineContainer = styled(Row)<{ onMouseLeave?: () => void }>`
  width: 11.5%;
  height: 50vh;
  justify-content: right;
  flex-wrap: nowrap;
  position: fixed;
  right: 0%;
  top: 25%;
  font-family: "raleway";
`;

const TimelineColumn = styled(Column)`
  width: auto;
  height: 50vh;
  justify-content: start;
  transform: scale(1.1);
  position: relative;
  margin-right: auto;
  margin-left: auto;
`;

const Timeline: FC<Props> = ({ headers }) => {
  const docBody: HTMLElement = document.body.parentNode as any;
  const docHeight: number = docBody!.scrollHeight - docBody!.clientHeight;

  const getHeightPercentage: any = (element: any, ref: any) => {
    return ((element.scrollTop || docBody!.scrollTop) / docHeight) * 100;
  };

  const [shouldBeSmall, setShouldBeSmall] = useState(true);
  const [scrollLevel, setScrollLevel] = useState(
    getHeightPercentage(document.body)
  );
  const theme = useTheme();

  const vw = document.documentElement.clientWidth || 0;
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const vwTovh = vw / vh;
  const nodeHeight = 1.75 * vwTovh;

  const handleScroll = () => {
    setScrollLevel(getHeightPercentage(document.body));
  };
  window.addEventListener("scroll", handleScroll);
  let scrollGradient: string = `${theme["text"]["headers"]} 0%, ${theme["text"]["headers"]} ${scrollLevel}%, ${theme["background"]["foregroundElements"]} ${scrollLevel}%, ${theme["background"]["foregroundElements"]} 100%`;

  const nodeBackgrounds: string[] = [];

  const margins: number[] = headers.map((h) => {
    const element = document.getElementById(`${h.replaceAll(" ", "")}`);
    // @ts-ignore: Object is possibly 'null'
    const rect: { x: number; y: number; height: number; width: number } =
      element?.getBoundingClientRect();

    const bodyRect = document.body.getBoundingClientRect();

    const elementScroll =
      rect !== undefined || null
        ? ((rect.y - bodyRect.y) /
            (document.body.scrollHeight - document.body.clientHeight)) *
          100
        : 0;

    const margin = elementScroll < 100 ? elementScroll - 1 : 95;

    if (scrollLevel < margin) {
      nodeBackgrounds.push(
        `${theme["background"]["foregroundElements"]} 0%, ${theme["background"]["foregroundElements"]} 100%`
      );
    } else if (scrollLevel > margin + nodeHeight) {
      nodeBackgrounds.push(
        `${theme["text"]["headers"]} 0%, ${theme["text"]["headers"]} 100%`
      );
    } else {
      nodeBackgrounds.push(
        `${theme["text"]["headers"]} 0%, ${theme["text"]["headers"]} ${
          ((scrollLevel - margin) / nodeHeight) * 100
        }%, ${theme["background"]["foregroundElements"]} ${
          ((scrollLevel - margin) / nodeHeight) * 100
        }%, ${theme["background"]["foregroundElements"]} 100%`
      );
    }

    return margin;
  });

  return (
    <TimelineContainer
      onMouseLeave={() => {
        setShouldBeSmall(true);
      }}
      onMouseEnter={() => {
        setShouldBeSmall(false);
      }}
    >
      <TimelineColumn>
        {margins.map((e, i) => {
          return (
            <TimelineText
              key={headers[i]}
              shouldBeHidden={shouldBeSmall}
              mgin={e}
              onClick={() =>
                scrollTo(`#${headers[i].replaceAll(" ", "")}`, "start")
              }
              current={i}
            >
              {headers[i]}
            </TimelineText>
          );
        })}
      </TimelineColumn>
      <TimelineDiv
        id="timelineDiv"
        gradients={scrollGradient}
        shouldBeSmall={shouldBeSmall}
        onClick={(e) => {
          const target = e.target as Element;
          if (target.id === "timelineDiv") {
            const rect = target.getBoundingClientRect();
            const y = (e.clientY - rect.top) / rect.height;
            window.scrollTo({ top: y * docHeight, behavior: "smooth" });
          }
        }}
      >
        {margins.map((e, i) => {
          return (
            <TimelineNode
              key={headers[i]}
              mgin={e}
              gradients={nodeBackgrounds[i]}
              onClick={() =>
                scrollTo(`#${headers[i].replaceAll(" ", "")}`, "start")
              }
            ></TimelineNode>
          );
        })}
      </TimelineDiv>
    </TimelineContainer>
  );
};

export default Timeline;
