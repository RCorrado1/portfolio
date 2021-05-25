//React && Functional
import React from 'react';
import Radium from 'radium';

let Image = (props) => {
    const Styles = {
        span: {
            width: props.width,
            height: props.height,
            display: props.display,
            margin: props.isCentered ? 'auto' : 0,
            borderRadius: props.borderRadius ?? 0
        },
        image: {
            width: props.width,
            height: props.height,
            borderRadius: props.borderRadius ?? 0,
        }
    };

    return (
        <span style={ Styles.span }>
            <img src={ props.src }
                alt={ props.alt }
                style={ Styles.image }
                onClick={ props.event }/>
        </span>
    );
};

export default Radium(Image);