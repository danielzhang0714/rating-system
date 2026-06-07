import React from 'react';
import {FaStar} from 'react-icons/fa';

function Star(props) {
    return(
        <div>
            <FaStar className={props.selected ? 'star selected' : 'star'} onClick={props.onClick} />
        </div>
    )
};

export default Star;