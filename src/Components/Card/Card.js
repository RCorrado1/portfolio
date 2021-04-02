import React, { useEffect, useState } from 'react';
import Radium from 'radium';

//Styles
import { text_style } from '../../Styles/StylesText';
import { HEXColors } from '../../Styles/StylesColors';
import { borderRadius, padding, BoxShadow } from '../../Styles/StyleBox';

let Card = (props) => {
    const [colorCard, setColor] = useState();

    useEffect(() => {
        setColor(props.color ?? HEXColors.white);
    }, []);

    return(
        <span style={[
                BoxShadow,
                borderRadius('20px'),
                padding('15px', '15px', '15px', '15px'),
                text_style.center_align,
                props.styles,
                {
                    color: HEXColors.black,
                    width: '120px',
                    display: 'inline-block',
                    fontSize: props.fontSize ?? '10px',
                    fontWeight: 'bolder',
                    backgroundColor: colorCard
                }
            ]}
            onClick={ props.event }
        >
            { props.text }
        </span>
    );
};

export default Radium(Card);