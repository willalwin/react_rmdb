import React from "react";
import { checkPropTypes } from "prop-types";
//helpers
import{calcTime, convertMoney} from '../../helpers';
//styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({time, budget, revenue}) =>(
    <Wrapper>
        <Content>
            <div className='column'>
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className='column'>
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className='column'>
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.checkPropTypes = {
    time : checkPropTypes.number,
    budget : checkPropTypes.number,
    revenue : checkPropTypes.number
};

export default MovieInfoBar;