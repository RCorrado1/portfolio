//React && Functional
import React from 'react';
import Radium from 'radium';

//Styles
import { HEXColors } from '../../Styles/StylesColors';

const ButtonCross = (props) => {
    const Style = {
        color: 'white',
        fontSize: '25px',
        textShadow: `1px 1px 5px ${HEXColors.black}`,
        alignSelf: 'flex-end',
        marginBottom: '15px',
        ":hover": {
            cursor: 'pointer'
        }
    };

    return(
        <span style={ Style } onClick={ props.event } >
            x
        </span>
    );
};

export default Radium(ButtonCross);