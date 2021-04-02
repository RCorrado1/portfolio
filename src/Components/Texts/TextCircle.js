//React && Functional
import React from 'react';
import Radium from 'radium';

//Styles
import { text_style } from '../../Styles/StylesText';
import { HEXColors } from '../../Styles/StylesColors';
import { borderRadius, padding, BoxShadow } from '../../Styles/StyleBox';

let TextCircle = (props) => {
    return(
        <p style={[
                borderRadius('50%'),
                padding('5px', '5px', '5px', '5px'),
                text_style.center_align,
                BoxShadow,
                { 
                    backgroundColor: HEXColors.white,
                    lineHeight: '40px',
                    width: '40px',
                    ':hover' : {
                        transition: 'width 1s ease, line-height 1.05s ease',
                        width: '50px',
                        lineHeight: '50px',
                        cursor: 'pointer'
                    },
                }
            ]}
            onClick={ props.event }
        >
            { props.text }
        </p>
    );
};

export default Radium(TextCircle);