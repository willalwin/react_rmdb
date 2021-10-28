import React from "react";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";
//styles
import {Wrapper, Content} from './Breadcrumb.styles';

const Breadcrumb = ({movieTitle})=>(
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

Breadcrumb.checkPropTypes = {
    movieTitle : checkPropTypes.string
};

export default Breadcrumb;