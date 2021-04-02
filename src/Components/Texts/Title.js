//React && Functional
import React from 'react';
import Radium from 'radium';

let Title = (props) => {
    const Styles = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: props.textAlign || 'left',
        color: props.colorText,
        ":hover": {
            cursor: props.hovered
        }
    };

    return(
        <h1 style={ Styles } onClick={ props.event }>
            { props.text }
        </h1>
    );
};

export default Radium(Title);