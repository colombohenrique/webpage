import React from 'react';
import { Rating } from 'react-simple-star-rating'
import '../styles/components/rate.sass'

const Rate = ({count}) => {
    return (
        <div className="rating">
            <Rating initialValue={count} iconsCount={5} size={35} emptyColor='#1d1d1d' allowFraction readonly />
        </div>
    );
}


export default Rate