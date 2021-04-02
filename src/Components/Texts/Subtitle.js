//React && Functional
import Radium from 'radium';
import React from 'react';

//Styles
import { text_style } from '../../Styles/StylesText';

let Subtitle = (props) => {
    return(
        <h2 style={[
            text_style[props.align] ?? text_style.center_align,
            props.styles,
            { color: props.colorText, fontSize: '1.25rem' }
        ]}>
            { props.text }
        </h2>
    );
};

export default Radium(Subtitle);