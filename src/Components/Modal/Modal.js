import Radium from 'radium';
import React from 'react';

//Styles
import '../../Styles/css/Modal.css';
import { alignElement } from '../../Styles/StylesAlignment';
import { HEXColors, RGBAColors } from '../../Styles/StylesColors';
import { positionate, displaying } from '../../Styles/StylesDisplaying';
import { BoxShadow, borderRadius, padding } from '../../Styles/StyleBox';

let Modal = (props) => {
    const Styles = {
        content: {
            backgroundColor: props.backColor ?? HEXColors.white
        },
        container: {
            backgroundColor: props.wrapperColor ?? RGBAColors.black,
            height: '100vh',
            width: '100%'
        }
    };
    const position = positionate(0,0,0,0,2);

    return(
        <div style={[
            Styles.container,
            position.fixed,
            position.index,
            position.axis,
            displaying.flex,
            alignElement.center
        ]}>
            <div style={[
                    Styles.content,
                    BoxShadow,
                    borderRadius(props.borderRadius ?? '30px'),
                    positionate(0,0,0,0).relative,
                    padding('10px', '10px', '10px', '10px'),
                    props.style 
                ]}
                className='modal-content'
            >
                { props.content }
            </div>
        </div>
    );
};

export default Radium(Modal);

