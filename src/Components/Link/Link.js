//React && Functional
import Radium from 'radium';
import React, { useEffect, useState } from 'react';

let Link = (props) => {
    const [link, setLink] = useState();

    const Style = {
        base: {
            color: 'inherit',
            textDecoration: 'none',
            ':hover': {
                transition: 'color 1s ease, text-decoration 1s ease',
                textDecoration: 'underline',
                color: props.color
            }
        }
    };

    useEffect(() => {
        if(typeof props.link === 'string') setLink(props.link);
    }, [props.link]);

    return (
        <a href={ link } 
            style={ Style.base }
            target='_blank'
        >
            { props.text }
        </a>
    );
};

export default Radium(Link);