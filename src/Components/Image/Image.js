import React from 'react';
import Radium from 'radium';

let Image = (props) => {
    //Styles
    let styles = {
        width: props.width,
        height: props.height,
        display: props.display,
        margin: props.isCentered ? 'auto' : 0,
        borderRadius: props.borderRadius ?? 0
    };

    return <img src={ props.src }
        alt={ props.alt }
        style={ styles } />
};

export default Radium(Image);