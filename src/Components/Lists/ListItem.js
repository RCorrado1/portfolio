//React && Functional
import React from 'react';
import Radium from 'radium';

//Styles
import { text_style } from '../../Styles/StylesText';

let ListItem = (props) => {
    const styles = {
        fontSize: '20px',
        textTransform: 'capitalize',
        ':hover': {
            cursor: 'pointer'
        }
    };

    const handleScroll = () => {
        let destiny_scroll = document.getElementById(props.text.toLowerCase()).offsetTop;
        window.scroll({ top: destiny_scroll, behavior: 'smooth' });
        props.event(true);
    };

    return(
        <li style={[
                text_style.center_align,
                styles,
            ]}
            onClick={ e => handleScroll() }
            key={ props.key }
        >
            { props.text}
        </li>
    );
};

export default Radium(ListItem);