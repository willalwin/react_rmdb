import React from "react";
import { checkPropTypes } from "prop-types";
//styles 
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({name, character, imageUrl})=>(
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb'/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.checkPropTypes = {
    name: checkPropTypes.string, 
    character: checkPropTypes.string,
    imageUrl: checkPropTypes.string
};

export default Actor;