import Radium from 'radium';
import React, { useEffect, useState } from 'react';
import { getWidth, sizeChanges } from '../../Functions/Sizes';

//Styles
import { HEXColors } from '../../Styles/StylesColors';
import { positionate } from '../../Styles/StylesDisplaying';
import { BoxShadow, borderRadius, padding } from '../../Styles/StyleBox';

let Modal = (props) => {
    const [width, setWidth] = useState();

    const Styles = {
        maxWidth: props.maxWidth ? props.maxWidth : width === 's' || width === 'xs' ? '300px' : '500px',
        width: width === 's' ? '90%' : width === 'm' ? '70%' : '60%',
        backgroundColor: props.backColor ?? HEXColors.white
    };

    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    return(
        <div style={[
            Styles,
            BoxShadow,
            borderRadius(props.borderRadius ?? '30px'),
            padding('10px', '10px', '10px', '10px'),
            positionate(0,0,0,0).fixed,
            props.style 
        ]}>
            { props.content }
        </div>
    );
};

export default Radium(Modal);

