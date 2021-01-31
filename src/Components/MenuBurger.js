//React && Functional
import React from 'react';
import Radium from 'radium';

//Styles
import { padding } from '../Styles/StyleBox';
import { HEXColors } from '../Styles/StylesColors';
import { displaying } from '../Styles/StylesDisplaying';
import { alignElement } from '../Styles/StylesAlignment';

let MenuBurger = (props) => {
    const Style = {
        menu_style: {
            width: '30px',
            height: '30px',
            ':hover': {
                cursor: 'pointer'
            }
        },
    };

    return(
        <div style={[ 
                Style.menu_style,
                displaying.flex,
                displaying.column,
                alignElement.spacing_h,
                padding(10, 10, 10, 10)
            ]}
            onClick={ props.clicEvent }
        >
            <MenuBurgerBar backColor={ props.backColor }/>
            <MenuBurgerBar backColor={ props.backColor }/>
            <MenuBurgerBar backColor={ props.backColor }/>
        </div>
    )
};

let MenuBurgerBar = (props) => {
    const Style = {
        bar_styles: {
            height: '1px',
            width: props.width || '100%',
            backgroundColor: props.backColor ?? HEXColors.black,
            borderRadius: '20px'
        }
    };

    return <div style={ Style.bar_styles }></div>
};

export default Radium(MenuBurger);