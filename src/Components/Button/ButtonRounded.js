import React from 'react';
import Radium from 'radium';

//Styles
import { sizes } from '../../Styles/StylesSizes';
import { HEXColors } from '../../Styles/StylesColors';
import { borderRadius, padding, margin, borderStyle, RemoveFocusOutline } from '../../Styles/StyleBox';

let ButtonRounded = (props) => {
    //Styles
    let border_radius = borderRadius('20px'),
        padding_style = padding('10px', '10px', '10px', '10px'),
        margin_style = margin('5px'),
        border_style = borderStyle(),
        styles = {
            backgroundColor: props.backColor ?? HEXColors.white,
            color: props.textColor ?? HEXColors.black,
            ':hover' : {
                transition: 'background-color 1s ease, color 1.05s ease, border .9s',
                backgroundColor: 'transparent',
                color: props.hoverColor ?? HEXColors.white,
                border: borderStyle(`1px solid ${HEXColors.white}`),
                cursor: 'pointer'
            },
            ':focus': RemoveFocusOutline,
        };

    return(
        <button onClick={ props.event }
            style={[
                border_radius,
                sizes.w_150px,
                padding_style,
                margin_style,
                border_style,
                styles
            ]}>
                { props.text }
        </button>
    );
};

export default Radium(ButtonRounded);