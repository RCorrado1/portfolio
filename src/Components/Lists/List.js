//React && Functional
import { getWidth, sizeChanges } from '../../Functions/Sizes';
import React, { useEffect, useState } from 'react';
import Radium from 'radium';

//Components
import ListItem from './ListItem';
import MenuBurger  from '../MenuBurger';

//Styles
import { displaying, positionate } from '../../Styles/StylesDisplaying';
import { RGBAColors, HEXColors } from '../../Styles/StylesColors';
import { alignElement } from '../../Styles/StylesAlignment';
import { margin } from '../../Styles/StyleBox';

//Render
let List = (props) => {
    const Styles = {
        height: '100vh'
    };

    return(
        <ul style={[
                Styles,
                displaying.flex,
                displaying.column,
                alignElement.min_spacing_h,
                alignElement.start_v,
                positionate(0, 0, 0, 0).fixed,
                margin(),
                { 
                    color: HEXColors.white,
                    listStyle: 'none',
                    backgroundColor: RGBAColors.black,
                    width: '100%'
                }
            ]}
        >
            <MenuBurger clicEvent={ props.clicEvent }
                backColor={ HEXColors.white }/>
            { 
                props.items.map((element, index) => {
                    return <ListItem text={element} key={ index } event={ props.clicEvent }/>
                })
            }
        </ul>
    );
};

export default Radium(List);