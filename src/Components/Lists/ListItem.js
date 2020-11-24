//React && Functional
import React from 'react';
import Radium from 'radium';

//Styles
import { text_style } from '../../Styles/StylesText';

//Render
let ListItem = (props) => {
    const styles = {
        fontSize: '20px'
    };

    return(
        <li style={[
            text_style.center_align,
            styles,
        ]}>
            { props.text}
        </li>
    );
};

ListItem = Radium(ListItem);

export default ListItem;