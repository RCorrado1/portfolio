import Radium from 'radium';
import React, { useEffect, useState } from 'react';
import { getWidth, sizeChanges } from '../../Functions/Sizes';

//Styles
import { HEXColors } from '../../Styles/StylesColors';
import { positionate } from '../../Styles/StylesDisplaying';
import { BoxShadow, borderRadius, padding } from '../../Styles/StyleBox';

let Modal = (props) => {
    //State
    const [width, setWidth] = useState();

    //Effect al renderizar
    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        sizeChanges(setWidth);
    }, []);

    //Styles
    const Styles = {
        maxWidth: width === 's' || width === 'xs' ? '300px' : '500px',
        width: width === 's' ? '90%' : width === 'm' ? '50%' : '30%',
        backgroundColor: HEXColors.white
    };

    return(
        <div style={[
            Styles,
            BoxShadow,
            borderRadius('30px'),
            padding('10px', '10px', '10px', '10px'),
            positionate(0,0,0,0).absolute,
            props.style 
        ]}>
            { props.content }
        </div>
    );
};

export default Radium(Modal);

