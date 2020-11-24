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
        <h1 style={[
            styles,
            text_style.center_align,
            { color: props.colorText }
        ]}>
            { props.text }
        </h1>
    );
};

Subtitle = Radium(Subtitle);

export default Subtitle;