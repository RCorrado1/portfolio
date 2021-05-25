//React && Functional
import Radium from 'radium';
import React from 'react';

//Styles
import { text_style } from '../../Styles/StylesText';

let Paragraph = (props) => {
    const text_styling = (props.alignment === 'center')
        ? text_style.center_align : (props.alignment === 'right')
            ? text_style.right_align : text_style.left_align;

    return(
        <p style={[
            text_styling,
            props.styles,
            { 
                color: props.colorText,
                fontSize: props.fontSize
            }
        ]}>
            { props.text }
        </p>
    );
};

export default Radium(Paragraph);
