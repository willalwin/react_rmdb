import React from "react";
import { checkPropTypes } from "prop-types";
//styles
import { Wrapper } from "./Button.styles";

const Button = ({text, callback})=>(
    <Wrapper type="button"onClick={callback}>
        {text}
    </Wrapper>
);

 Button.checkPropTypes = {
     text : checkPropTypes.string,
     callback : checkPropTypes.func
 };

export default Button;