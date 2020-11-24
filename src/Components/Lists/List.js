//React && Functional
import React, { useEffect, useState } from 'react';
import Radium from 'radium';

//Components
import ListItem from './ListItem';
import MenuBurger  from '../MenuBurger';

//Styles
import { displaying, positionate } from '../../Styles/StylesDisplaying';
import { RGBAColors, HEXColors } from '../../Styles/StylesColors';
import { alignElement } from '../../Styles/StylesAlignment';
import { getWidth } from '../../Functions/Sizes';
import { margin } from '../../Styles/StyleBox';

//Render
let List = (props) => {
    const [width, setWidth] = useState();

    const Styles = {
        height: '100vh',
        borderBottomRightRadius: '100%'
    };

    useEffect(() => {
        setWidth(getWidth(window.innerWidth));
        window.addEventListener('resize', () => setWidth(getWidth(window.innerWidth)), false); 
    }, []);

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
                width: width === 'xs'
                    ? '100%' : (width === 's' || width === 'm')
                        ? '85%' : (width === 'l')
                            ? '70%' : '50%'
            }
        ]}>
            <MenuBurger clicEvent={ props.clicEvent }/>
            { 
                props.items.map(element => {
                    return <ListItem text={element} />
                })
            }
        </ul>
    );
};

List = Radium(List);

export default List;