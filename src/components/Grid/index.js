import React from "react";
import { checkPropTypes } from "prop-types";

import { Wrapper, Content } from "./Grid.styles";

const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

Grid.checkPropTypes = {
    header : checkPropTypes.string
}

export default Grid;