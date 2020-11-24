//React && Functional
import React from 'react';
import Radium from 'radium';

//Render
let Title = (props) => {
    const styles = {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    };

    return(
        <h1 style={[
            styles,
            { color: props.colorText }
        ]}>
            { props.text }
        </h1>
    );
};

Title = Radium(Title);

export default Title;