//React && Functional
import React from 'react';
import Radium from 'radium';

//Styles
import '../Styles/css/Techs.css';
import { margin } from '../Styles/StyleBox';
import { alignElement } from '../Styles/StylesAlignment';

let SpanTech = (props) => {
    const className = `${props.tech} colored span-tech`;
    const styles = {
        fontSize: '60px',
    };

    return (
        <span className={ className }
            key={props.key}
            style={[ 
                margin(0, '15px', '15px', 0), 
                alignElement.spacing_h, 
                styles 
            ]}
        ></span>
    );
}

export default Radium(SpanTech);