import React from 'react';
import { checkPropTypes } from "prop-types";

import {Wrapper, Content, Text} from './HeroImage.styles';

const HeroImage = ({image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

HeroImage.checkPropTypes = {
    image : checkPropTypes.string,
    title : checkPropTypes.string,
    text : checkPropTypes.string
};

export default HeroImage;