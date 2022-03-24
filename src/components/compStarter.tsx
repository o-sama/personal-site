import React, { Children, FC } from "react";
import { Link } from "gatsby";

// styles
import { Nav } from "../styled-components/styled-nav";
import { Row, Column } from "../styled-components/styled-grid";
import { light, dark } from "../styled-components/themes";
import styled from "styled-components";

interface Props {
  foo: string;
}

const Comp: FC<Props> = ({ foo }) => {
  return null;
};

export default Comp;
