//React && Functional
import Radium from 'radium';
import React from 'react';

//Styles
import { text_style } from '../../Styles/StylesText';

//Render
let Subtitle = (props) => {
    const styles = {
        fontSize: '1.25rem'
    };

    return(
        <h2 style={[
            styles,
            text_style[props.align] ?? text_style.center_align,
            props.styles,
            { color: props.colorText }
        ]}>
            { props.text }
        </h2>
    );
};

export default Radium(Subtitle);