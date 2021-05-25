//React && Functional
import React from 'react';
import Radium from 'radium';

const Arrow = (props) => {
    const Styles = {
        fontSize: 24,
        fontWeight: 'bold',
        ':hover': {
            cursor:'pointer'
        }
    };

    return (
        <span style={ Styles } onClick={ props.event }> 
            { props.direction === 'left' ? '<' : '>' } 
        </span>
    );
};

export default Radium(Arrow);