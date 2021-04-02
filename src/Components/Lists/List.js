//React && Functional
import React from 'react';
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
    return(
        <ul style={[
                displaying.flex,
                displaying.column,
                alignElement.min_spacing_h,
                alignElement.start_v,
                positionate(0, 0, 0, 0, 2).index,
                positionate().fixed,
                margin(),
                { 
                    color: HEXColors.white,
                    listStyle: 'none',
                    backgroundColor: RGBAColors.black,
                    width: '100%',
                    height: '100vh'
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