import React from 'react';
import { Link } from 'react-router-dom';
import { checkPropTypes } from "prop-types";

//styles
import { Image } from './Thumb.styles';

const Thumb = ({image, movieId, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb'/>
            </Link>
        ):(
            <Image src={image} alt='movie-thumb'/>
        )}  
    </div>
);

Thumb.checkPropTypes = {
    image : checkPropTypes.string,
    movieId : checkPropTypes.number,
    clickable : checkPropTypes.bool
}

export default Thumb;
